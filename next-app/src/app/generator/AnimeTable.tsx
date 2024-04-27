import { AnimeInfo, Media, SearchResult, TrackInfo } from "@/types";
import Image from "next/image";

type Props = {
  medium: Media[];
  animeInfo: AnimeInfo;
  isAnimeThemeLoading: boolean;
  searchResult: SearchResult;
};

const ImageW = "w-40" + " "; // 以降でクラスを問題なく追加できるようスペース追加
const AnimeTitleW = "w-48" + " ";
const TypeW = "w-16" + " ";
const SongW = "w-48" + " ";
const StreamW = "w-48" + " ";
export default function AnimeTable({
  medium,
  animeInfo,
  isAnimeThemeLoading,
  searchResult,
}: Props) {
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
          <AnimeRow
            key={media.id}
            media={media}
            isAnimeThemeLoading={isAnimeThemeLoading}
            animeInfo={animeInfo}
            searchResult={searchResult}
          />
        );
      })}
    </>
  );
}

type AnimeRowProps = {
  media: Media;
  isAnimeThemeLoading: boolean;
  animeInfo: AnimeInfo;
  searchResult: SearchResult;
};

function truncate(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

function joinAppropriate(artists: string[]) {
  return truncate(artists.join(", "), 40);
}

function AnimeRow({
  media,
  isAnimeThemeLoading,
  animeInfo,
  searchResult,
}: AnimeRowProps) {
  return (
    <div key={media.id} className="flex flex-row gap-3 py-3 pl-3">
      <div className={ImageW}>
        <Image
          src={media?.coverImage?.large || ""} // add fallback image
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
      <div>
        {animeInfo[media.id]?.animethemes.map((theme) => {
          return (
            <div
              key={theme.title + theme.slug}
              className="mb-3 flex flex-row gap-3"
            >
              <div className={TypeW}>{theme.slug}</div>
              <div className={SongW}>
                <a
                  target="_blank" rel="noopener noreferrer" href={theme.link}
                  className="hover:text-blue-500 transition-colors"
                >
                  {theme.title}
                </a>
                <p className="text-gray-500">
                  {joinAppropriate(theme.artists)}
                </p>
              </div>
              <div className={StreamW + "flex w-80 flex-col"}>
                {searchResult[theme.title]
                  ?.slice(0, 1)
                  .map((track) => (
                    <StreamingEntry key={track.uri} track={track} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type StreamingEntryProps = {
  track: TrackInfo;
};
function StreamingEntry({ track }: StreamingEntryProps) {
  return (
    <div className="flex flex-row items-center gap-2 py-2" key={track.uri}>
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
  );
}
