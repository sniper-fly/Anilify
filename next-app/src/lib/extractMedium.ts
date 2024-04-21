import { User_Anime_ListQuery } from "@/graphql/graphql";
import { Media } from "@/types";

export function extractMedium(data: User_Anime_ListQuery): Media[] {
  const medium: Media[] = [];

  const lists = data.MediaListCollection?.lists;
  if (!lists) return medium;
  // const medium = lists
  //   .map((list) => list?.entries?.map((entry) => entry?.media) ?? [])
  //   .flat(1); // 空白エントリーはflatで削除される
  for (const list of lists) {
    if (!list?.entries) continue;
    for (const entry of list.entries) {
      if (!entry) continue;
      const media = entry.media;
      if (!media) continue;
      medium.push(media);
    }
  }
  return medium;
}
