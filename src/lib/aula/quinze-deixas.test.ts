import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES } from "../narration.ts";

const ESPERADAS = [
  "abriu",
  "quarenta",
  "jura",
  "apagou",
  "quebrou",
  "pendrive",
  "semana",
  "existe",
  "guarda",
  "salvou",
  "enviou",
  "juntou",
  "slogan",
  "virada",
  "agora",
];

test("a ordem das quinze deixas não muda", () => {
  assert.deepEqual(
    CUES.map((cue) => cue.id),
    ESPERADAS,
  );
});
