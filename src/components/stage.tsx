import { useEffect, useState, type ReactNode } from "react";
import { Play } from "lucide-react";
import { DriveToy, EraserToy, FolderToy } from "@/components/characters";
import type { CueId } from "@/lib/narration";

function Mark({ children }: { children: ReactNode }) {
  return <span className="mark">{children}</span>;
}

function Note() {
  return (
    <div className="glass note">
      <span className="note-ico" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 6.5h5.2c.4 0 .7.2 1 .5l.6.7H15a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1Z" fill="currentColor" />
        </svg>
      </span>
      <span className="note-copy">
        <strong>Trabalho em grupo</strong>
        <span>Entrega amanhã. Qual é a versão certa?</span>
      </span>
      <span className="note-now">agora</span>
    </div>
  );
}

const FILES = [
  "trabalho_final.doc",
  "trabalho_final_v2.doc",
  "final_v7_agora_vai.doc",
  "versao_CERTA.doc",
  "final_de_verdade.doc",
];

function RollNumber() {
  const [n, setN] = useState(0);
  const [rolling, setRolling] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(47);
      setRolling(false);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 680);
      const eased = 1 - (1 - p) * (1 - p);
      setN(Math.round(eased * 47));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setRolling(false);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div className={rolling ? "mega rolling" : "mega"}>{n}</div>;
}

export function TitleCard({ onPlay }: { onPlay: () => void }) {
  return (
    <div className="title-card">
      <p className="pill">
        <i />
        mini aula · 50 segundos
      </p>
      <Note />
      <h1 className="display title-head">
        você abriu a
        <br />
        <Mark>pasta</Mark> do trabalho
      </h1>
      <div className="title-toy">
        <div className="char-float">
          <div className="char-shake">
            <FolderToy mood="shock" />
          </div>
        </div>
      </div>
      <div className="mins">
        <div className="mini">
          <strong>47</strong>
          arquivos na pasta
        </div>
        <div className="mini">e o colega apagou a sua parte</div>
        <div className="mini">ele guarda cada versão e mostra quem mudou o quê</div>
        <div className="mini mini-lime">
          <b>Salvou.</b>
          <b>Enviou.</b>
          <b>Juntou.</b>
        </div>
      </div>
      <button className="go" type="button" onClick={onPlay}>
        <Play size={20} strokeWidth={2.6} aria-hidden />
        Assistir
      </button>
    </div>
  );
}

function Abriu() {
  return (
    <div className="scene scene-in">
      <Note />
      <h2 className="display title-head">
        você abriu a
        <br />
        <Mark>pasta</Mark> do trabalho
      </h2>
      <div className="char-slot">
        <div className="char-float">
          <div className="char-shake">
            <FolderToy mood="shock" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Quarenta() {
  return (
    <div className="scene scene-in center-scene">
      <RollNumber />
      <p className="term">arquivos na pasta</p>
    </div>
  );
}

function Jura() {
  return (
    <div className="scene scene-in">
      <h2 className="display">
        a <Mark>versão</Mark>
        <br />
        certa?
      </h2>
      <div className="files">
        {FILES.map((name, i) => (
          <div
            key={name}
            className={i === 2 ? "glass file hot" : "glass file"}
            style={{ animationDelay: `${(0.08 + i * 0.12).toFixed(2)}s` }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function Apagou() {
  return (
    <div className="scene scene-in">
      <h2 className="display">
        <Mark>apagou</Mark>
        <br />a sua parte
      </h2>
      <div className="char-slot">
        <div className="char-float">
          <EraserToy />
        </div>
      </div>
    </div>
  );
}

function Quebrou() {
  return (
    <div className="scene scene-in">
      <h2 className="display">
        quebrou
        <br />
        <Mark>tudo</Mark>
      </h2>
      <p className="quiet">ninguém sabe quem</p>
      <div className="chips">
        <span className="chip shake">Ana?</span>
        <span className="chip shake">Bruno?</span>
        <span className="chip shake">Você?</span>
      </div>
    </div>
  );
}

function Pendrive() {
  return (
    <div className="scene scene-in">
      <h2 className="display">
        ficou no
        <br />
        <Mark>pendrive</Mark>
      </h2>
      <p className="quiet">a_versao_boa.pptx</p>
      <div className="char-slot">
        <div className="char-float">
          <DriveToy />
        </div>
      </div>
    </div>
  );
}

function Semana() {
  return (
    <div className="scene scene-in center-scene">
      <h2 className="display">
        hora
        <br />
        <Mark>perdida</Mark>
      </h2>
      <div className="lost">
        <span>segunda</span>
        <span>quarta</span>
        <span>sexta</span>
      </div>
      <p className="quiet">toda semana</p>
    </div>
  );
}

function Existe() {
  return (
    <div className="scene scene-in existe">
      <div className="iris" />
      <div className="existe-word">
        <p className="term">por isso existe</p>
        <h2 className="mega-word">GitHub</h2>
      </div>
    </div>
  );
}

function Guarda() {
  return (
    <div className="scene scene-in">
      <p className="term">ao vivo</p>
      <div className="glass board">
        <div className="board-top">
          <span>grupo / trabalho</span>
          <span className="term">main</span>
        </div>
        <div className="term-block">
          <span className="ln" style={{ animationDelay: "0.15s" }}>
            <span className="prompt">$ </span>git add .
          </span>
          <span className="ln" style={{ animationDelay: "0.55s" }}>
            <span className="prompt">$ </span>git commit -m "minha parte"
          </span>
          <span className="ln" style={{ animationDelay: "0.95s" }}>
            <span className="prompt">$ </span>git push
          </span>
        </div>
        <ul className="blame">
          <li className="ln" style={{ animationDelay: "2.20s" }}>
            <span className="avatar">A</span>
            <span>capa</span>
            <em>2 min</em>
          </li>
          <li className="ln" style={{ animationDelay: "2.55s" }}>
            <span className="avatar">B</span>
            <span>slides</span>
            <em>9 min</em>
          </li>
          <li className="ln hot" style={{ animationDelay: "2.90s" }}>
            <span className="avatar">V</span>
            <span>minha parte</span>
            <em>agora</em>
          </li>
        </ul>
        <div className="pr">
          <span className="pr-a">Create pull request</span>
          <span className="pr-b">Merged</span>
        </div>
      </div>
    </div>
  );
}

function WordScene({ word, term, hint }: { word: string; term: string; hint: string }) {
  return (
    <div className="scene scene-in center-scene">
      <h2 className="mega-word">
        <Mark>{word}</Mark>
      </h2>
      <p className={term.length > 12 ? "term long" : "term"}>{term}</p>
      <p className="quiet">{hint}</p>
    </div>
  );
}

function Slogan() {
  return (
    <div className="scene scene-in center-scene">
      <h2 className="mega-word">GitHub</h2>
      <p className="display">
        seu projeto,
        <br />
        <Mark>em equipe</Mark>
      </p>
    </div>
  );
}

function Virada() {
  return (
    <div className="scene scene-in">
      <h2 className="display">
        cada <Mark>quadro</Mark>
      </h2>
      <p className="quiet">feito por inteligência artificial</p>
      <div className="stack">
        <div className="glass slip s1">você abriu a pasta</div>
        <div className="glass slip s2">47 arquivos</div>
        <div className="glass slip s3">a versão certa?</div>
      </div>
    </div>
  );
}

function Agora() {
  return (
    <div className="scene scene-in center-scene">
      <div className="char-float toy-md">
        <FolderToy mood="happy" />
      </div>
      <h2 className="display">
        agora é
        <br />
        <Mark>a sua vez</Mark>
      </h2>
      <div className="pills">
        <span>Salvou</span>
        <span>Enviou</span>
        <span>Juntou</span>
      </div>
      <p className="quiet">abre o GitHub de verdade</p>
    </div>
  );
}

export function Scene({ id }: { id: CueId }) {
  switch (id) {
    case "abriu":
      return <Abriu />;
    case "quarenta":
      return <Quarenta />;
    case "jura":
      return <Jura />;
    case "apagou":
      return <Apagou />;
    case "quebrou":
      return <Quebrou />;
    case "pendrive":
      return <Pendrive />;
    case "semana":
      return <Semana />;
    case "existe":
      return <Existe />;
    case "guarda":
      return <Guarda />;
    case "salvou":
      return <WordScene word="Salvou" term="commit" hint="guarda uma versão" />;
    case "enviou":
      return <WordScene word="Enviou" term="push" hint="manda para o GitHub" />;
    case "juntou":
      return <WordScene word="Juntou" term="pull request + merge" hint="une a parte do grupo" />;
    case "slogan":
      return <Slogan />;
    case "virada":
      return <Virada />;
    case "agora":
      return <Agora />;
  }
}
