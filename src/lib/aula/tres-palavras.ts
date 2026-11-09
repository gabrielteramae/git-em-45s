export type Palavra = {
  palavra: "Salvou" | "Enviou" | "Juntou";
  comando: string;
  ideia: string;
};

/** Mesma frase da cena, não a da cola. A cola ainda diz "pull + merge". */
export const TRES_PALAVRAS: readonly Palavra[] = [
  { palavra: "Salvou", comando: "git commit", ideia: "guarda uma versão" },
  { palavra: "Enviou", comando: "git push", ideia: "manda para o GitHub" },
  { palavra: "Juntou", comando: "pull request + merge", ideia: "une a parte do grupo" },
];
