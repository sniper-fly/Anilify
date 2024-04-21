import { useEffect, useState } from "react";
import axios from "axios";
import { AnimeInfo, Media } from "@/types";
import { extractAnimeInfo } from "./extractAnimeInfo";

export function useAnimeTheme(medium: Media): [AnimeInfo, boolean] {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (medium.length === 0) return;

    (async () => {
      setLoading(true);
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
      setLoading(false);
    })();
  }, [medium]);

  return [ animeInfo, loading ];
}
