"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { Media, SearchResult } from "@/types";
import { extractMedium } from "@/lib/extractMedium";
import { useAnimeTheme } from "./useAnimeTheme";
import AnimeTable from "./AnimeTable";
import useSpotify from "@/lib/useSpotify";
import searchTrackInfo from "./searchTrackInfo";

// テスト用
import { exampleMedium, exampleAnimeInfo } from "@/example/exampleObjects";
import { exampleSearchResult } from "@/example/searchResult";

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
  useSpotify();

  const [getAnime, { loading, error, data }] = useLazyQuery(USER_ANIME_LIST);
  function findUserAnimeList(value: string) {
    getAnime({ variables: { userName: value } });
  }
  const [medium, setMedium] = useState<Media[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResult>({});

  // AniList Api との通信が終わったら、mediumを更新する
  useEffect(() => {
    if (loading || error || !data) return;

    setMedium(extractMedium(data));
  }, [loading, error, data]);

  // AnimeTheme API にリクエストを送る
  const [animeInfo, isAnimeThemeLoading] = useAnimeTheme(medium);

  // getDynamoCache() を使ってDynamoDBからデータを取得し、SearchResult型に変換
  useEffect(() => {
    console.log(animeInfo);
    // const params = convertToBatchGetParams(animeInfo);
    // const data = await dynamoBatchGet(params);
    // console.log(searchResult);

    return;
    (async () => {
      if (Object.keys(animeInfo).length === 0) return;
      setSearchResult(await searchTrackInfo(animeInfo));
    })();
  }, [animeInfo]);

  function handleClick() {
    (async () => {
      const res = await searchTrackInfo(animeInfo);
      console.log(res);
    })();
  }

  // animeInfo に searchResultをマッピングしたい場合は、ここで処理を追加する
  // useEffectは不要 (const mappedResult = x() みたいな感じ)

  return (
    <>
      <button onClick={handleClick}>hoge</button>

      <UsernameInput findUserAnimeList={findUserAnimeList} />

      {/* loading iconを表示する */}
      {loading && <p>Loading...</p>}

      {/* <AnimeRow
        medium={medium}
        animeInfo={animeInfo}
        isAnimeThemeLoading={isAnimeThemeLoading}
      /> */}

      {/* テスト用 */}
      <AnimeTable
        medium={exampleMedium}
        animeInfo={exampleAnimeInfo}
        isAnimeThemeLoading={false}
        searchResult={exampleSearchResult}
      />
    </>
  );
}
