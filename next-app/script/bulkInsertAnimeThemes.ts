import { Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";

function pp(val: any) {
  console.dir(val, { depth: null });
}

const prisma = new PrismaClient();

const exampleJson = {
  id: 4216,
  name: "High Card Season 2",
  resources: [
    {
      external_id: 54869,
      site: "MyAnimeList",
    },
    {
      external_id: 163151,
      site: "AniList",
    },
    {
      external_id: 17957,
      site: "aniDB",
    },
    {
      external_id: 47250,
      site: "Kitsu",
    },
  ],
  animethemes: [
    {
      id: 12688,
      slug: "OP1",
      song: {
        title: "Showdown",
        artists: [
          {
            id: 1194,
            name: "FIVE NEW OLD",
          },
        ],
      },
    },
    {
      id: 12689,
      slug: "ED1",
      song: {
        title: "Hakuchuumu",
        artists: [
          {
            id: 972,
            name: "Raon",
          },
        ],
      },
    },
  ],
};

type AnimeThemeJson = typeof exampleJson;

async function main() {
  for (let page_num = 1; true; page_num++) {
    const baseUrl = "https://api.animethemes.moe/anime";
    const res = await axios.get(baseUrl, {
      params: {
        filter: {
          has: "resources",
          resource: {
            site: "AniList,MyAnimeList,Kitsu,aniDB",
          },
        },
        include: "animethemes.song.artists,resources",
        page: {
          size: 5,
          number: page_num,
        },
      },
    });
    const rawAnimeJSON = res.data.anime;
    if (rawAnimeJSON.length === 0) break;

    // if (page_num === 1) console.log(rawAnimeJSON);
    await bulkInsert(rawAnimeJSON);
    if (page_num === 1) break;
  }
}

async function bulkInsert(json: AnimeThemeJson[]) {
  for (const record of json) {
    try {
      const data = record.animethemes.flatMap((theme) =>
        theme.song.artists.map((artist) => ({
          id: artist.id,
          name: artist.name,
        })),
      );

      await prisma.animeThemeArtist.createMany({
        data: data,
        skipDuplicates: true,
      });

      await prisma.anime.create({
        data: {
          id: record.id,
          anilistId: record.resources.find((r) => r.site === "AniList")
            ?.external_id,
          myanimelistId: record.resources.find((r) => r.site === "MyAnimeList")
            ?.external_id,
          kitsuId: record.resources.find((r) => r.site === "Kitsu")
            ?.external_id,
          anidbId: record.resources.find((r) => r.site === "aniDB")
            ?.external_id,
          title: record.name,
          animeThemes: {
            create: record.animethemes.map((theme) => {
              const song = theme.song;
              return {
                id: theme.id,
                title: song.title,
                slug: theme.slug,
                artists: {
                  connect: song.artists.map((artist) => ({
                    id: artist.id,
                  })),
                },
              };
            }),
          },
        },
      });
    } catch (e) {
      console.error(e);
      pp(record);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
