"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { Medium } from "@/types";
import { extractMedium } from "@/lib/extractMedium";

const USER_ANIME_LIST = gql(`
  query USER_ANIME_LIST($userName: String!) {
    MediaListCollection(userName: $userName, type: ANIME) {
      lists {
        entries {
          media {
            id
            title {
              native
              romaji
              english
            }
            coverImage {
              extraLarge
              large
            }
          }
        }
      }
    }
  }
`);

//TODO useEffect をhookとして分離する
export default function Home() {
  const [getAnime, { loading, error, data }] = useLazyQuery(USER_ANIME_LIST);
  function findUserAnimeList(value: string) {
    getAnime({ variables: { userName: value } });
  }
  const [medium, setMedium] = useState<Medium>([]);

  // AniList Api との通信が終わったら、mediumを更新する
  useEffect(() => {
    if (!loading && !error && data) {
      setMedium(extractMedium(data));
    }
  }, [loading, error, data]);

  // AnimeTheme API にリクエストを送る
  useEffect(() => {
    if (medium.length === 0) return;

    const ids = medium.map((m) => m!.id);
    const idStr = ids.join(",");
    // AnimeTheme API にリクエストを送る
    const allData = [];
    (async () => {
      for (let page_num = 1; true; page_num++) {
        const url = `https://api.animethemes.moe/anime?filter[has]=resources&filter[site]=AniList&filter[external_id]=${idStr}&include=animethemes.song.artists,resources&page[size]=100&page[number]=${page_num}`;
        const res = await fetch(url);
        const json = await res.json();
        if (json.anime.length === 0) break;

        allData.push(...json.anime);
      }
      console.log(allData);
    })();
  }, [medium]);

  return (
    <>
      <UsernameInput findUserAnimeList={findUserAnimeList} />
      {/* mediumを表の形で表示する */}
      {medium.map((m) => (
        <div key={m?.id}>
          <img src={m?.coverImage?.large} alt={m?.title?.romaji} />
          <p>{m?.title?.romaji}</p>
        </div>
      ))}
    </>
  );
}
