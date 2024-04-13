"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { AnimeInfo, SearchResult } from "@/types";
import { chunkArray } from "@/lib/utils";

export default async function searchTrackInfo(animeInfo: AnimeInfo) {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);

  // member は100個まで
  const titles = extractDistinctTitles(animeInfo);
  const chunkedTitles = chunkArray(titles, 100);
  const searchCaches = [];
  for (const chunk of chunkedTitles) {
    const params = convertToBatchGetParams(chunk);
    const data = await ddbDocClient.send(new BatchGetCommand(params));
    const items = data.Responses?.AniTunesSpotifySearchCache;
    if (!items || items.length === 0) continue;

    searchCaches.push(...items);
  }
  if (searchCaches.length === 0) return {};

  // ここはエラーが起きないことが自明でないので、分割したほうが良いかも
  const searchResult: SearchResult = {};
  searchCaches.forEach((item) => {
    searchResult[item["query"]] = item.tracks;
  });
  return searchResult;
}

function convertToBatchGetParams(titles: string[]) {
  return {
    RequestItems: {
      AniTunesSpotifySearchCache: {
        Keys: titles.map((title) => ({
          query: title,
        })),
      },
    },
  };
}

function extractDistinctTitles(animeInfo: AnimeInfo) {
  // AnimeInfo型のオブジェクトからThemeSong, titleを取り出し、重複を削除
  const infoArr = Object.values(animeInfo);
  const themes = infoArr.flatMap((anime) => anime.animethemes);
  const titles = themes.map((theme) => theme.title);
  return Array.from(new Set(titles));
}
