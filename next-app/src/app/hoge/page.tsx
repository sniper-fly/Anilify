import { Click } from "./click";
import { batchGet, batchSelect, createPlaylist, hoge } from "./hoge";
import createDynamoCache from "./createDynamoCache";
import searchSongs from "./searchSongs";

export default async function Page() {
  return (
    <>
      <Click action={batchGet}>batchGet</Click>
      <Click action={hoge}>hoge</Click>
      <Click action={batchSelect}>batchselect</Click>
      <Click action={createPlaylist}>create test playlist</Click>
      <Click action={createDynamoCache}>create dynamo cache</Click>
      <Click action={searchSongs}>search songs</Click>
    </>
  );
}
