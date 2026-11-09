import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES } from "../narration.ts";

test("não há id repetido", () => {
  const ids = CUES.map((cue) => cue.id);
  assert.equal(new Set(ids).size, ids.length);
});
