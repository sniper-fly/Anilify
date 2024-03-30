"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { Medium } from "@/types";
import { extractMedium } from "@/lib/extractMedium";
import Image from "next/image";
import { useAnimeTheme } from "./useAnimeTheme";

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

      {/* mediumを表の形で表示する */}
      {medium.map((m) => {
        if (!m) return null;
        return (
          <div key={m.id} className="mb-4">
            <Image
              src={m?.coverImage?.large} // add fallback image
              alt={m?.title?.romaji || "unknown"}
              width={200}
              height={340}
            />
            <p>{m?.title?.native}</p>
            <p>{m?.title?.english}</p>

            {/* animetheme apiと通信中はloading iconを表示する */}
            {isAnimeThemeLoading && !animeInfo[m.id] && <p>Loading...</p>}

            {/* m.idを使って、animeInfoから情報を取得する */}
            {animeInfo[m.id]?.animethemes.map((theme) => {
              return (
                <div key={theme.slug}>
                  <p>{theme.title}</p>
                  <p>{theme.type}</p>
                  <p>{theme.slug}</p>
                  <p>{theme.artists.join(", ")}</p>
                  {theme.spotify?.map((track) => {
                    return (
                      <div key={track.uri}>
                        <p>{track.name}</p>
                        <p>{track.artists.map((a) => a.name).join(", ")}</p>
                        <img src={track.image} alt={track.name} />
                        <audio controls>
                          <source src={track.preview_url} type="audio/mpeg" />
                        </audio>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
