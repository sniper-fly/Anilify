export type AnimeInfo = {
  [external_id: string]: { // AniList/MAL id
    id: number; // anime theme id
    site: string; // AniList or MyAnimeList
    name: string; // anime title
    animethemes: ThemeSong[];
  };
};

export type ThemeSong = {
  // id: number;
  title: string; // song title
  type: string; // OP or ED
  slug: string; // song slug (ex. OP1, ED2)
  artists: string[];
  // spotify?: TrackInfo[];
};

export type TrackInfo = {
  uri: string;
  name: string;
  artists: {
    name: string;
    openLink: string;
  }[];
  openLink: string;
  preview_url: string | null;
  image: string;
  duration_ms: number;
  available_markets: string[]; // ユーザーのprofile.countryと一致しない場合は表示しない
};

export type SearchResult = {
  [key: string]: TrackInfo[];
};

export type Medium = Array<{
  __typename?: "Media";
  id: number;
  title?: {
    __typename?: "MediaTitle";
    native?: string | null;
    romaji?: string | null;
    english?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    extraLarge?: string | null;
    large?: string | null;
  } | null;
} | null>;
