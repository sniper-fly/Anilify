"use server";

import { AnimeInfo, SearchResult } from "@/types";
import { chunkArray } from "@/lib/utils";
import getTrack from "./getTrack";

export default async function searchTrackInfo(animeInfo: AnimeInfo) {
  const titles = extractDistinctTitles(animeInfo);
  // 最大で100件のクエリまでしか検索できないため、100件ごとに分割
  const chunkedTitles = chunkArray(titles, 100);
  const searchCaches = [];
  for (const chunk of chunkedTitles) {
    const params = convertToBatchGetParams(chunk);
    console.log("first fetch")
    const items = await getTrack(params);
    console.log("first fetch complete.")
    console.log("second fetch")
    const hoge = await getTrack(params);
    console.log("second fetch complete.")
    if (!items || items.length === 0) continue;

    searchCaches.push(...items);
  }
  if (searchCaches.length === 0) return {};

  return convertToSearchResult(searchCaches);
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
