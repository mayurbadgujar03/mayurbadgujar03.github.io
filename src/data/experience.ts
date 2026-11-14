export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  timeline: string;
  type: "engineering" | "leadership";
  summary: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "zwiebel-ai",
    role: "Software Engineer Intern",
    company: "Zwiebel AI",
    companyUrl: "#", 
    location: "Remote",
    timeline: "Sep 2026 – Present",
    type: "engineering",
    summary: "Architecting backend microservices, real-time event routing, and AI pipelines for commercial SaaS products.",
    highlights: [
      "Engineered an event-driven WhatsApp notification webhook pipeline via Meta Business API, handling asynchronous transactional alerts.",
      "Diagnosed and resolved critical authentication race conditions to ensure stable platform access and session persistence.",
      "Managed backend infrastructure for an EdTech platform scaling to 1,000+ active students with integrated AI video transcription."
    ],
    skills: ["Node.js", "Meta API", "Event-Driven Architecture", "Auth Workflows", "Webhooks"]
  },
  {
    id: "smashx-consulting",
    role: "Backend Consultant",
    company: "SmashX Sports",
    companyUrl: "#",
    location: "Contract / Remote",
    timeline: "2026",
    type: "engineering",
    summary: "Built a multi-tenant sports arena booking SaaS and custom Direct-UPI transaction engine.",
    highlights: [
      "Engineered a zero-commission Direct-UPI intent payment pipeline to bypass standard gateway fees.",
      "Created a chronological array sorting engine to resolve timezone boundary issues crossing 12:00 AM.",
      "Designed a distributed slot availability engine with atomic conflict resolution, eliminating double-booking collisions."
    ],
    skills: ["Node.js", "Express", "Direct UPI", "Multi-Tenant Architecture", "Vercel"]
  },
  {
    id: "chai-code",
    role: "Campus Ambassador",
    company: "Chai Aur Code",
    companyUrl: "#",
    location: "Dhule, India",
    timeline: "Dec 2025 – Oct 2026",
    type: "leadership",
    summary: "Spearheaded regional developer initiatives and institutional technical partnerships.",
    highlights: [
      "Organized the college's largest technical symposium with 600+ student attendees; recognized publicly by founder Hitesh Choudhary.",
      "Hosted 'Localhost to Live', guiding 50+ students through Git, GitHub Pages, and live cloud hosting architecture."
    ],
    skills: ["Developer Relations", "Public Speaking", "Technical Mentorship"]
  },
  {
    id: "aces-head",
    role: "Technical Head",
    company: "ACES Committee",
    companyUrl: "#",
    location: "Dhule, India",
    timeline: "Sep 2025 – Oct 2026",
    type: "leadership",
    summary: "Directed technical curriculum, hackathon judging, and engineering workshops.",
    highlights: [
      "Mentored junior engineering teams on REST API design, database schemas, and web development fundamentals.",
      "Led technical execution and infrastructure for annual departmental coding events."
    ],
    skills: ["Technical Leadership", "System Architecture Demos", "Project Management"]
  }
];
