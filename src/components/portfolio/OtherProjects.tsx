import { Github } from "lucide-react";

export const OtherProjects = () => {
  return (
    <a
      href="https://github.com/mayurbadgujar03"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-12"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 p-4 sm:p-6 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors text-center sm:text-left">
        <Github className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
        <p className="text-sm sm:text-base font-medium text-foreground/90">
          <span className="text-primary font-bold">Check out</span> my other Projects, exercises, and microservices on GitHub
        </p>
      </div>
    </a>
  );
};
