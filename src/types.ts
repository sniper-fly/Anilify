export type Anime = {
  id: number; // anime theme id
  external_id: number; // 画面に要素を並べる時、keyとして使う
  site: string; // AniList or MyAnimeList
  name: string; // anime title
  animethemes: ThemeSong[];
};

export type ThemeSong = {
  // id: number;
  title: string; // song title
  type: string; // OP or ED
  slug: string; // song slug (ex. OP1, ED2)
  artists: string[];
  spotify?: TrackInfo[];
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

export type DynamoSearchCache = {
  query: string;
  tracks: TrackInfo[];
};

export type SearchResult = {
  [key: string]: TrackInfo[];
};
