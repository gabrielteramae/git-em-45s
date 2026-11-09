import type { SfxName } from "@/lib/narration";

let ctx: AudioContext | null = null;

function ac() {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

export function unlock() {
  const context = ac();
  if (context.state === "suspended") void context.resume();
}

function tone(
  freq: number,
  at: number,
  dur: number,
  type: OscillatorType,
  gain: number,
  endFreq?: number,
) {
  const context = ac();
  const osc = context.createOscillator();
  const amp = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, at);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), at + dur);
  amp.gain.setValueAtTime(gain, at);
  amp.gain.exponentialRampToValueAtTime(0.001, at + dur);
  osc.connect(amp);
  amp.connect(context.destination);
  osc.start(at);
  osc.stop(at + dur + 0.02);
}

export function playSfx(name: SfxName) {
  const context = ac();
  if (context.state === "suspended") void context.resume();
  const t = context.currentTime;
  if (name === "pop") tone(540, t, 0.1, "sine", 0.09, 180);
  if (name === "whoosh") tone(220, t, 0.18, "triangle", 0.05, 880);
  if (name === "click") tone(1400, t, 0.04, "square", 0.04, 900);
  if (name === "notify") {
    tone(880, t, 0.08, "sine", 0.07);
    tone(1320, t + 0.09, 0.1, "sine", 0.06);
  }
}
