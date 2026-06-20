import { useState, useEffect } from "react";
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
  apiEndpoint?: string;
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: "Flowbase",
    description: "A production-ready, cross-platform (Web/PWA/Desktop) project management ecosystem. Engineered with hardware-accelerated UI transitions, a custom Markdown engine with strict XSS sanitization, and a secure cross-subdomain Google OAuth flow. Battle-tested by live teams during hackathons with 0ms perceived load times via Optimistic UI.",
    screenshot: "/public/flowbase.png",
    tags: ["React", "Node.js", "PWA", "OAuth 2.0", "MongoDB", "Service Workers", "Tailwind CSS"],
    apiEndpoint: "https://api.flowbase.mayurbadgujar.me/api/v1/public/stats",
    links: [
      { label: "Live Application", url: "https://flowbase.mayurbadgujar.me", type: "external" }
    ]
  },
  {
    name: "Distributed Flash Sale Engine",
    description: "A production-grade Node.js microservices system for handling 10,000+ concurrent users in flash sales, utilizing Kubernetes HPA and Redis atomic operations to prevent inventory overselling.",
    screenshot: "/public/project-2.webp",
    tags: ["Node.js", "Kubernetes", "Redis", "Microservices", "Docker"],
    links: [
      { label: "Watch Architecture Video", url: "https://www.linkedin.com/posts/mayurbadgujar03_systemdesign-microservices-kubernetes-ugcPost-7436425989288751105-MLqg/", type: "video" },
      { label: "Read Technical Blog", url: "https://blog.mayurbadgujar.me/surviving-flash-sale-monolith-to-kubernetes", type: "blog" }
    ]
  }
];

const LiveUserBadge = ({ apiEndpoint }: { apiEndpoint: string }) => {
  const [totalUsers, setTotalUsers] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUsers = async () => {
      try {
        const res = await fetch(apiEndpoint);
        if (res.ok) {
          const json = await res.json();
          if (json.success && typeof json.data?.totalUsers === "number") {
            if (isMounted) {
              setTotalUsers(json.data.totalUsers);
            }
          }
        }
      } catch (err) {
        // Fail silently
      }
    };

    fetchUsers();

    // Check stats every 15 seconds to keep it "real-time"
    const interval = setInterval(fetchUsers, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [apiEndpoint]);

  if (totalUsers === null) return null;

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span>{totalUsers} Active Users</span>
    </div>
  );
};

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
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
              {project.apiEndpoint && (
                <LiveUserBadge apiEndpoint={project.apiEndpoint} />
              )}
            </div>

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

