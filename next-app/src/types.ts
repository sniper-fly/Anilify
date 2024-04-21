import { User_Anime_ListQuery } from "./graphql/graphql";

export type AnimeInfo = {
  [external_id: string]: {
    // AniList/MAL id
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

type extractTypeName<T, __typename> = T extends
  | {
      [key in string]?: infer U;
    }
  | Array<infer U>
  ? U extends { __typename?: __typename }
    ? U
    : extractTypeName<U, __typename>
  : never;

export type Media = extractTypeName<User_Anime_ListQuery, "Media">;
