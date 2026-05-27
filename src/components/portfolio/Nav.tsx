import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center gap-6">
        <a
          href="#proof-of-work"
          className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
        >
          Proof of Work
        </a>
        <a
          href="#projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
        >
          Projects
        </a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="sm" className="flex items-center gap-1.5 font-medium">
          <FileText className="w-3.5 h-3.5" />
          View Resume
        </Button>
      </a>
    </nav>
  );
};

