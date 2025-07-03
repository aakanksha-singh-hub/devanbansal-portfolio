import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Main Content - Clean and Minimal */}
      <div className="relative z-20 max-w-5xl mx-auto px-8 lg:px-12">
        <div className="space-y-10">
          {/* Name */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-white font-geist-mono">Devan Bansal</span>
            </h1>
          </div>

          {/* Title & Description */}
          <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-1">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-geist-mono tracking-tight">
                Finance Student / ACCA Candidate
              </p>
              <div className="w-12 h-[1px] bg-gray-500"></div>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Analytical mind with a passion for financial strategy, data
              analysis, and business insights. Solving complex problems through
              numbers and innovative thinking.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Primary CTA */}
            <a
              href="/Devan Bansal CV.pdf"
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black px-6 py-3 text-base font-medium transition-colors duration-200 border border-white/10"
              aria-label="Download resume PDF"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>

            {/* Secondary Action */}
            <button
              onClick={scrollToAbout}
              className="border border-gray-800 text-gray-300 hover:text-white px-6 py-3 text-base font-medium transition-colors duration-200 inline-flex items-center hover:border-gray-700"
              aria-label="Scroll to about section"
            >
              Learn more
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
