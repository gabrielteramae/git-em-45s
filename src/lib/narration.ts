export type SfxName = "pop" | "whoosh" | "notify" | "click";

export type Cue = {
  id:
    | "abriu"
    | "quarenta"
    | "jura"
    | "apagou"
    | "quebrou"
    | "pendrive"
    | "semana"
    | "existe"
    | "guarda"
    | "salvou"
    | "enviou"
    | "juntou"
    | "slogan"
    | "virada"
    | "agora";
  t: number;
  sfx: SfxName;
};

/** Word starts from the narration, in seconds. */
export const CUES: Cue[] = [
  { id: "abriu", t: 0.1, sfx: "notify" },
  { id: "quarenta", t: 3.37, sfx: "pop" },
  { id: "jura", t: 5.72, sfx: "whoosh" },
  { id: "apagou", t: 9.35, sfx: "pop" },
  { id: "quebrou", t: 12.36, sfx: "whoosh" },
  { id: "pendrive", t: 16.73, sfx: "pop" },
  { id: "semana", t: 20.34, sfx: "click" },
  { id: "existe", t: 23.4, sfx: "whoosh" },
  { id: "guarda", t: 25.9, sfx: "click" },
  { id: "salvou", t: 33.24, sfx: "pop" },
  { id: "enviou", t: 34.83, sfx: "pop" },
  { id: "juntou", t: 36.35, sfx: "pop" },
  { id: "slogan", t: 37.87, sfx: "whoosh" },
  { id: "virada", t: 42.24, sfx: "whoosh" },
  { id: "agora", t: 48.07, sfx: "notify" },
];

export const DURATION = 50.4;

export type CueId = Cue["id"];

export function cueAt(time: number): CueId {
  let id: CueId = CUES[0].id;
  for (const cue of CUES) {
    if (time + 0.04 >= cue.t) id = cue.id;
  }
  return id;
}

export function sfxFor(id: CueId): SfxName {
  return CUES.find((cue) => cue.id === id)?.sfx ?? "pop";
}
