import { AnimeInfo, Medium } from "@/types";
import Image from "next/image";

type Props = {
  medium: Medium;
  animeInfo: AnimeInfo;
  isAnimeThemeLoading: boolean;
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
