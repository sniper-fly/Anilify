import { Anime } from "@/types";

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

export function extractAnime(json: AnimeThemeJson[]): Anime[] {
  return json.map((data) => ({
    id: data.id,
    external_id: data.resources[0].external_id,
    site: data.resources[0].site,
    name: data.name,
    animethemes: data.animethemes.map((theme) => {
      const song = theme.song;
      const artists = song.artists.map((artist) => artist.name);
      return {
        title: song.title,
        type: theme.type,
        slug: theme.slug,
        artists: artists,
      };
    }),
  }));
}
