'use server'

import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";

export async function searchSong(token: AccessToken) {
  const sdk = SpotifyApi.withAccessToken(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    token
  );
  const items = await sdk.search("The Beatles", ["artist"]);

  console.table(
    items.artists.items.map((item) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
    }))
  );
}
