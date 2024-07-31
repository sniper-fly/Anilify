"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  BatchGetCommand,
  DynamoDBDocumentClient,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";
import { exampleSearchResult } from "@/example/searchResult";

export async function createDynamoCache() {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);

  // ThemeSong[]型のexampleThemesWithSpotify を DynamoSearchCache[]型に変換
  // その後、DynamoDBに書き込むために BatchWriteCommand のパラメータに変換
  const params = {
    RequestItems: {
      AniTunesSpotifySearchCache: Object.entries(exampleSearchResult).map(
        ([query, themes]) => {
          return {
            PutRequest: {
              Item: {
                query,
                tracks: themes,
              },
            },
          };
        }
      ),
    },
  };

  // console.log(params)
  // console.log(params.RequestItems.AniTunesSpotifySearchCache[0])
  // console.log(params.RequestItems.AniTunesSpotifySearchCache.length)
  // console.log(params.RequestItems.AniTunesSpotifySearchCache[0].PutRequest.Item.tracks)

  try {
    const data = await ddbDocClient.send(new BatchWriteCommand(params));
    console.log(data);
    console.log("====================================");
    console.log("====================================");
    console.log("DynamoDBにデータを書き込みました");
    console.log("====================================");
    console.log("====================================");
  } catch (err) {
    console.error(err);
  }
}

export async function getDynamoCache() {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);

  // exampleSearchResult の name を元にDynamoDBからデータを取得
  const params = {
    RequestItems: {
      AniTunesSpotifySearchCache: {
        Keys: Object.keys(exampleSearchResult).map((theme) => {
          return {
            query: theme,
          };
        })
      },
    },
  };

  const data = await ddbDocClient.send(new BatchGetCommand(params));
  return data.Responses?.AniTunesSpotifySearchCache;
}
