import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES, cueAt } from "../narration.ts";

test("cueAt devolve a deixa daquele segundo", () => {
  for (const cue of CUES) {
    assert.equal(cueAt(cue.t), cue.id);
  }
});

test("um fio de cabelo antes ainda é a deixa anterior", () => {
  assert.equal(cueAt(CUES[1].t - 0.2), CUES[0].id);
});
