export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  tagline: string;
  color: 'amber' | 'teal' | 'indigo' | 'blue' | 'cyan';
  dotBg: string;
  dotShadow: string;
  badgeClass: string;
}

export const models: ModelInfo[] = [
  {
    id: "opus",
    name: "Claude Opus 5.5",
    provider: "Anthropic",
    tagline: "Autonomous System Architect",
    color: "amber",
    dotBg: "bg-amber-500",
    dotShadow: "shadow-amber-500/50",
    badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "astra",
    name: "GPT-6 Astra",
    provider: "OpenAI",
    tagline: "Deterministic Schema & Asset Engine",
    color: "teal",
    dotBg: "bg-teal-400",
    dotShadow: "shadow-teal-400/50",
    badgeClass: "bg-teal-500/10 text-teal-300 border-teal-500/30"
  },
  {
    id: "sol",
    name: "GPT-6.1 Sol",
    provider: "OpenAI",
    tagline: "Formal Reasoning & Cryptanalysis",
    color: "indigo",
    dotBg: "bg-indigo-400",
    dotShadow: "shadow-indigo-400/50",
    badgeClass: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
  },
  {
    id: "argon",
    name: "Gemini 4 Argon",
    provider: "Google",
    tagline: "Multimodal & Kinetic Motion Synthesizer",
    color: "blue",
    dotBg: "bg-blue-400",
    dotShadow: "shadow-blue-400/50",
    badgeClass: "bg-blue-500/10 text-blue-300 border-blue-500/30"
  },
  {
    id: "flash",
    name: "Gemini 3.8 Flash Max",
    provider: "Google",
    tagline: "High-Speed Context & AST Engine",
    color: "cyan",
    dotBg: "bg-cyan-400",
    dotShadow: "shadow-cyan-400/50",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
  }
];
