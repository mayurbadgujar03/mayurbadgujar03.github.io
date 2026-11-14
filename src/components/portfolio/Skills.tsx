import { Server, Cloud, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Distributed Systems",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: [
      "Node.js",
      "Express",
      "Event-Driven Architecture",
      "Redis (Pub/Sub & Caching)",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "WebSockets",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: [
      "Kubernetes (HPA)",
      "Docker",
      "AWS",
      "k6 Load Testing",
      "Nginx",
      "CI/CD Pipelines",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Frontend & Interfaces",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="mt-20 mb-20">
      <div className="border-b border-border pb-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">Technical Arsenal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <div className="flex items-center gap-2">
              {category.icon}
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono rounded-md bg-muted/50 border border-border/50 text-foreground/80 hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
