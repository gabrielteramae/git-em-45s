type Mood = "shock" | "happy";

export function FolderToy({ mood }: { mood: Mood }) {
  const id = mood === "shock" ? "shock" : "happy";
  return (
    <svg className="toy" viewBox="0 0 300 340" role="img" aria-label={mood === "shock" ? "Pasta em choque" : "Pasta feliz"}>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ec8ff" />
          <stop offset="48%" stopColor="#3c86f2" />
          <stop offset="100%" stopColor="#2457c8" />
        </linearGradient>
        <linearGradient id={`${id}-tab`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7ecff" />
          <stop offset="100%" stopColor="#79b8ff" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="322" rx="82" ry="12" fill="#141414" opacity="0.13" />
      <rect x="108" y="274" width="28" height="38" rx="13" fill={`url(#${id}-body)`} />
      <rect x="166" y="274" width="28" height="38" rx="13" fill={`url(#${id}-body)`} />
      {mood === "shock" ? (
        <g className="papers">
          <rect x="228" y="36" width="34" height="44" rx="5" fill="#ffffff" transform="rotate(14 245 58)" />
          <rect x="12" y="64" width="30" height="40" rx="5" fill="#ffffff" transform="rotate(-18 27 84)" />
        </g>
      ) : null}
      <rect x="48" y="86" width="204" height="196" rx="54" fill={`url(#${id}-body)`} />
      <rect x="48" y="56" width="112" height="46" rx="16" fill={`url(#${id}-tab)`} />
      <ellipse cx="116" cy="126" rx="52" ry="20" fill="#ffffff" opacity="0.28" />
      <path
        d={mood === "happy" ? "M24 168c18-28 8-46 28-34" : "M36 214c-8-28 8-36 22-16"}
        fill="none"
        stroke="#3c86f2"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d={mood === "happy" ? "M276 168c-18-28-8-46-28-34" : "M264 214c8-28-8-36-22-16"}
        fill="none"
        stroke="#3c86f2"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <circle cx={mood === "happy" ? "40" : "52"} cy={mood === "happy" ? "128" : "196"} r="15" fill="#69adff" />
      <circle cx={mood === "happy" ? "260" : "248"} cy={mood === "happy" ? "128" : "196"} r="15" fill="#69adff" />
      <ellipse cx="112" cy="170" rx="31" ry="36" fill="#ffffff" />
      <ellipse cx="190" cy="170" rx="31" ry="36" fill="#ffffff" />
      <circle cx={mood === "shock" ? "118" : "112"} cy="178" r="14" fill="#141414" />
      <circle cx={mood === "shock" ? "198" : "190"} cy="178" r="14" fill="#141414" />
      <circle cx={mood === "shock" ? "112" : "106"} cy="172" r="5" fill="#ffffff" />
      <circle cx={mood === "shock" ? "192" : "184"} cy="172" r="5" fill="#ffffff" />
      <ellipse cx="86" cy="204" rx="13" ry="7" fill="#ff9bb6" opacity="0.9" />
      <ellipse cx="214" cy="204" rx="13" ry="7" fill="#ff9bb6" opacity="0.9" />
      {mood === "shock" ? (
        <>
          <path d="M78 140q34-22 66 4" fill="none" stroke="#17315f" strokeWidth="7" strokeLinecap="round" />
          <path d="M158 144q32-22 66 0" fill="none" stroke="#17315f" strokeWidth="7" strokeLinecap="round" />
          <ellipse cx="150" cy="232" rx="20" ry="18" fill="#1a2744" />
          <ellipse cx="150" cy="238" rx="11" ry="8" fill="#ff7b93" />
          <path d="M232 104c12 6 14 20 6 28-8-2-14-10-12-20 2-4 4-6 6-8z" fill="#e7f4ff" />
        </>
      ) : (
        <>
          <path d="M82 152q30-20 58 2" fill="none" stroke="#17315f" strokeWidth="7" strokeLinecap="round" />
          <path d="M162 154q28-20 58 0" fill="none" stroke="#17315f" strokeWidth="7" strokeLinecap="round" />
          <path d="M118 214q32 34 64 0" fill="none" stroke="#17315f" strokeWidth="8" strokeLinecap="round" />
          <circle cx="214" cy="246" r="18" fill="#c6ef3d" />
          <path d="M206 246l6 6 12-13" fill="none" stroke="#141414" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export function EraserToy() {
  return (
    <svg className="toy" viewBox="0 0 300 340" role="img" aria-label="Borracha culpada">
      <defs>
        <linearGradient id="eraser" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffb0a4" />
          <stop offset="100%" stopColor="#ff6d78" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="322" rx="78" ry="12" fill="#141414" opacity="0.13" />
      <g transform="translate(198 150) rotate(16)">
        <rect width="52" height="66" rx="6" fill="#ffffff" />
        <path d="M10 16h30M10 28h24M10 40h28" stroke="#e4d9cc" strokeWidth="3" />
        <path d="M34 0l18 16" stroke="#f0e6da" strokeWidth="2" />
      </g>
      <rect x="116" y="276" width="26" height="36" rx="12" fill="#ff8d90" />
      <rect x="162" y="276" width="26" height="36" rx="12" fill="#ff8d90" />
      <rect x="62" y="96" width="168" height="186" rx="48" fill="url(#eraser)" />
      <ellipse cx="124" cy="128" rx="40" ry="16" fill="#ffffff" opacity="0.28" />
      <ellipse cx="118" cy="168" rx="26" ry="30" fill="#ffffff" />
      <ellipse cx="186" cy="168" rx="26" ry="30" fill="#ffffff" />
      <circle cx="124" cy="174" r="12" fill="#141414" />
      <circle cx="194" cy="172" r="12" fill="#141414" />
      <circle cx="119" cy="168" r="4" fill="#ffffff" />
      <circle cx="189" cy="166" r="4" fill="#ffffff" />
      <path d="M92 142q22-8 40 8" fill="none" stroke="#7a2438" strokeWidth="6" strokeLinecap="round" />
      <path d="M166 132q26-16 46 6" fill="none" stroke="#7a2438" strokeWidth="6" strokeLinecap="round" />
      <path d="M128 214q24 10 40-6" fill="none" stroke="#7a2438" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="96" cy="198" rx="12" ry="7" fill="#ffd0d8" />
      <ellipse cx="206" cy="198" rx="12" ry="7" fill="#ffd0d8" />
      <circle cx="214" cy="188" r="16" fill="#ff8d90" />
      <circle cx="214" cy="188" r="8" fill="#ffd0d4" />
    </svg>
  );
}

export function DriveToy() {
  return (
    <svg className="toy" viewBox="0 0 300 340" role="img" aria-label="Pendrive chorando">
      <defs>
        <linearGradient id="drive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bff3e4" />
          <stop offset="100%" stopColor="#3fbea4" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="322" rx="70" ry="12" fill="#141414" opacity="0.13" />
      <rect x="118" y="278" width="24" height="32" rx="11" fill="#49c2aa" />
      <rect x="160" y="278" width="24" height="32" rx="11" fill="#49c2aa" />
      <rect x="104" y="48" width="92" height="36" rx="12" fill="#1f8f7c" />
      <rect x="118" y="58" width="14" height="18" rx="3" fill="#d8fff4" />
      <rect x="138" y="58" width="14" height="18" rx="3" fill="#d8fff4" />
      <rect x="168" y="58" width="14" height="18" rx="3" fill="#d8fff4" />
      <rect x="78" y="78" width="144" height="206" rx="48" fill="url(#drive)" />
      <ellipse cx="132" cy="112" rx="36" ry="14" fill="#ffffff" opacity="0.35" />
      <ellipse cx="122" cy="162" rx="24" ry="28" fill="#ffffff" />
      <ellipse cx="180" cy="162" rx="24" ry="28" fill="#ffffff" />
      <circle cx="122" cy="170" r="11" fill="#141414" />
      <circle cx="180" cy="170" r="11" fill="#141414" />
      <circle cx="117" cy="165" r="4" fill="#ffffff" />
      <circle cx="175" cy="165" r="4" fill="#ffffff" />
      <path d="M98 140q20 10 40 2" fill="none" stroke="#14584c" strokeWidth="6" strokeLinecap="round" />
      <path d="M164 142q22 10 40 0" fill="none" stroke="#14584c" strokeWidth="6" strokeLinecap="round" />
      <path d="M132 214q18 8 32-4" fill="none" stroke="#14584c" strokeWidth="6" strokeLinecap="round" />
      <ellipse className="tear" cx="108" cy="196" rx="6" ry="8" fill="#dff6ff" />
      <ellipse className="tear delay" cx="196" cy="198" rx="6" ry="8" fill="#dff6ff" />
    </svg>
  );
}
