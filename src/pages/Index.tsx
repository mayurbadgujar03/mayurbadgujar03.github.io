import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Career } from "@/components/portfolio/Career";
import { Projects } from "@/components/portfolio/Projects";
import { OtherProjects } from "@/components/portfolio/OtherProjects";
import { GitHubContributions } from "@/components/portfolio/GitHubContributions";
import { Footer } from "@/components/portfolio/Footer";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

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
          <div id="projects" className="opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Projects />
            <OtherProjects />
          </div>
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "500ms" }}>
            <GitHubContributions />
          </div>
        </main>
        
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <Footer />
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Index;
