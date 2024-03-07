"use client";

import { Button } from "@/components/ui/button";
import { hoge } from "./hoge";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default function Click() {
  function handleClick() {
    SpotifyApi.performUserAuthorization(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      process.env.NEXT_PUBLIC_REDIRECT_TARGET!,
      ["user-read-private", "user-read-email"],
      async (accessToken) => { hoge(accessToken) }
    );
  }

  return <Button onClick={handleClick}>log</Button>;
}
