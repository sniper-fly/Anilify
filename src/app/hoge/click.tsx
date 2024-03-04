"use client";

import { Button } from "@/components/ui/button";
import { hoge } from "./hoge";

export default function Click() {
  function handleClick() {
    hoge();
  }

  return <Button onClick={handleClick}>log</Button>;
}
