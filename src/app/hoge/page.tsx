'use client'

import { Button } from "@/components/ui/button";
import { hoge } from "./hoge";
// import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default function Page() {
  function handleClick() {
    hoge();
  }

  return (
    <>
      <Button onClick={handleClick}>log</Button>
    </>
  );
}
