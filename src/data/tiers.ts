export interface TierRole {
  label: string;
  model: string;
  isHighlight?: boolean;
}

export interface TierStrategy {
  id: string;
  tierNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  gradientBar: string;
  hoverBorder: string;
  hoverShadow: string;
  roles: TierRole[];
  description: string;
  splitText: string;
  splitIconColor: string;
  benefitText: string;
  benefitColor: string;
}

export const tiers: TierStrategy[] = [
  {
    id: "orchestrator",
    tierNumber: "Tier 01",
    badge: "Tier 01 • Orchestration",
    title: "The Production Orchestrator",
    subtitle: "Autonomous Goal Decomposition & MCP Tool Routing",
    icon: "fa-solid fa-sitemap",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/30",
    gradientBar: "from-indigo-500 via-purple-500 to-pink-500",
    hoverBorder: "hover:border-indigo-500/60",
    hoverShadow: "hover:shadow-glow-purple",
    roles: [
      { label: "Primary Engine", model: "Claude Opus 5.5", isHighlight: true },
      { label: "High-Speed Triage", model: "Gemini 3.8 Flash Max", isHighlight: false },
      { label: "Schema Enforcer", model: "GPT-6 Astra", isHighlight: false }
    ],
    description: "Directs top-level goal reconciliation, recursive tool self-corrections, and complex multi-agent state machines with zero hallucinated parameters.",
    splitText: "Split: 5% Opus / 80% Flash / 15% Astra",
    splitIconColor: "text-indigo-400",
    benefitText: "-72% Cost",
    benefitColor: "text-emerald-400"
  },
  {
    id: "creative",
    tierNumber: "Tier 02",
    badge: "Tier 02 • Creative & Vision",
    title: "The Creative Visual Director",
    subtitle: "Multimodal Motion, SVG Shaders & Copywriting",
    icon: "fa-solid fa-clapperboard",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/30",
    gradientBar: "from-pink-500 via-rose-500 to-amber-500",
    hoverBorder: "hover:border-pink-500/60",
    hoverShadow: "hover:shadow-glow-cyan",
    roles: [
      { label: "Primary Vision", model: "Gemini 4 Argon", isHighlight: true },
      { label: "Narrative Copy", model: "Claude Opus 5.5", isHighlight: false },
      { label: "Canvas / Vector", model: "GPT-6 Astra", isHighlight: false }
    ],
    description: "Synthesizes video storyboards into frame-accurate Remotion animations, GSAP physics, and engaging human prose without formulaic AI cliches.",
    splitText: "Split: 40% Argon / 30% Opus / 30% Mixed",
    splitIconColor: "text-pink-400",
    benefitText: "-58% Token Spend",
    benefitColor: "text-cyan-400"
  },
  {
    id: "engineer",
    tierNumber: "Tier 03",
    badge: "Tier 03 • Core Engineering",
    title: "The Core Engineer",
    subtitle: "Full-Stack Synthesis, SAST Audits & CI/CD",
    icon: "fa-solid fa-terminal",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    gradientBar: "from-emerald-500 via-teal-500 to-cyan-500",
    hoverBorder: "hover:border-emerald-500/60",
    hoverShadow: "hover:shadow-glow-emerald",
    roles: [
      { label: "AST & Security", model: "Claude Opus 5.5", isHighlight: true },
      { label: "Formal Logic", model: "GPT-6.1 Sol", isHighlight: false },
      { label: "Ultra-Fast Linter", model: "Gemini 3.8 Flash Max", isHighlight: false }
    ],
    description: "Executes zero-defect component builds, distributed concurrency logic, automated unit testing, and sub-second pre-commit telemetry.",
    splitText: "Split: 45% Opus / 35% Argon / 20% Fast",
    splitIconColor: "text-emerald-400",
    benefitText: "-64% Latency",
    benefitColor: "text-emerald-400"
  }
];
