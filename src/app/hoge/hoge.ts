"use server";

import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export async function hoge() {
  const api = SpotifyApi.withClientCredentials(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    process.env.SPOTIFY_CLIENT_SECRET!
  );

  const items = await api.search("The Beatles", ["artist"]);
  console.table(
    items.artists.items.map((item) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
    }))
  );

  // これはユーザー認証を必要とする
  // const items = await api.currentUser.profile();
  // console.log(items)
}
