import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES, sfxFor } from "../narration.ts";

test("sfxFor bate com a tabela", () => {
  for (const cue of CUES) {
    assert.equal(sfxFor(cue.id), cue.sfx);
  }
});
