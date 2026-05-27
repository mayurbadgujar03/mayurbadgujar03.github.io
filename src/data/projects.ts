export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  role: string;
  timeline: string;
  scaleMetrics: {
    throughput?: string;
    latency?: string;
    dataScale?: string;
  };
  overview: string;
  systemArchitecture: string[];
  technicalChallenges: {
    problem: string;
    solution: string;
    outcome: string;
  }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "flash-sale-engine",
    name: "Distributed Flash Sale Engine",
    tagline: "High-Concurrency Inventory Management System",
    role: "Lead Backend Engineer",
    timeline: "2026",
    scaleMetrics: {
      throughput: "10,000 Concurrent Users",
      dataScale: "100,000 Simulated Requests",
    },
    overview: "Architected a Kubernetes-orchestrated microservices engine to solve the '1,000 iPhone Problem', preventing inventory overselling during massive traffic spikes.",
    systemArchitecture: [
      "Node.js microservices deployed via Docker containers",
      "Kubernetes Horizontal Pod Autoscaling (HPA) for traffic management",
      "Redis for atomic inventory decrement operations"
    ],
    technicalChallenges: [
      {
        problem: "Traditional relational databases locked up and oversold inventory under high concurrent load.",
        solution: "Implemented Redis atomic operations and distributed locking to handle inventory state before async syncing to the primary database.",
        outcome: "Achieved zero oversold items under a simulated load of 10,000 concurrent checkout requests."
      }
    ],
    tags: ["Node.js", "Kubernetes", "Docker", "Redis", "Microservices"],
  },
  {
    id: "syncstream",
    name: "SyncStream",
    tagline: "Real-Time Distributed Video Synchronization",
    role: "Backend Engineer",
    timeline: "2026",
    scaleMetrics: {
      latency: "Sub-100ms state sync",
    },
    overview: "Built a 'Centralized Ghost Player' architecture utilizing an 80-20 hybrid data strategy to synchronize video playback states across distributed clients in real-time.",
    systemArchitecture: [
      "Socket.IO for persistent bidirectional client-server communication",
      "Redis (80%) for high-speed volatile state management",
      "MongoDB (20%) for persistent user data storage"
    ],
    technicalChallenges: [
      {
        problem: "Network jitter caused clients to fall out of sync during video playback.",
        solution: "Engineered a Centralized Ghost Player on the server to act as the single source of truth, dictating state to all connected clients.",
        outcome: "Seamless synchronization across varied network conditions optimizing for speed and cost-saving."
      }
    ],
    tags: ["Socket.IO", "Redis", "MongoDB", "Node.js", "Real-Time"],
  },
  {
    id: "smashx",
    name: "SmashX SaaS",
    tagline: "B2B Turf Booking & Retention Platform",
    role: "Technical Consultant / Full-Stack",
    timeline: "2026",
    overview: "Consulted and engineered a comprehensive B2B SaaS platform that digitized manual WhatsApp-based booking processes into an automated 'Offline-to-Online' growth loop.",
    systemArchitecture: [
      "React/Next.js frontend integrated with a robust Node.js API",
      "Complex relational data mapping for time-slot inventory",
      "Automated notification and retention pipeline"
    ],
    technicalChallenges: [
      {
        problem: "Client was losing revenue to manual booking errors and no-shows.",
        solution: "Designed a centralized booking engine with automated conflict resolution and digitized retention loops.",
        outcome: "Successfully transitioned the business from manual tracking to a highly scalable, automated SaaS model."
      }
    ],
    tags: ["Node.js", "React", "Next.js", "SaaS Architecture"],
  },
  {
    id: "fintracker",
    name: "FinTracker AI",
    tagline: "AI-Powered Financial Intelligence Platform",
    role: "Full-Stack Developer",
    timeline: "2026",
    overview: "Developed a sophisticated financial tracking platform leveraging advanced LLM integrations for automated categorization and intelligent insights.",
    systemArchitecture: [
      "Custom LLM wrappers for intelligent data parsing",
      "High-performance REST API for transaction ingestion",
      "Secure user authentication and data isolation"
    ],
    technicalChallenges: [
      {
        problem: "Raw financial data required heavy manual processing for accurate categorization.",
        solution: "Integrated LLM capabilities to automatically parse, clean, and categorize unstructured transaction data.",
        outcome: "Drastically reduced manual data entry time while providing users with deep financial analytics."
      }
    ],
    tags: ["LLM Integration", "Node.js", "REST APIs", "Data Processing"],
  }
];
