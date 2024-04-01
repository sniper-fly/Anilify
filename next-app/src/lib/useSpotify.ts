import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useSpotify() {
  const sdk = SpotifyApi.withUserAuthorization(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    process.env.NEXT_PUBLIC_REDIRECT_TARGET!,
    ["user-read-private", "playlist-modify-private", "playlist-modify-public"]
  );
  // url parameter に codeが含まれている場合、authenticateを実行する
  const searchParams = useSearchParams();
  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;
    sdk.authenticate();
  });
}
