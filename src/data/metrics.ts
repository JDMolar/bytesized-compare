export type BadgeType = "Best in Class" | "Cost-Effective" | "Capable" | "Premium Tier";

export interface CellEvaluation {
  modelId: string;
  badge: BadgeType;
  synthesis: string;
}

export interface MetricDimension {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  description: string;
  evaluations: Record<string, CellEvaluation>;
}

export const metrics: MetricDimension[] = [
  {
    id: "front-end",
    name: "Front-End Dev",
    icon: "fa-brands fa-react",
    iconColor: "text-cyan-400",
    description: "Tailwind CSS, Astro/React, A11y accessibility standards, reactive DOM hierarchies.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Best in Class",
        synthesis: "Excels at semantic component decomposition, precise Tailwind/CSS styling without AI slop, and accessible reactive state architectures with flawless DOM tree synthesis."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Produces responsive layouts and clean React/Vue components quickly, though occasionally defaults to generic spacing tokens and utility redundancies."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Delivers production-grade enterprise frontend architectures and rigorous TypeScript state-machine typings at high inference latency and token expense."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Rapidly translates Figma screenshot vectors into semantic HTML5/Tailwind scaffolds with minimal token spend and reliable flex/grid alignment."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Rapidly generates boilerplate JSX and landing page sections at near-zero latency, but requires manual oversight for nuanced layout fidelity and micro-interactions."
      }
    }
  },
  {
    id: "back-end",
    name: "Back-End Logic",
    icon: "fa-solid fa-server",
    iconColor: "text-emerald-400",
    description: "Distributed systems, async concurrency models, ACID databases, state reconciliation.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Best in Class",
        synthesis: "Demonstrates unrivaled reasoning depth in multi-threaded concurrency models, complex distributed state reconciliation, and semantic AST refactoring."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Effectively handles standard REST/GraphQL business logic, ORM query builders, and asynchronous job queues with clean procedural patterns."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Formulates mathematically proven distributed consensus algorithms and high-load database sharding architectures via deep test-time reasoning."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Efficiently constructs scalable microservice controllers and SQL pipeline transformations with optimal compute overhead and zero hallucinated libraries."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Executes standard CRUD endpoints, routing middleware, and helper utility scripts at lightning speed with dependable functional syntax."
      }
    }
  },
  {
    id: "api-mgmt",
    name: "API Management",
    icon: "fa-solid fa-network-wired",
    iconColor: "text-indigo-400",
    description: "OpenAPI 3.1, JSON Schema, gRPC protobuf contracts, payload type guards.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Capable",
        synthesis: "Accurately maps complex domain entities into clean OpenAPI 3.1 definitions, maintaining rigorous protocol contracts across nested payload structures."
      },
      astra: {
        modelId: "astra",
        badge: "Best in Class",
        synthesis: "Enforces 100% deterministic JSON Schema adherence and handles bidirectional API gateway migrations with native structured output precision."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Synthesizes fault-tolerant gRPC proto interfaces, bidirectional webhook retry matrices, and schema registries for mission-critical enterprise fabrics."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Ingests entire monorepo API catalogs into its long-context buffer to effortlessly extract endpoints and format validation middleware on a budget."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Delivers fast schema linting, payload normalization, and curl-to-fetch translation over massive log batches with unmatched throughput."
      }
    }
  },
  {
    id: "security-audit",
    name: "Security Audit",
    icon: "fa-solid fa-shield-halved",
    iconColor: "text-rose-400",
    description: "SAST/DAST static analysis, taint tracking, privilege escalation, zero-day checks.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Best in Class",
        synthesis: "Uncovers nuanced AST logic flaws, race conditions, memory safety regressions, and auth bypasses with near-zero false-positive rates."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Reliably flags standard OWASP Top 10 vulnerabilities, unescaped queries, and misconfigured CORS headers across routine codebase scans."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Performs formal symbolic execution, cryptanalytic vulnerability checks, and automated zero-day exploit path simulations under deep deliberation."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Audits entire multi-gigabyte dependency trees and repository diffs in a single unified prompt to catch CVE mismatches and secret leaks affordably."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Scans tens of thousands of lines of code in seconds for regex pattern matches, plaintext credentials, and deprecated dependency signatures."
      }
    }
  },
  {
    id: "creative-writing",
    name: "Creative Writing",
    icon: "fa-solid fa-feather",
    iconColor: "text-amber-400",
    description: "Narrative voice, anti-slop copy, developer empathy, high-cadence storytelling.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Best in Class",
        synthesis: "Produces stylistically authentic, cadence-varied copy with rich tonal nuance, completely circumventing formulaic AI vocabulary and robotic cliches."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Crafts polished marketing hooks, technical launch announcements, and engaging blog articles with crisp structural flow and broad appeal."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Generates deeply reasoned white papers, philosophical essays, and dense technical prose with scholarly authority at top-bracket API costs."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Delivers vibrant multi-channel social copy, product changelogs, and localization variants quickly and economically across diverse linguistic registers."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Rapidly synthesizes high-volume short-form ad variations, email subject lines, and draft brainstorms with zero turnaround delay."
      }
    }
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics",
    icon: "fa-solid fa-video",
    iconColor: "text-purple-400",
    description: "Remotion video automation, GSAP keyframing, Canvas shaders, SVG transitions.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Capable",
        synthesis: "Generates mathematically precise SVG Bezier curves, complex CSS cubic-bezier transition curves, and clean programmatic Remotion slide sequences."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Produces functional Canvas 2D animations, Tailwind transition utilities, and structured frame-by-frame timeline arrays for web graphics."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Computes advanced 3D WebGL shader matrices, spring physics vectors, and complex mathematical parametric curves for custom visual engines."
      },
      argon: {
        modelId: "argon",
        badge: "Best in Class",
        synthesis: "Uniquely analyzes multi-frame video inputs natively and writes synchronized Remotion / SVG kinetic motion code with flawless temporal spatial awareness."
      },
      flash: {
        modelId: "flash",
        badge: "Cost-Effective",
        synthesis: "Instantly outputs basic CSS keyframe loops, button hover ripples, and simple SVG animation triggers at negligible computational cost."
      }
    }
  },
  {
    id: "mcp-automation",
    name: "MCP/Automation",
    icon: "fa-solid fa-robot",
    iconColor: "text-teal-400",
    description: "Model Context Protocol, agent self-healing loops, parallel tool execution.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Best in Class",
        synthesis: "Maintains flawless multi-turn agentic state across complex MCP client-server topologies, executing recursive tool self-corrections with precision."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Smoothly coordinates parallel function calls and external schema-based webhook dispatches with tight JSON adherence and reliable status callbacks."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Formulates dynamic multi-agent DAG execution plans and autonomously remediates multi-step orchestrator pipeline failures in mission-critical environments."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Reliably chains 10+ sequential MCP tool invocations within extensive context histories without state drift or dropped parameters at minimal cost."
      },
      flash: {
        modelId: "flash",
        badge: "Capable",
        synthesis: "Excels at high-concurrency tool routing, JSON sanitization, and triage dispatch across distributed agent clusters at ultra-low latency."
      }
    }
  },
  {
    id: "cost-efficiency",
    name: "Cost Efficiency",
    icon: "fa-solid fa-coins",
    iconColor: "text-yellow-400",
    description: "Token pricing, context caching, latency-per-dollar, high-volume ROI.",
    evaluations: {
      opus: {
        modelId: "opus",
        badge: "Premium Tier",
        synthesis: "Demands significant compute cost per 1M tokens, justifiable strictly for mission-critical core reasoning, deep audits, and definitive master outputs."
      },
      astra: {
        modelId: "astra",
        badge: "Capable",
        synthesis: "Offers competitive mid-tier pricing for broad enterprise tasks, but accumulates substantial cost when run on unbuffered iterative development loops."
      },
      sol: {
        modelId: "sol",
        badge: "Premium Tier",
        synthesis: "Represents the highest token expense on the market, reserving its extended deliberation compute exclusively for intractable algorithmic challenges."
      },
      argon: {
        modelId: "argon",
        badge: "Cost-Effective",
        synthesis: "Delivers an extraordinary price-to-intelligence ratio, combining frontier multimodal comprehension with sustainable enterprise token economics."
      },
      flash: {
        modelId: "flash",
        badge: "Best in Class",
        synthesis: "Obliterates pipeline token expenses with fractions-of-a-cent pricing per million tokens, enabling continuous massive-scale background operations."
      }
    }
  }
];
