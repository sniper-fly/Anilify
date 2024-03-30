"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { Medium } from "@/types";
import { extractMedium } from "@/lib/extractMedium";
import { useAnimeTheme } from "./useAnimeTheme";
import AnimeRow from "./animeRow";

// テスト用
import { exampleMedium, exampleAnimeInfo } from "./exampleObjects";

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
    if (loading || error || !data) return;

    setMedium(extractMedium(data));
  }, [loading, error, data]);

  // AnimeTheme API にリクエストを送る
  const [animeInfo, isAnimeThemeLoading] = useAnimeTheme(medium);

  return (
    <>
      <UsernameInput findUserAnimeList={findUserAnimeList} />

      {/* loading iconを表示する */}
      {loading && <p>Loading...</p>}

      {/* <AnimeRow
        medium={medium}
        animeInfo={animeInfo}
        isAnimeThemeLoading={isAnimeThemeLoading}
      /> */}

      {/* テスト用 */}
      <AnimeRow
        medium={exampleMedium}
        animeInfo={exampleAnimeInfo}
        isAnimeThemeLoading={false}
      />

    </>
  );
}
