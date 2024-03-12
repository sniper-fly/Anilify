"use client";

import { Button } from "@/components/ui/button";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import Image from "next/image";

export default function SpotifyLoginButton() {
  function handleClick() {
    const sdk = SpotifyApi.withUserAuthorization(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      process.env.NEXT_PUBLIC_REDIRECT_TARGET!,
      ["user-read-private", "playlist-modify-private", "playlist-modify-public"]
    );
    sdk.authenticate();
  }

  return (
    <Button onClick={handleClick}>
      Login with Spotify
      <Image
        src="/Spotify_Icon_RGB_White.png"
        width={30}
        height={30}
        alt="Spotify logo"
      />
    </Button>
  );
}
