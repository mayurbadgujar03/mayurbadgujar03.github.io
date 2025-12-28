import { ArrowUpRight } from "lucide-react";

interface CareerEntry {
  company: string;
  url: string;
  role: string;
  timeline: string;
}

const careerData: CareerEntry[] = [
  {
    company: "Company Name",
    url: "https://example.com",
    role: "Senior Software Engineer",
    timeline: "2022 — Present",
  },
  {
    company: "Previous Company",
    url: "https://example.com",
    role: "Software Engineer",
    timeline: "2020 — 2022",
  },
  {
    company: "First Company",
    url: "https://example.com",
    role: "Junior Developer",
    timeline: "2018 — 2020",
  },
];

export const Career = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground">Career</h2>
      
      <div className="mt-6 space-y-6">
        {careerData.map((entry, index) => (
          <div key={index}>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:underline underline-offset-4 transition-all"
            >
              {entry.company}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-base text-foreground">{entry.role}</p>
            <p className="text-sm text-muted-foreground">{entry.timeline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
