import { Click } from "./click";
import { batchGet, hoge } from "./hoge";

export default async function Page() {
  return (
    <>
      <Click action={batchGet}>batchGet</Click>
      <Click action={hoge}>hoge</Click>
    </>
  );
}
