"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  BatchGetCommand,
  DynamoDBDocumentClient,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";

export default async function createDynamoCache() {
  // credential あればいらないかも
  const client = new DynamoDBClient({ region: "ap-northeast-1"});
  const ddbDocClient = DynamoDBDocumentClient.from(client);

  const params = {
    RequestItems: {
      AniTunesSpotifySearchCache: [
        {
          PutRequest: {
            Item: {
              query: "test",
              name: "hoge",
            },
          },
        },
        {
          PutRequest: {
            Item: {
              query: "2",
              name: "fuga",
            },
          },
        },
      ],
    },
  };

  try {
    const data = await ddbDocClient.send(new BatchWriteCommand(params));
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
