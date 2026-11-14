import { ArrowUpRight, Github, Trophy } from "lucide-react";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="mt-20">
      <div className="flex items-center gap-2 border-b border-border pb-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">Featured Architecture</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const hasGithub = Boolean(
            project.github &&
              project.github !== "#" &&
              project.github.startsWith("http")
          );
          const hasLink = Boolean(project.link && project.link !== "#");
          const linkHref = project.link.startsWith("http")
            ? project.link
            : `https://${project.link}`;
          const isFlagship = idx === 0;

          return (
            <div
              key={project.id}
              className={`group relative bg-muted/20 border border-border/50 rounded-xl p-6 hover:bg-muted/40 transition-colors flex flex-col ${
                isFlagship ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {project.badge && (
                      project.badgeType === "award" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <Trophy className="w-3 h-3 text-amber-500" />
                          {project.badge}
                        </span>
                      ) : project.badgeType === "users" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {project.badge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          {project.badge}
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary mt-1">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {hasGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {hasLink && (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} link`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/40">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-background border border-border/50 text-foreground/80"
                  >
                    {tech}
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
