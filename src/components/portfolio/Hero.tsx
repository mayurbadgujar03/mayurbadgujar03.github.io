import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-8 pb-10">
      {/* Active Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Software Engineer Intern @ Zwiebel AI
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
        Mayur Badgujar
      </h1>

      <p className="mt-2 text-lg md:text-xl font-medium text-foreground/80">
        Backend Engineer specializing in Distributed Systems & Event-Driven Architecture.
      </p>

      <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        Currently architecting production event-driven microservices, high-throughput webhook pipelines 
        (Meta WhatsApp API), and cross-origin auth workflows at <span className="text-foreground font-semibold">Zwiebel AI</span>. 
        Experienced in designing zero-oversell concurrency systems on Kubernetes and sub-100ms real-time state synchronization.
      </p>

      {/* Quantitative Impact Metric Badges */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-border/60 py-6 max-w-3xl">
        <div>
          <div className="text-2xl font-bold font-mono text-foreground">100k+</div>
          <div className="text-xs text-muted-foreground mt-1">Concurrent Requests Tested</div>
        </div>
        <div>
          <div className="text-2xl font-bold font-mono text-foreground">1,000+</div>
          <div className="text-xs text-muted-foreground mt-1">Production Users Served</div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="text-2xl font-bold font-mono text-foreground">0ms / 0%</div>
          <div className="text-xs text-muted-foreground mt-1">Double-Bookings / Oversell</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 font-medium">
            <FileText className="w-4 h-4" />
            View Resume
          </Button>
        </a>

        <div className="text-base text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Connect on</span>
          <a
            href="https://www.linkedin.com/in/mayurbadgujar03/"
            className="text-link hover:underline underline-offset-4 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>• Reach me at</span>
          <a
            href="mailto:mayurbadgujar873@gmail.com"
            className="text-link hover:underline underline-offset-4 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </div>
      </div>
    </section>
  );
};
