import assert from "node:assert/strict";
import { test } from "node:test";
import { TRES_PALAVRAS } from "./tres-palavras.ts";

test("a ordem é Salvou, Enviou, Juntou", () => {
  assert.deepEqual(
    TRES_PALAVRAS.map((item) => item.palavra),
    ["Salvou", "Enviou", "Juntou"],
  );
});

test("Juntou não vira só pull", () => {
  const juntou = TRES_PALAVRAS[2];
  assert.match(juntou.comando, /pull request/);
  assert.match(juntou.comando, /merge/);
});
