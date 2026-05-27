import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmashXCaseStudy from "./pages/SmashXCaseStudy";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proof-of-work/smashx" element={<SmashXCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ThemeToggle />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;

