"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useSearchParams } from "next/navigation";

type AsyncFunction = (...args: any[]) => Promise<any>;

type Props = {
  action: AsyncFunction;
  children: React.ReactNode;
};

export function Click({ action, children }: Props) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const sdk = SpotifyApi.withUserAuthorization(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      "http://localhost:3000/hoge",
      ["user-read-private", "playlist-modify-private", "playlist-modify-public"]
    );

    const code = searchParams.get("code");
    if (!code) return;
    sdk.authenticate();
  });

  function handleClick() {
    SpotifyApi.performUserAuthorization(
      process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      process.env.NEXT_PUBLIC_REDIRECT_TARGET!,
      ["user-read-private", "user-read-email"],
      async (accessToken) => {
        action(accessToken);
      }
    );
  }

  return <Button onClick={handleClick}>{children}</Button>;
}
