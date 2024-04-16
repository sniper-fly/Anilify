import { AnimeInfo, Medium, SearchResult } from "@/types";
import Image from "next/image";

type Props = {
  medium: Medium;
  animeInfo: AnimeInfo;
  isAnimeThemeLoading: boolean;
  searchResult: SearchResult;
};

export default function AnimeRow({
  medium,
  animeInfo,
  isAnimeThemeLoading,
}: Props) {
  return (
    <>
      {medium.map((m) => {
        if (!m) return null;
        return (
          <div key={m.id} className="flex flex-row my-5">
            <div className="ml-3">
              <Image
                src={m?.coverImage?.large} // add fallback image
                alt={m?.title?.romaji || "unknown"}
                width={200}
                height={340}
              />
            </div>
            <div className="ml-3">
              <p>{m?.title?.native}</p>
              <p>{m?.title?.english}</p>
            </div>

            {/* animetheme apiと通信中はloading iconを表示する */}
            {isAnimeThemeLoading && !animeInfo[m.id] && <p>Loading...</p>}

            {/* m.idを使って、animeInfoから情報を取得する */}
            <div>
              {animeInfo[m.id]?.animethemes.map((theme) => {
                return (
                  <div key={theme.title + theme.slug} className="flex flex-row ml-3">
                    <p>{theme.slug}</p>
                    <p>{theme.title}</p>
                    <p>{theme.artists.join(", ")}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
