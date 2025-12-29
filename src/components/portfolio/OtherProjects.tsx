import { GitHubIcon } from "./SkillIcons";

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
        <li className="text-base text-foreground flex flex-wrap items-center gap-2">
          Distributed Flash Sale Engine: A production-grade Node.js microservices system for handling 10,000+ concurrent users in flash sales, with atomic stock, order, and auth services. 
          <a
            href="https://github.com/mayurbadgujar03/Distributed-Flash-Sale-Engine"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded font-medium transition-colors duration-200 bg-foreground/5 text-primary hover:bg-primary/90 hover:text-primary-foreground border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
            style={{
              color: 'var(--primary)',
              background: 'rgba(var(--foreground-rgb),0.05)',
            }}
          >
            code
          </a>
        </li>
      </ul>
    </section>
  );
};
