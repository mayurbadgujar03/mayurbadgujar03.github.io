import { useEffect } from "react";
import { ArrowLeft, Server, Cpu, Database, Clock, CreditCard, ShieldAlert, TrendingUp, ExternalLink, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Nav } from "@/components/portfolio/Nav";

export default function SmashXCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground antialiased">
      <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-24">
        {/* Navigation Bar */}
        <div className="mb-12 border-b border-border pb-6">
          <Nav />
        </div>

        {/* Back Button */}
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Overview
          </Link>
        </div>

        {/* Title Block */}
        <header className="border-b border-border pb-8 mb-12">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="px-3 py-0.5 text-xs font-semibold bg-primary/10 text-primary border border-primary/25">
              Production Proof of Work
            </Badge>
            <Badge variant="outline" className="px-3 py-0.5 text-xs font-medium">
              B2B SaaS
            </Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans">
            B2B Multi-Tenant Booking SaaS
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-[1.6]">
            Architecting a high-concurrency, dynamic sports venue booking scheduler with direct zero-commission transaction processing.
          </p>
        </header>


        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Sidebar (Executive Summary & Impact) - Sticky */}
          <aside className="lg:col-span-5 lg:sticky lg:top-8 space-y-6">
            {/* Metadata & Executive Summary Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Project Specs
                </h3>

                {/* Live Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  55+ Daily Active Users
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="block text-xs text-muted-foreground uppercase font-medium">Role</span>
                  <span className="font-semibold text-foreground text-base">Lead Software Engineer / Architect</span>
                </div>
                <hr className="border-border" />
                <div>
                  <span className="block text-xs text-muted-foreground uppercase font-medium">Domain</span>
                  <span className="font-semibold text-foreground text-base">B2B SaaS (Sports Venue Management & Booking)</span>
                </div>
                <hr className="border-border" />
                <div>
                  <span className="block text-xs text-muted-foreground uppercase font-medium">Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Node.js", "React", "Render", "Vercel"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-foreground/5 text-foreground/80 border border-foreground/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  📌 Executive Summary
                </h3>
                <p className="text-sm leading-[1.6] text-muted-foreground">
                  Architected, developed, and deployed a production-grade, white-labeled B2B booking engine. I expanded the initial scope from a simple custom app into a multi-tenant SaaS core, enabling rapid scaling across future clients. The project required bypassing strict iOS cross-origin protocols, solving complex temporal business logic, and engineering a zero-commission payment architecture.
                </p>
              </div>
            </div>

            {/* Measurable Impact Card */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                📊 Measurable Impact
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 leading-[1.4]">
                    <strong>Revenue Optimization:</strong> Retained 100% of booking revenue for the client by bypassing the 2% gateway tax.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 leading-[1.4]">
                    <strong>Operational Efficiency:</strong> Eliminated manual, error-prone WhatsApp booking management, reducing admin workload to near zero.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 leading-[1.4]">
                    <strong>System Reliability:</strong> Solved cross-origin iOS tracking limitations, ensuring seamless booking experiences across all devices.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 leading-[1.4]">
                    <strong>Scalable Architecture:</strong> Abstracted the core logic into a white-label engine, meaning the exact same repository can be deployed for a new client instantly.
                  </span>
                </li>
              </ul>
            </div>

            {/* Project Links Section */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                🔗 Project Links
              </h3>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://smashx.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-accent/80">
                    <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                    Live Application
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/posts/mayurbadgujar03_softwareengineering-backenddeveloper-systemdesign-ugcPost-7463487500045471745-k10y/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-accent/80">
                    <Video className="w-4 h-4 text-primary shrink-0" />
                    Video Architecture Demo
                  </Button>
                </a>

                <a
                  href="https://blog.mayurbadgujar.me/b2b-saas-architecture-production-reality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full justify-start gap-2.5 text-sm font-medium hover:bg-accent/80">
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    Technical Deep-Dive Blog
                  </Button>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Deep-Dive Body */}
          <main className="lg:col-span-7 space-y-12 text-foreground/90">

            {/* Phase 1 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Phase 1: Infrastructure & Security (The iOS ITP Fix)
              </h2>
              <p className="text-base leading-[1.6] text-foreground/80">
                The system utilized a decoupled architecture, with the frontend hosted on Vercel (CDN delivery) and the Node.js API on Render.
              </p>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-base text-foreground">Cross-Origin Cookie Blockade</h4>
                </div>
                <div className="space-y-3.5 text-sm">
                  <p className="text-muted-foreground leading-[1.6]">
                    <strong className="text-foreground block mb-1">The Challenge:</strong>
                    Apple’s strict iOS ITP (Intelligent Tracking Prevention) protocol blocked cross-origin API authentication requests between Vercel and Render, breaking the app on iPhones.
                  </p>
                  <p className="text-muted-foreground leading-[1.6]">
                    <strong className="text-foreground block mb-1">The Solution:</strong>
                    Engineered a custom proxy authentication layer and mapped custom subdomains (<code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded border border-foreground/10">app.domain.com</code> and <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded border border-foreground/10">api.domain.com</code>). This established a trusted first-party context, bypassed cross-site restrictions, and achieved 100% iOS compatibility.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border" />

            {/* Phase 2 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Phase 2: Core Engineering & Business Logic
              </h2>

              {/* Technical Challenges (UI Cards / Callouts) */}
              <div className="space-y-6 mt-4">

                {/* Challenge 1: The Midnight Paradox */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5 shrink-0" />
                    <h3 className="font-bold text-lg text-foreground">
                      1. The "Midnight Paradox" (Chronological Array Sorting)
                    </h3>
                  </div>
                  <div className="space-y-3.5 text-sm">
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Challenge:</strong>
                      Standard server logic transitions to the next day at midnight. However, Indian business logic considers a shift ending at 1:00 AM on Monday as part of Sunday night's operations.
                    </p>
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Solution:</strong>
                      Engineered a custom chronological sorting interceptor. The API dynamically offsets the UNIX timestamp by the business's custom shift hours before rendering the admin dashboard, aligning the UI data with human business operations rather than rigid server time.
                    </p>
                  </div>
                </div>

                {/* Challenge 2: High-Stakes Discount Engine */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Database className="w-5 h-5 shrink-0" />
                    <h3 className="font-bold text-lg text-foreground">
                      2. High-Stakes Discount & Promo Engine
                    </h3>
                  </div>
                  <div className="space-y-3.5 text-sm">
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Challenge:</strong>
                      Built a dynamic alphanumeric validation engine for promotional codes. Bulk-hour and percentage math had to be highly precise to prevent float-point decimal bleeding and protect live revenue.
                    </p>
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Solution:</strong>
                      Engineered three independent, automated access layers for the admin:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-medium mt-1">
                      <div className="px-3 py-2 bg-foreground/5 rounded-md border border-foreground/10 text-center">
                        <span className="font-semibold block text-foreground">Time-Bound</span>
                        <span className="text-muted-foreground text-[10px] mt-0.5 block">Valid during specific windows</span>
                      </div>
                      <div className="px-3 py-2 bg-foreground/5 rounded-md border border-foreground/10 text-center">
                        <span className="font-semibold block text-foreground">Usage-Bound</span>
                        <span className="text-muted-foreground text-[10px] mt-0.5 block">Expiring after X users</span>
                      </div>
                      <div className="px-3 py-2 bg-foreground/5 rounded-md border border-foreground/10 text-center">
                        <span className="font-semibold block text-foreground">User-Bound</span>
                        <span className="text-muted-foreground text-[10px] mt-0.5 block">Restricted to first-time users</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge 3: Zero-Commission Payment Pipeline */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <CreditCard className="w-5 h-5 shrink-0" />
                    <h3 className="font-bold text-lg text-foreground">
                      3. Zero-Commission Payment Pipeline (Direct UPI)
                    </h3>
                  </div>
                  <div className="space-y-3.5 text-sm">
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Challenge:</strong>
                      Standard payment gateways charge a 2% commission, degrading profit margins.
                    </p>
                    <p className="text-muted-foreground leading-[1.6]">
                      <strong className="text-foreground block mb-1">The Solution:</strong>
                      Engineered a Direct-UPI ecosystem. The backend generates dynamic UPI intent links based on the cart subtotal, bypassing traditional gateways entirely and allowing the client to retain 100% of their revenue.
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
