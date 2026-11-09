import assert from "node:assert/strict";
import { test } from "node:test";
import { CUES } from "../narration.ts";

test("as deixas avançam no tempo", () => {
  for (let i = 1; i < CUES.length; i += 1) {
    assert.ok(CUES[i].t > CUES[i - 1].t, CUES[i].id);
  }
});
