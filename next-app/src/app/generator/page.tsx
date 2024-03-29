"use client";

import { gql } from "@/graphql/gql";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import UsernameInput from "./usernameInput";
import { AnimeInfo, Medium } from "@/types";
import { extractMedium } from "@/lib/extractMedium";
import Image from "next/image";
import axios from "axios";
import { extractAnimeInfo } from "./extractAnimeInfo";

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
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo>({});
  const [isAnimeThemeLoading, setIsAnimeThemeLoading] = useState(false);

  // AniList Api との通信が終わったら、mediumを更新する
  useEffect(() => {
    if (loading || error || !data) return;

    const medium = extractMedium(data);
    setMedium(medium);

    // AnimeTheme API にリクエストを送る
    (async () => {
      setIsAnimeThemeLoading(true);
      for (let page_num = 1; true; page_num++) {
        const baseUrl = "https://api.animethemes.moe/anime";
        const res = await axios.get(baseUrl, {
          params: {
            filter: {
              has: "resources",
              site: "AniList",
              external_id: medium.map((m) => m?.id).join(","), // idカンマ区切り
            },
            include: "animethemes.song.artists,resources",
            page: {
              size: 100,
              number: page_num,
            },
          },
        });
        const rawAnimeJSON = res.data.anime;
        if (rawAnimeJSON.length === 0) break;

        setAnimeInfo((prev) => ({
          ...prev,
          ...extractAnimeInfo(rawAnimeJSON),
        }));
      }
      setIsAnimeThemeLoading(false);
    })();
  }, [loading, error, data]);

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
