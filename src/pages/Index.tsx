import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Career } from "@/components/portfolio/Career";
import { Projects } from "@/components/portfolio/Projects";
import { OtherProjects } from "@/components/portfolio/OtherProjects";
import { GitHubContributions } from "@/components/portfolio/GitHubContributions";
import { Footer } from "@/components/portfolio/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[750px] mx-auto px-6 py-24">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0ms" }}>
          <Nav />
        </div>
        
        <main className="mt-16">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <Hero />
          </div>
          <div id="skills" className="opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Skills />
          </div>
          <div id="career" className="opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
            {/* <Career /> */}
          </div>
          
          <div id="proof-of-work" className="opacity-0 animate-fade-up mt-16" style={{ animationDelay: "350ms" }}>
            <section>
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Technical Consulting & Proof of Work
              </h2>
              
              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/[0.08] transition-all p-6 relative overflow-hidden group">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    Production Proof of Work
                  </Badge>
                  <Badge variant="outline" className="px-2.5 py-0.5 text-xs font-medium border-muted-foreground/30 text-muted-foreground">
                    100% Client Revenue Retained
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  SmashX Sports Booking Engine
                </h3>
                <p className="text-sm font-mono text-muted-foreground mt-1">
                  B2B SaaS Architecture & Data Migration
                </p>
                
                <p className="text-base text-foreground mt-3 leading-relaxed">
                  Engineered a zero-commission Direct-UPI pipeline and automated Offline-to-Online retention.
                </p>
                
                <div className="mt-5 flex items-center justify-between flex-wrap gap-4 border-t border-border/60 pt-4">
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted-foreground">
                    <span>Node.js</span> • <span>React</span> • <span>Redis</span> • <span>MongoDB</span>
                  </div>
                  <Link to="/proof-of-work/smashx">
                    <Button variant="default" size="sm" className="flex items-center gap-1.5 group/btn">
                      Read Case Study
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div id="projects" className="opacity-0 animate-fade-up mt-16" style={{ animationDelay: "400ms" }}>
            <Projects />
            <OtherProjects />
          </div>
          
          <div className="opacity-0 animate-fade-up mt-16" style={{ animationDelay: "500ms" }}>
            <GitHubContributions />
          </div>
        </main>
        
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
