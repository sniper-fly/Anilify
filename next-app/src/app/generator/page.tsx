"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { AnimeInfo, Medium } from "@/types";
import { extractMedium } from "@/lib/extractMedium";
import Image from "next/image";

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
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo[]>([]);

  // AniList Api との通信が終わったら、mediumを更新する
  useEffect(() => {
    if (loading || error || !data) return;

    const medium = extractMedium(data);
    setMedium(medium);

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

        allData.push(...json.anime); // ここでsetStateする
      }
      console.log(allData);
    })();
  }, [loading, error, data]);

  return (
    <>
      <UsernameInput findUserAnimeList={findUserAnimeList} />

      {/* loading iconを表示する */}
      {loading && <p>Loading...</p>}

      {/* mediumを表の形で表示する */}
      {medium.map((m) => (
        <div key={m?.id} className="mb-4">
          <Image
            src={m?.coverImage?.large} // add fallback image
            alt={m?.title?.romaji || 'unknown' }
            width={200}
            height={340}
          />
          <p>{m?.title?.native}</p>
          <p>{m?.title?.english}</p>
        </div>
      ))}
    </>
  );
}
