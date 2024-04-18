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
      <div className="sticky top-0 flex flex-row gap-3 bg-slate-600 pl-3 text-center text-white">
        <div className="w-40">Image</div>
        <div className="w-40">Anime title</div>
        <div className="w-16">Type</div>
        <div className="w-36">Song</div>
        <div className="w-36">Artist</div>
      </div>
      {medium.map((m) => {
        if (!m) return null;
        return (
          <div key={m.id} className="my-5 flex flex-row gap-3 pl-3">
            <div className="w-40">
              <Image
                src={m?.coverImage?.large} // add fallback image
                alt={m?.title?.romaji || "unknown"}
                width={200}
                height={340}
              />
            </div>
            <div className="w-40">
              <p>{m?.title?.native}</p>
              <p>{m?.title?.english}</p>
            </div>
            {/* animetheme apiと通信中はloading iconを表示する */}
            {isAnimeThemeLoading && !animeInfo[m.id] && <p>Loading...</p>}
            {/* m.idを使って、animeInfoから情報を取得する */}
            <div>
              {animeInfo[m.id]?.animethemes.map((theme) => {
                return (
                  <div
                    key={theme.title + theme.slug}
                    className="flex flex-row gap-3"
                  >
                    <p className="w-16">{theme.slug}</p>
                    <p className="w-36">{theme.title}</p>
                    <p className="w-36">{theme.artists.join(", ")}</p>
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
