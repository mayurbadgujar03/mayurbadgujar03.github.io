import { GitHubIcon } from "./SkillIcons";

interface OtherProject {
  name: string;
}

const otherProjects: OtherProject[] = [
  { name: "Reminder app with Twilio" },
  { name: "Paytm, with a twist" },
  { name: "Auto Email Terminal based AI Agent" },
  { name: "Deploying a containerized Node.js application to ECR via CI/CD pipeline." },
  { name: "Deploying a monorepo to a VM via Docker and CI/CD.." },
  { name: "Containerizing different applications via Docker and deploying them in various methods like EC2, ASGs, ECS, ECR.." },
  { name: "Monitoring the above via tools like NewRelic, Prometheus and Grafana." },
];

export const OtherProjects = () => {
  return (
    <section className="mt-16">
      <a
        href="https://github.com/mayurbadgujar03"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-base md:text-lg text-foreground"
      >
        <span className="text-link">Check out</span>
        <span> my other Projects & Exercises here-</span>
        <GitHubIcon className="w-6 h-6 text-foreground" />
      </a>
      
      <ul className="mt-6 space-y-2">
        {otherProjects.map((project, index) => (
          <li key={index} className="text-base text-foreground">
            <span className="text-muted-foreground">-</span>
            {project.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
