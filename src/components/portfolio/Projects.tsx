import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    name: "Project One",
    url: "https://example.com",
    description: "A full-stack application built with Next.js, TypeScript, and PostgreSQL.",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    name: "Project Two",
    url: "https://example.com",
    description: "Real-time collaboration platform with WebSocket integration.",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export const Projects = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground">Built</h2>
      
      <div className="mt-6 space-y-10">
        {projects.map((project, index) => (
          <div key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 transition-all"
            >
              {project.name}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-base text-foreground mt-1">{project.description}</p>
            
            <div className="mt-4 mb-10 rounded-2xl border-[6px] border-foreground overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
