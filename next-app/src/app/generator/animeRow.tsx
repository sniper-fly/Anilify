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
  searchResult,
}: Props) {
  const ImageW = "w-40";
  const AnimeTitleW = "w-40";
  const TypeW = "w-16";
  const SongW = "w-36";
  const ArtistW = "w-36";
  const StreamW = "w-48";

  return (
    <>
      <div className="sticky top-0 flex flex-row gap-3 bg-slate-600 pl-3 text-white">
        <div className={ImageW}>Image</div>
        <div className={AnimeTitleW}>Anime title</div>
        <div className={TypeW}>Type</div>
        <div className={SongW}>Song</div>
        <div className={ArtistW}>Artist</div>
        <div className={StreamW}>Songs on Spotify</div>
      </div>
      {medium.map((m) => {
        if (!m) return null;
        return (
          <div key={m.id} className="my-5 flex flex-row gap-3 pl-3">
            <div className={ImageW}>
              <Image
                src={m?.coverImage?.large} // add fallback image
                alt={m?.title?.romaji || "unknown"}
                width={200}
                height={340}
              />
            </div>
            <div className={AnimeTitleW}>
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
                    <p className={TypeW}>{theme.slug}</p>
                    <p className={SongW}>{theme.title}</p>
                    <p className={ArtistW}>{theme.artists.join(", ")}</p>
                    <div className="flex w-80 flex-col">
                      {searchResult[theme.title]?.slice(0, 3).map((t) => (
                        <div>
                          {t.name}
                          <Image
                            src={t.image}
                            alt={t.name}
                            width={40}
                            height={40}
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
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
