import { GitHubIcon } from "./SkillIcons";

export const OtherProjects = () => {
  return (
    <section className="mt-16">
      <a
        href="https://github.com/mayurbadgujar03"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-base md:text-lg text-foreground group"
      >
        <span className="text-link group-hover:underline underline-offset-4">Check out</span>
        <span> my other Projects, exercises, and microservices on GitHub</span>
        <GitHubIcon className="w-6 h-6 text-foreground transition-transform group-hover:scale-110" />
      </a>
    </section>
  );
};

