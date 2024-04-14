"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, BatchGetCommandInput, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { AnimeInfo, SearchResult } from "@/types";
import { chunkArray } from "@/lib/utils";

export default async function searchTrackInfo(animeInfo: AnimeInfo) {
  // member は100個まで
  const titles = extractDistinctTitles(animeInfo);
  const chunkedTitles = chunkArray(titles, 100);
  const searchCaches = [];
  for (const chunk of chunkedTitles) {
    const params = convertToBatchGetParams(chunk);
    const items = await fetchTrack(params);
    if (!items || items.length === 0) continue;

    searchCaches.push(...items);
  }
  if (searchCaches.length === 0) return {};

  return convertToSearchResult(searchCaches);
}

async function fetchTrack(params: BatchGetCommandInput) {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);
  const data = await ddbDocClient.send(new BatchGetCommand(params));
  return data.Responses?.AniTunesSpotifySearchCache;
}

function convertToSearchResult(caches: any[]) {
  const searchResult: SearchResult = {};
  caches.forEach((item) => {
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
