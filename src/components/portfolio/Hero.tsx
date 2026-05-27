import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        Mayur
      </h1>
      <p className="mt-2 text-base md:text-lg font-medium text-muted-foreground">
        Backend Developer | APIs, System Design, and Scalable Platform Engineering
      </p>
      
      <p className="mt-6 text-base md:text-lg text-foreground leading-[1.6]">
        Web developer and Devops engineer with a strong hold on backend, deployments & scaling.
      </p>
      
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

