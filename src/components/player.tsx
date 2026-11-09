import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Scene, TitleCard } from "@/components/stage";
import { DURATION, cueAt, sfxFor, type CueId } from "@/lib/narration";
import { playSfx, unlock } from "@/lib/sfx";

type Status = "idle" | "playing" | "paused" | "ended";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lastCue = useRef<CueId | null>(null);
  const hideTimer = useRef<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [cue, setCue] = useState<CueId>("abriu");
  const [muted, setMuted] = useState(false);
  const [chrome, setChrome] = useState(true);
  const statusRef = useRef<Status>("idle");
  statusRef.current = status;

  useEffect(() => {
    if (status !== "playing") return;
    let raf = 0;
    const loop = () => {
      const audio = audioRef.current;
      if (audio) {
        const dur = Number.isFinite(audio.duration) ? audio.duration : DURATION;
        if (barRef.current) {
          const x = Math.round((audio.currentTime / dur) * 1000) / 1000;
          barRef.current.style.transform = `scaleX(${x})`;
        }
        const next = cueAt(audio.currentTime);
        setCue((prev) => (prev === next ? prev : next));
      }
      raf = requestAnimationFrame(loop);
      return;
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [status]);

  useEffect(() => {
    if (status !== "playing") return;
    if (lastCue.current === cue) return;
    const prev = lastCue.current;
    lastCue.current = cue;
    if (prev) playSfx(sfxFor(cue));
  }, [cue, status]);

  useEffect(() => {
    if (status !== "playing") {
      setChrome(true);
      return;
    }
    setChrome(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setChrome(false), 2200);
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [status, cue]);

  function reveal() {
    setChrome(true);
    if (statusRef.current !== "playing") return;
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setChrome(false), 2200);
  }

  async function start(fromStart = false) {
    const audio = audioRef.current;
    if (!audio) return;
    unlock();
    const ended = audio.ended || statusRef.current === "ended";
    if (fromStart || ended) {
      audio.currentTime = 0;
      lastCue.current = null;
      setCue("abriu");
      if (barRef.current) barRef.current.style.transform = "scaleX(0)";
    }
    const fresh = fromStart || ended || statusRef.current === "idle";
    try {
      await audio.play();
      if (fresh) playSfx("notify");
    } catch {
      setStatus("idle");
    }
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (statusRef.current === "playing") {
      audio.pause();
      return;
    }
    void start(false);
  }

  function onStageClick() {
    if (statusRef.current === "playing" && !chrome) {
      reveal();
      return;
    }
    toggle();
  }

  function seek(event: MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || statusRef.current === "idle") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const dur = Number.isFinite(audio.duration) ? audio.duration : DURATION;
    audio.currentTime = Math.round(p * dur * 100) / 100;
    if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(3)})`;
    setCue(cueAt(audio.currentTime));
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== " " && event.code !== "Space") return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "BUTTON" || target.tagName === "A")) return;
      event.preventDefault();
      if (statusRef.current === "idle") void start(true);
      else toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showDock = status !== "idle";

  return (
    <div className="stage-wrap">
      <div
        className="stage wash"
        onClick={status === "idle" ? undefined : onStageClick}
        onPointerMove={reveal}
      >
        <audio
          ref={audioRef}
          src="/narracao.mp3"
          preload="auto"
          onPlay={() => setStatus("playing")}
          onPause={() => {
            const audio = audioRef.current;
            if (audio?.ended) setStatus("ended");
            else setStatus((current) => (current === "idle" ? "idle" : "paused"));
          }}
          onEnded={() => setStatus("ended")}
        />
        {status === "idle" ? (
          <TitleCard onPlay={() => void start(true)} />
        ) : (
          <Scene key={cue} id={cue} />
        )}
        {status === "playing" ? <div className="whip" key={cue} /> : null}
        <div className="grain" aria-hidden />
        {status === "ended" ? (
          <button className="go end-btn" type="button" onClick={() => void start(true)}>
            <RotateCcw size={18} strokeWidth={2.6} aria-hidden />
            Ver de novo
          </button>
        ) : null}
        {showDock ? (
          <div className={chrome || status !== "playing" ? "dock" : "dock off"} onClick={(event) => event.stopPropagation()}>
            <div
              className="track"
              role="slider"
              aria-label="Progresso do vídeo"
              aria-valuemin={0}
              aria-valuemax={100}
              onClick={seek}
            >
              <div className="track-rail">
                <div className="track-bar" ref={barRef} />
              </div>
            </div>
            <div className="dock-row">
              <button className="icon-btn" type="button" onClick={toggle} aria-label={status === "playing" ? "Pausar" : "Continuar"}>
                {status === "playing" ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button className="icon-btn" type="button" onClick={() => void start(true)} aria-label="Do começo">
                <RotateCcw size={18} />
              </button>
              <button
                className="icon-btn"
                type="button"
                aria-label={muted ? "Com som" : "Sem som"}
                onClick={() => {
                  const audio = audioRef.current;
                  if (!audio) return;
                  audio.muted = !audio.muted;
                  setMuted(audio.muted);
                }}
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
