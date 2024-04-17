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

type User_Anime_ListQuery = {
  __typename?: "Query";
  MediaListCollection?: {
    __typename?: "MediaListCollection";
    lists?: Array<{
      __typename?: "MediaListGroup";
      entries?: Array<{
        __typename?: "MediaList";
        media?: {
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
        } | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

type extractTypeNameFrom<T, __typename> = T extends
  | {
      [key in string]?: infer U;
    }
  | Array<infer U>
  ? U extends { [key in string]?: infer V }
    ? V extends Array<infer W>
      ? W extends { [key in string]?: infer X }
        ? X extends Array<infer Y>
          ? Y extends { [key in string]?: infer Z }
            ? Z extends { __typename?: __typename }
              ? Z
              : never
            : never
          : never
        : never
      : never
    : never
  : never;

// "Media" に到達するまで、型を再帰的に探索する
// 課題: infer で取得した型に__typename、が混ざってしまうので、型の再帰的な探索ができない
// exclude で除外する型を指定することで、再帰的な探索を行えないだろうか？
type md = extractTypeNameFrom<User_Anime_ListQuery, "Media">;
type mds = Array<md>;

type extractTypeName<T, __typename> = T extends
  | {
      [key in string]?: infer U;
    }
  | Array<infer U>
  ? U extends { __typename?: __typename }
    ? U
    : extractTypeName<U, __typename>
  : never;

type md2 = extractTypeName<User_Anime_ListQuery, "Media">;
type mds2 = Array<md2>;
