import { GitHubIcon, LinkedInIcon } from "./SkillIcons";

export const Footer = () => {
  return (
    <footer className="mt-24 pt-8 border-t border-border">
      <div className="flex items-center justify-start gap-6">
        <a
          href="https://github.com/mayurbadgujar03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all flex items-center gap-2"
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mayurbadgujar03/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all flex items-center gap-2"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mayur. All rights reserved.
      </p>
    </footer>
  );
};
