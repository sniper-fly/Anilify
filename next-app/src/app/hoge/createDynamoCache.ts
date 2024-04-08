"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  // BatchGetCommand,
  DynamoDBDocumentClient,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";
// import { exampleAnimeInfo } from "@/example/exampleObjects";
// import { DynamoSearchCache, TrackInfo } from "@/types";
import { exampleThemesWithSpotify } from "@/example/themes";

export default async function createDynamoCache() {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);

  // ThemeSong[]型のexampleThemesWithSpotify を DynamoSearchCache[]型に変換
  // その後、DynamoDBに書き込むために BatchWriteCommand のパラメータに変換
  const params = {
    RequestItems: {
      AniTunesSpotifySearchCache: exampleThemesWithSpotify.map((theme) => {
        return {
          PutRequest: {
            Item: {
              query: theme.title,
              tracks: theme.spotify,
            },
          },
        };
      }),
    },
  };

  console.log(params)
  console.log(params.RequestItems.AniTunesSpotifySearchCache[0].PutRequest.Item)

  // try {
  //   const data = await ddbDocClient.send(new BatchWriteCommand(params));
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // }
}
