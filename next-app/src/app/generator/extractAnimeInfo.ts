import { AnimeInfo } from "@/types";

type AnimeThemeJson = {
  id: number;
  name: string;
  media_format: string;
  season: string;
  slug: string;
  synopsis: string;
  year: number;
  resources: Resource[];
  animethemes: Theme[];
};

type Resource = {
  id: number;
  external_id: number;
  link: string;
  site: string;
  animeresource: {
    as: null;
  };
};

type Theme = {
  id: number;
  group: null;
  sequence: number | null;
  slug: string;
  type: string;
  animethemeentries: AnimeThemeEntry[];
  song: Song;
};

type Song = {
  id: number;
  title: string;
  artists: Artist[];
};

type Artist = {
  id: number;
  name: string;
  slug: string;
  artistsong: {
    as: null;
  };
};

type AnimeThemeEntry = {
  videos: Video[];
};

type Video = {
  tags: string;
  link: string;
};

export function extractAnimeInfo(json: AnimeThemeJson[]): AnimeInfo {
  const animeInfo: AnimeInfo = {};
  for (const data of json) {
    animeInfo[data.resources[0].external_id] = {
      id: data.id,
      site: data.resources[0].site,
      name: data.name,
      slug: data.slug,
      animethemes: data.animethemes.map((theme) => {
        const song = theme.song;
        const artists = song.artists.map((artist) => artist.name);
        return {
          title: song.title,
          type: theme.type,
          slug: theme.slug,
          artists: artists,
          link: animeThemeUrl({
            animeSlug: data.slug,
            songSlug: theme.slug,
            tag: theme.animethemeentries[0].videos[0].tags,
          }),
          videoLink: theme.animethemeentries[0].videos[0].link,
        };
      }),
    };
  }
  return animeInfo;
}

function animeThemeUrl({
  animeSlug,
  songSlug,
  tag,
}: {
  animeSlug: string;
  songSlug: string;
  tag: string;
}) {
  const postfix = tag.length > 0 ? `-${tag}` : "";
  return `https://animethemes.moe/anime/${animeSlug}/${songSlug}${postfix}`;
}
