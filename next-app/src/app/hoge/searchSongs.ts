"use server";

import { exampleAnimeInfo } from "@/example/exampleObjects";
import { SearchResult } from "@/types";
import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";

import { writeFile } from "fs/promises";

export default async function searchSongs(token: AccessToken) {
  // まず exampleAnimeInfo をオブジェクトの配列に変換
  const animeInfoArray = Object.values(exampleAnimeInfo);

  // animethemes プロパティの配列を結合し、一つの配列にする
  const themes =  animeInfoArray.map((info) => info.animethemes).flat();

  const api = SpotifyApi.withAccessToken(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    token
  );
  // とりあえず 数件 のタイトルをSpotifyで検索し結果を SearchResult型に変換
  const searchResult: SearchResult = {};
  for (const theme of themes.slice(0, 10)) {
    console.log("searching: ", theme.title)
    const items = await api.search(theme.title, ["track"]);

    searchResult[theme.title] = items.tracks.items.map((item) => ({
      uri: item.uri,
      name: item.name,
      artists: item.artists.map((artist) => ({
        name: artist.name,
        openLink: artist.external_urls.spotify,
      })),
      openLink: item.external_urls.spotify,
      preview_url: item.preview_url,
      image: item.album.images.reduce((prev, current) => {
        return prev.height < current.height ? prev : current;
      }).url,
      duration_ms: item.duration_ms,
      available_markets: item.available_markets,
    }));

    theme.spotify = searchResult[theme.title];
  }
  console.log("====================================")

  const jsonData = JSON.stringify(searchResult);
  await writeFile("src/example/searchResult.json", jsonData, "utf-8")
  console.log("json output done!")
}
