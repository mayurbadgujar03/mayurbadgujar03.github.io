export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "work" | "leadership";
  description?: string;
  highlights: string[];
  skills: string[];
  url?: string;
  urlLabel?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "zwiebel-ai",
    company: "Zwiebel AI",
    role: "Software Engineer Intern",
    period: "Sep 2026 – Dec 2026",
    location: "Remote",
    type: "work",
    highlights: [
      "Engineered an event-driven WhatsApp notification system using Meta Business API, triggering real-time alerts on booking confirmations, cancellations, and payment events across the SmashX platform.",
      "Resolved critical cross-origin authentication failures blocking platform access, debugging OAuth token lifecycles and session persistence across microservices.",
      "Integrated Gemini AI into ICS-LMS to automatically transcribe uploaded video lectures and generate context-aware quizzes, drastically reducing manual educator overhead.",
      "Designed a real-time slot availability engine that completely eliminated double-bookings and removed manual scheduling friction, boosting customer retention by 35%."
    ],
    skills: ["Meta Business API", "Node.js", "Gemini AI", "Webhooks", "OAuth 2.0", "Redis", "Distributed Systems"],
    url: "https://www.linkedin.com/in/mayurbadgujar03/",
    urlLabel: "Company Profile"
  },
  {
    id: "smashx",
    company: "SmashX Sports Platform",
    role: "Technical Consultant & Backend Architect",
    period: "2026",
    location: "Production Deployment",
    type: "work",
    highlights: [
      "Architected and deployed an end-to-end operations platform replacing manual WhatsApp bookings with an automated booking engine serving 50+ daily customers and growing client revenue by 33%.",
      "Engineered a zero-commission Direct-UPI payment pipeline and automated Offline-to-Online retention loops.",
      "Integrated database-level concurrency controls and Redis state checks ensuring zero double-bookings during peak turf hours."
    ],
    skills: ["Node.js", "React", "Redis", "MongoDB", "Direct UPI", "SaaS Architecture"],
    url: "/proof-of-work/smashx",
    urlLabel: "View Case Study"
  },
  {
    id: "chaicode",
    company: "ChaiCode",
    role: "Campus Ambassador & Event Lead",
    period: "2025",
    location: "Campus",
    type: "leadership",
    highlights: [
      "Organized the college's largest developer tech summit with 600+ active participants.",
      "Recognized publicly by Hitesh Choudhary for outstanding student community leadership and developer advocacy."
    ],
    skills: ["Community Building", "Developer Relations", "Event Management"],
    url: "https://www.linkedin.com/in/mayurbadgujar03/",
    urlLabel: "LinkedIn Post"
  },
  {
    id: "speaking",
    company: "Tech Community & Developer Days",
    role: "Public Speaker & Workshop Lead",
    period: "2024 – 2025",
    location: "Multiple Venues",
    type: "leadership",
    highlights: [
      "Delivered technical sessions and hands-on workshops at AWS, Microsoft, ChaiCode, and VS Code Dev Days.",
      "Mentored peers on modern backend architecture, cloud fundamentals, and practical API design."
    ],
    skills: ["Public Speaking", "System Design", "AWS", "Developer Mentorship"]
  },
  {
    id: "awards",
    company: "Hackathons & Competitions",
    role: "Technical Innovator & Competitor",
    period: "2023 – 2025",
    type: "leadership",
    highlights: [
      "Best Use of Technology Award (2025): Machine Health Copilot — built real-time sensor monitoring for agricultural pumps using Groq LLM & custom Model Context Protocol (MCP) server, preventing motor burnouts and cutting repair costs by 95%.",
      "First Prize, Avishkar Competition (Jul 2023): Won first place during freshman year competing against 4th-year senior engineering teams."
    ],
    skills: ["Model Context Protocol (MCP)", "Groq / LLaMA 3", "IoT & Diagnostics", "Rapid Prototyping"]
  }
];
