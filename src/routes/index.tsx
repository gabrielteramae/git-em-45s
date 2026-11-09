import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Player } from "@/components/player";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [present, setPresent] = useState(false);

  return (
    <main className={present ? "shell present" : "shell"}>
      <section className="notes">
        <p className="pill">
          <i />
          aula de GitHub
        </p>
        <p className="notes-title">Salvou. Enviou. Juntou.</p>
        <p className="notes-lead">
          A pasta do grupo, a versão que ninguém acha, e três palavras para o arquivo não sumir.
        </p>
        <ol className="defs">
          <li>
            <b>Salvou</b>
            <small>commit</small>
            <span>guarda uma versão do projeto</span>
          </li>
          <li>
            <b>Enviou</b>
            <small>push</small>
            <span>manda as versões para o GitHub</span>
          </li>
          <li>
            <b>Juntou</b>
            <small>pull + merge</small>
            <span>une a sua parte à do grupo</span>
          </li>
        </ol>
        <p className="notes-foot">
          Depois do vídeo, abre o GitHub de verdade. A voz é sintética — não é um clone.
        </p>
        <button className="ghost" type="button" onClick={() => setPresent((value) => !value)}>
          {present ? "Mostrar a cola" : "Apresentar"}
        </button>
      </section>
      <Player />
      {present ? (
        <button className="ghost present-exit" type="button" onClick={() => setPresent(false)}>
          Cola
        </button>
      ) : null}
    </main>
  );
}
