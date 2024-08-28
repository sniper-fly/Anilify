import axios from "axios";
import "dotenv/config";
import { MalResponse } from "./data/malResponse";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (let offset = 0; ; offset += 100) {
    console.log(offset);
    const rawRes = await axios.get(
      "https://api.myanimelist.net/v2/anime/ranking",
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
        },
        params: {
          fields:
            "alternative_titles,main_picture,start_date,end_date,created_at,updated_at",
          limit: 100,
          offset: offset,
        },
      },
    );
    const response: MalResponse = rawRes.data;
    for (const anime of response.data) {
      createAnime(anime);
    }
    if (!response.paging.next) return;
    await wait(2000);
  }
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createAnime(anime: MalResponse["data"][number]) {
  await prisma.myAnimeList.upsert({
    where: { id: anime.node.id },
    update: {},
    create: {
      id: anime.node.id,
      title: anime.node.title,
      picture: anime.node.main_picture?.medium,
      startDate: anime.node.start_date,
      endDate: anime.node.end_date,
    },
  });

  const alternativeTitles = anime.node.alternative_titles;
  if (alternativeTitles) {
    alternativeTitles.en &&
      (await upsertAltTitle("en", alternativeTitles.en, anime.node.id));
    alternativeTitles.ja &&
      (await upsertAltTitle("ja", alternativeTitles.ja, anime.node.id));
    if (alternativeTitles.synonyms) {
      for (const title of alternativeTitles.synonyms) {
        await upsertAltTitle("synonyms", title, anime.node.id);
      }
    }
  }
}

async function upsertAltTitle(type: string, title: string, malId: number) {
  try {
    await prisma.alternativeTitle.upsert({
      where: { malId_title: { malId, title } },
      update: {},
      create: {
        type: type,
        title: title,
        mal: { connect: { id: malId } },
      },
    });
  } catch (e) {
    console.log("malId: ", malId, "title: ", title, "type: ", type);
    throw e;
  }
}

(async () => {
  await main();
})();
