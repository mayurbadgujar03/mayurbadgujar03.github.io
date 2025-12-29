import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  url: string;
  description: string;
  screenshot: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Flowbase",
    url: "https://flowbaseapp.vercel.app/",
    description: "A full-stack project management and team collaboration platform with real-time task tracking, Kanban boards, team member management, rich documentation, and role-based access control. Features a modern React frontend with Shadcn/UI components and a robust Node.js + Express backend with MongoDB.",
    screenshot: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "TanStack Query", "Tailwind CSS", "TypeScript", "JWT"],
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
            
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
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
