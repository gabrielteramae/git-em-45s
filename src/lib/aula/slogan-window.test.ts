import assert from "node:assert/strict";
import { test } from "node:test";
import { cueAt } from "../narration.ts";

test("Salvou, Enviou e Juntou cabem antes do slogan", () => {
  assert.equal(cueAt(33.24), "salvou");
  assert.equal(cueAt(34.83), "enviou");
  assert.equal(cueAt(36.35), "juntou");
  assert.equal(cueAt(37.87), "slogan");
});
