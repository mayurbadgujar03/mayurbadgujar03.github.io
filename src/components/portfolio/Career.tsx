import { useState } from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { experiences } from "../../data/experience";

export const Career = () => {
  const [filter, setFilter] = useState<"engineering" | "leadership">("engineering");
  const filtered = experiences.filter((e) => e.type === filter);

  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary shrink-0" />
          Experience & Impact
        </h2>
        
        {/* Added overflow-x-auto to allow scrolling on ultra-small screens without breaking layout */}
        <div className="flex items-center gap-1.5 p-1 bg-muted rounded-lg text-xs font-medium overflow-x-auto w-full md:w-auto snap-x">
          <button
            onClick={() => setFilter("engineering")}
            className={`whitespace-nowrap snap-start px-3 py-2 md:py-1.5 rounded-md transition-all flex-1 md:flex-none ${
              filter === "engineering"
                ? "bg-background text-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Engineering Roles
          </button>
          <button
            onClick={() => setFilter("leadership")}
            className={`whitespace-nowrap snap-start px-3 py-2 md:py-1.5 rounded-md transition-all flex-1 md:flex-none ${
              filter === "leadership"
                ? "bg-background text-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Leadership & Community
          </button>
        </div>
      </div>

      <div className="mt-8 relative pl-6 border-l-2 border-border/80 space-y-10">
        {filtered.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                {item.company}
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
              <span className="text-xs font-mono text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded border border-foreground/10">
                {item.timeline}
              </span>
            </div>

            <p className="text-sm font-medium text-foreground/90 mt-0.5">{item.role} • <span className="text-muted-foreground">{item.location}</span></p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.summary}</p>

            <ul className="mt-3 space-y-2 text-sm text-foreground/80 list-disc list-inside">
              {item.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="text-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.skills.map((s) => (
                <span key={s} className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
