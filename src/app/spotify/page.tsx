"use client";

import { Button } from "@/components/ui/button";
import { searchSong } from "./searchSong";
import {
  SpotifyApi,
  AuthorizationCodeWithPKCEStrategy,
} from "@spotify/web-api-ts-sdk";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const sdk = SpotifyApi.withUserAuthorization(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    process.env.NEXT_PUBLIC_REDIRECT_TARGET!,
    ["user-read-private", "user-read-email"]
  );
  const searchParams = useSearchParams();

  // url parameter に codeが含まれている場合、authenticateを実行する
  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;
    sdk.authenticate();
  });

  function handleClick() {
    (async () => {
      const accessToken = await sdk.getAccessToken();
      if (!accessToken) return;
      // searchSong(accessToken);
      const profile = await sdk.currentUser.profile();
      console.log(profile);
    })();
  }

  function redirectToHoge() {
    const sdk = SpotifyApi.withUserAuthorization(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      "http://localhost:3000/hoge",
      ["user-read-private", "playlist-modify-private", "playlist-modify-public"]
    );
    sdk.authenticate();
  }

  return (
    <>
      <Button onClick={() => sdk.authenticate()}>authorize</Button>
      <Button onClick={handleClick}>log</Button>
      <Button onClick={redirectToHoge}>redirect to /hoge</Button>
    </>
  );
}
