'use server'

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchGetCommand, BatchGetCommandInput, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { cache } from "react";

const getTrack = cache(async(params: BatchGetCommandInput) => {
  console.log("===========fetched!!==================")
  return await fetchTrack(params);
})

export async function fetchTrack(params: BatchGetCommandInput) {
  const client = new DynamoDBClient({ region: "ap-northeast-1" });
  const ddbDocClient = DynamoDBDocumentClient.from(client);
  const data = await ddbDocClient.send(new BatchGetCommand(params));
  return data.Responses?.AniTunesSpotifySearchCache;
}

export default getTrack;
