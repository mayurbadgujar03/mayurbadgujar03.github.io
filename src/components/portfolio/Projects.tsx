import { ArrowUpRight, Video, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLink {
  label: string;
  url: string;
  type: "external" | "video" | "blog";
}

interface Project {
  name: string;
  description: string;
  screenshot: string;
  tags: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: "Flowbase",
    description: "A full-stack project management and team collaboration platform with real-time task tracking, Kanban boards, team member management, rich documentation, and role-based access control. Features a modern React frontend with Shadcn/UI components and a robust Node.js + Express backend with MongoDB.",
    screenshot: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "TanStack Query", "Tailwind CSS", "TypeScript", "JWT"],
    links: [
      { label: "Live Application", url: "https://flowbaseapp.vercel.app/", type: "external" }
    ]
  },
  {
    name: "Distributed Flash Sale Engine",
    description: "A production-grade Node.js microservices system for handling 10,000+ concurrent users in flash sales, utilizing Kubernetes HPA and Redis atomic operations to prevent inventory overselling.",
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Node.js", "Kubernetes", "Redis", "Microservices", "Docker"],
    links: [
      { label: "Watch Architecture Video", url: "https://www.linkedin.com/posts/mayurbadgujar03_systemdesign-microservices-kubernetes-ugcPost-7436425989288751105-MLqg/", type: "video" },
      { label: "Read Technical Blog", url: "https://blog.mayurbadgujar.me/surviving-flash-sale-monolith-to-kubernetes", type: "blog" }
    ]
  }
];

export const Projects = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-3.5 h-3.5" />;
      case "blog":
        return <FileText className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground">Featured Projects</h2>
      
      <div className="mt-6 space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-border/50 pb-8 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
            
            <p className="text-base text-muted-foreground mt-2 leading-relaxed">{project.description}</p>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs font-medium">
                    {getIcon(link.type)}
                    {link.label}
                  </Button>
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-sm">
              <img
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

