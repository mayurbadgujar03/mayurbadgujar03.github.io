import { SkillPill } from "./SkillPill";
import {
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  NodeIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  SupabaseIcon,
  PrismaIcon,
  GitHubIcon,
  AWSIcon,
  DockerIcon,
  KubernetesIcon,
  FigmaIcon,
  VercelIcon,
  ExpressIcon,
  TurborepoIcon,
  MotionIcon,
  ShadcnIcon,
  PrometheusIcon,
  GrafanaIcon,
  NewRelicIcon,
} from "./SkillIcons";

const frontendSkills = [
  { name: "NextJS", icon: <NextJSIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "Shadcn", icon: <ShadcnIcon /> },
  { name: "Typescript", icon: <TypeScriptIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
];

const backendSkills = [
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
  { name: "Prisma", icon: <PrismaIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Github", icon: <GitHubIcon /> },
];

const devopsSkills = [
  { name: "AWS", icon: <AWSIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Kubernetes", icon: <KubernetesIcon /> },
  { name: "Prometheus", icon: <PrometheusIcon /> },
  { name: "Grafana", icon: <GrafanaIcon /> },
];

export const Skills = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
      
      <div className="mt-6">
        <p className="text-base text-foreground mb-4">Web-development:</p>
        <div className="flex flex-wrap">
          {frontendSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap">
          {backendSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-base text-foreground mb-4">Devops:</p>
        <div className="flex flex-wrap">
          {devopsSkills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
