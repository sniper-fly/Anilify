import { AnimeInfo, Media, SearchResult } from "@/types";
import Image from "next/image";

type Props = {
  medium: Media[];
  animeInfo: AnimeInfo;
  isAnimeThemeLoading: boolean;
  searchResult: SearchResult;
};

function truncate(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

function joinAppropriate(artists: string[]) {
  return truncate(artists.join(", "), 40);
}

export default function AnimeTable({
  medium,
  animeInfo,
  isAnimeThemeLoading,
  searchResult,
}: Props) {
  const ImageW = "w-40" + " "; // 以降でクラスを問題なく追加できるようスペース追加
  const AnimeTitleW = "w-48" + " ";
  const TypeW = "w-16" + " ";
  const SongW = "w-48" + " ";
  const StreamW = "w-48" + " ";

  return (
    <>
      <div className="sticky top-0 flex flex-row gap-3 bg-slate-600 pl-3 text-white">
        <div className={ImageW}>Image</div>
        <div className={AnimeTitleW}>Anime title</div>
        <div className={TypeW}>Type</div>
        <div className={SongW}>Song</div>
        <div className={StreamW}>Songs on Spotify</div>
      </div>
      {medium.map((media) => {
        if (!media) return null;
        return (
          <div key={media.id} className="py-3 flex flex-row gap-3 pl-3">
            <div className={ImageW}>
              <Image
                src={media?.coverImage?.large} // add fallback image
                alt={media?.title?.romaji || "unknown"}
                width={200}
                height={340}
                className="rounded"
              />
            </div>
            <div className={AnimeTitleW}>
              <p>{media?.title?.native}</p>
              <p>{media?.title?.english}</p>
            </div>
            {/* animetheme apiと通信中はloading iconを表示する */}
            {isAnimeThemeLoading && !animeInfo[media.id] && <p>Loading...</p>}
            {/* m.idを使って、animeInfoから情報を取得する */}
            <div>
              {animeInfo[media.id]?.animethemes.map((theme) => {
                return (
                  <div
                    key={theme.title + theme.slug}
                    className="flex flex-row gap-3"
                  >
                    <div className={TypeW}>{theme.slug}</div>
                    <div className={SongW}>
                      <p>{theme.title}</p>
                      <p className="text-gray-500">
                        {joinAppropriate(theme.artists)}
                      </p>
                    </div>
                    <div className="flex w-80 flex-col">
                      {searchResult[theme.title]?.slice(0, 3).map((track) => (
                        <div className="flex flex-row p-2 items-center gap-2" key={track.uri}>
                          <div>
                            <Image
                              src={track.image}
                              alt={track.name}
                              width={43}
                              height={43}
                              className="rounded"
                            />
                          </div>
                          <div>
                            <p>{track.name}</p>
                            <p className="text-gray-500">
                              {joinAppropriate(track.artists.map((v) => v.name))}
                            </p>
                          </div>
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
