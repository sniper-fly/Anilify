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

type newTable = {
  id: number;
  anilist_id: number;
  myanimelist_id: number;
  anime_title: string;
  songs: [
    {
      // 曲名による検索結果かどうか アニメタイトルで検索された場合はfalse
      searched_by_song: boolean;
      query: string; // animetheme api から取得する titleというより検索クエリ？
      jp_title?: string;
      slug?: string;
      artists?: string[];
      streaming: {
        [provider: string]: [ // provider = spotify, apple music etc.
          {
            uri: string;
            name: string;
            artists: string[];
            open_link: string;
            preview_url: string;
            image: string;
            duration_ms: number;
            available_markets: string[];

            added_count: number; // ユーザーがプレイリストに追加した回数を記録してレコメンドに活かす
            is_official: boolean; // 公式の音楽かどうか
            vote_as_official: number; // ユーザーが公式として投票した回数
          }
        ];
      };
    },
  ];
};
