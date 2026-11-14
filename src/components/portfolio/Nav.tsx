import { FileText } from "lucide-react";

export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          MB.
        </a>

        {/* Allow links to wrap or shrink on mobile */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <div className="hidden sm:flex items-center gap-6">
            <a href="#career" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#proof-of-work" className="text-muted-foreground hover:text-foreground transition-colors">
              Proof of Work
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Architecture
            </a>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">View</span> Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};
