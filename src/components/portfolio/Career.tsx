import { useState } from "react";
import { ArrowUpRight, Briefcase, Award, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences, ExperienceItem } from "@/data/experience";

export const Career = () => {
  const [filter, setFilter] = useState<"all" | "work" | "leadership">("all");

  const filteredExperiences = experiences.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section className="mt-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Experience & Leadership
        </h2>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/50 border border-border/40 text-xs w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filter === "all"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({experiences.length})
          </button>
          <button
            onClick={() => setFilter("work")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filter === "work"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => setFilter("leadership")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              filter === "leadership"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Leadership & Speaking
          </button>
        </div>
      </div>

      <div className="mt-8 relative border-l border-border/70 ml-3.5 sm:ml-4 pl-6 sm:pl-8 space-y-10">
        {filteredExperiences.map((entry: ExperienceItem) => {
          const isInternalLink = entry.url?.startsWith("/");

          return (
            <div key={entry.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target={isInternalLink ? undefined : "_blank"}
                      rel={isInternalLink ? undefined : "noopener noreferrer"}
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                    >
                      <span>{entry.company}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="text-lg font-bold text-foreground">{entry.company}</span>
                  )}

                  {entry.type === "leadership" && (
                    <Badge variant="secondary" className="text-[10px] px-2 py-0 font-medium">
                      <Award className="w-2.5 h-2.5 mr-1 text-primary" />
                      Leadership
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {entry.period}
                  </span>
                  {entry.location && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3" />
                        {entry.location}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-sm font-semibold text-foreground/90 mt-0.5">
                {entry.role}
              </div>

              {entry.description && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {entry.description}
                </p>
              )}

              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {entry.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Skills / Tech tags */}
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {entry.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-muted/60 text-foreground/80 border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
