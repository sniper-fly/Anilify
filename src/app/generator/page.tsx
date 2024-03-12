"use client";

import { z } from "zod";
import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import UsernameInput from "./usernameInput";

// 重複している
const formSchema = z.object({
  userName: z.string().min(1, { message: "Please enter a username" }),
});

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    getAnime({ variables: { userName: values.userName } });
  }

  // AnimeTheme Api との通信
  useEffect(() => {
    if (!loading && !error && data) {
      // data.MediaListCollection?.lists[0]?.entries[0]?.media
      // 上記の構造の個々の配列を一つの配列にまとめる
      const medium = data.MediaListCollection?.lists
        ?.map((list) => list?.entries?.map((entry) => entry?.media) ?? [])
        .flat(1); // 空白エントリーはflatで削除される
      console.log(medium);

      if (!medium) return;

      // 中身がundefined, nullでないものだけを抽出し、,で区切る
      const ids = medium.filter((m) => m).map((m) => m!.id);
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
    }
  }, [loading, error, data]);

  return (
    <UsernameInput onSubmit={onSubmit} />
  );
}
