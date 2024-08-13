import { PrismaClient } from "@prisma/client";
import axios from "axios";
import * as fs from "fs";

function pp(val: any) {
  console.dir(val, { depth: null });
}

const prisma = new PrismaClient();

const animeJson = {
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
  ],
};

type AnimeJson = typeof animeJson;

async function main() {
  const errorLog: any[] = [];

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
          size: 100,
          number: page_num,
        },
      },
    });
    const rawAnimeJSON = res.data.anime;
    if (rawAnimeJSON.length === 0) break;

    await bulkInsert(rawAnimeJSON, errorLog);
  }

  // errorLog をファイルに出力する
  fs.writeFileSync(`logs/errorLog.json`, JSON.stringify(errorLog, null, 2));
}

async function bulkInsert(json: AnimeJson[], errorLog: any[]) {
  for (const record of json) {
    try {
      const artistData = record.animethemes.reduce(
        (acc, theme) => {
          const song = theme.song;
          if (!song || !song.artists) return acc;
          for (const artist of song.artists) {
            acc.push({
              id: artist.id,
              name: artist.name,
            });
          }
          return acc;
        },
        [] as Array<{ id: number; name: string }>,
      );

      await prisma.animeThemeArtist.createMany({
        data: artistData,
        skipDuplicates: true,
      });

      const animeThemesCreateData = record.animethemes.reduce(
        (accumulator, theme) => {
          const song = theme.song;
          // songやsong.titleがnullでない場合にのみ処理を続行
          if (!song || !song.title) return accumulator;
          accumulator.push({
            id: theme.id,
            title: song.title,
            slug: theme.slug,
            artists: {
              connect: song.artists?.map((artist) => ({
                id: artist.id,
              })),
            },
          });
          return accumulator;
        },
        [] as Array<{
          id: number;
          title: string;
          slug: string;
          artists: {
            connect: Array<{ id: number }>;
          };
        }>,
      );

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
            create: animeThemesCreateData,
          },
        },
      });
    } catch (e) {
      const err = e as Error;
      errorLog.push({
        record,
        error: {
          error: err,
          message: err.message,
          stack: err.stack,
        },
      });
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
