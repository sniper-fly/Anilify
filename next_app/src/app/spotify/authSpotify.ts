'use server'

import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default async function authSpotify() {
  const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  const REDIRECT_TARGET = process.env.NEXT_PUBLIC_REDIRECT_TARGET!;

  const sdk = SpotifyApi.withUserAuthorization(
    SPOTIFY_CLIENT_ID,
    REDIRECT_TARGET,
    ["user-read-private", "user-read-email"]
  );
  console.log(sdk)
  // return sdk;
  // SpotifyApi
}
