import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES, DURATION } from "../narration.ts";

test("a aula passa de 45 segundos e cabe em um minuto", () => {
  assert.ok(DURATION > 45);
  assert.ok(DURATION < 60);
});

test("a última deixa acontece antes do fim", () => {
  assert.ok(CUES[CUES.length - 1].t < DURATION);
});
