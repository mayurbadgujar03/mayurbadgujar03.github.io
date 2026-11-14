export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  badge?: string;
  badgeType?: "award" | "users" | "metric";
}

export const projects: Project[] = [
  {
    id: "flash-sale-engine",
    title: "Distributed Flash Sale Engine",
    subtitle: "Zero-Oversell High Concurrency Architecture",
    description: "Architected a decoupled microservices platform designed to eliminate the '1,000 iPhone concurrency problem'. Replaced traditional RDBMS table locks with Redis atomic operations (DECRBY) and Lua scripts backed by database-level optimistic locking, guaranteeing zero inventory overselling under 100,000+ concurrent simulated checkouts. Orchestrated on Kubernetes with HPA, scaling dynamically from 1 to 5 pods during a 1,439% CPU spike.",
    tech: ["Node.js", "Redis", "Kubernetes", "Microservices", "k6"],
    link: "https://lnkd.in/p/dbqWMZbR",
    github: "https://github.com/mayurbadgujar03/Distributed-Flash-Sale-Engine",
    badge: "Zero-Oversell Tested",
    badgeType: "metric"
  },
  {
    id: "machine-health-copilot",
    title: "Machine Health Copilot",
    subtitle: "Predictive IoT Diagnostics & MCP Engine",
    description: "Built an edge-to-cloud telemetry ingest platform for predictive industrial pump maintenance, winning 'Best Use of Technology' at Ikigai 2026. Built a local Model Context Protocol (MCP) server exposing real-time MongoDB telemetry schemas directly to LLM agents for deterministic context retrieval. Parsed telemetry streams to detect vibration/thermal thresholds and trigger automated purchase order workflows.",
    tech: ["IoT", "MCP", "Node.js", "MongoDB", "Python"],
    link: "#",
    github: "#",
    badge: "Best Use of Technology",
    badgeType: "award"
  },
  {
    id: "flowbase",
    title: "Flowbase (Xugi.in)",
    subtitle: "Multi-Tenant Management Platform",
    description: "Full-stack organizational SaaS deployed to production and actively serving 132 continuous users at zero ongoing server expenditure. Engineered unified Google OAuth authentication propagating JWT session cookies across distinct subdomains with strict RBAC. Resolved critical asynchronous render-cycle race conditions in high-frequency state updates through precise server-client synchronization debouncers.",
    tech: ["Next.js", "OAuth 2.0", "PostgreSQL", "RBAC", "Vercel"],
    link: "https://xugi.in",
    github: "#",
    badge: "150+ Active Users",
    badgeType: "users"
  }
];
