import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Show animation after a slight delay to ensure smooth animation entry
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between bg-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Enhanced Grid Pattern with subtle movement */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.05]"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${
            mousePosition.y * -20
          }px)`,
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      ></div>

      {/* Subtle Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full border border-teal opacity-10"
          style={{
            top: "15%",
            left: "8%",
            transform: `translate(${mousePosition.x * 30}px, ${
              mousePosition.y * 30
            }px)`,
            transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>

        {/* Square */}
        <div
          className="absolute w-[200px] h-[200px] border border-gray-800 opacity-10 rotate-45"
          style={{
            bottom: "12%",
            right: "8%",
            transform: `translate(${mousePosition.x * -40}px, ${
              mousePosition.y * -40
            }px)`,
            transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>

        {/* Horizontal Line */}
        <div
          className="absolute h-[1px] w-[150px] bg-teal opacity-20"
          style={{
            top: "35%",
            right: "15%",
            transform: `scaleX(${0.5 + mousePosition.y * 0.5}) rotate(${
              mousePosition.x * 5
            }deg)`,
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>

        {/* Vertical Line */}
        <div
          className="absolute w-[1px] h-[100px] bg-gray-700 opacity-20"
          style={{
            bottom: "25%",
            left: "20%",
            transform: `scaleY(${0.5 + mousePosition.x * 0.5}) rotate(${
              mousePosition.y * 5
            }deg)`,
            transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        ></div>
      </div>

      {/* Main Content - Clean and Minimal with Enhanced Animations */}
      <div className="relative z-20 max-w-5xl mx-auto px-8 lg:px-12 mt-40 md:mt-44 lg:mt-24 pt-16">
        <div className="space-y-10">
          {/* Name with character-by-character animation */}
          <div
            className={`transition-all duration-1000 text-center ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter relative">
              <div className="text-white inline-block relative">
                {"Devan".split("").map((char, index) => (
                  <span
                    key={`devan-${index}`}
                    className="inline-block font-geist-mono"
                    style={{
                      animationDelay: `${0.05 * index}s`,
                      animation: "characterEntrance 0.6s forwards",
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    {char}
                  </span>
                ))}
                <span
                  className="inline-block"
                  style={{ width: "0.25em" }}
                ></span>
                {"Bansal".split("").map((char, index) => (
                  <span
                    key={`bansal-${index}`}
                    className="inline-block font-playfair italic"
                    style={{
                      animationDelay: `${0.05 * (index + 6)}s`,
                      animation: "characterEntrance 0.6s forwards",
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </h1>
          </div>

          {/* Title & Description with enhanced fade-in animations */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 text-center ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-1 flex flex-col items-center">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-geist-mono tracking-tight">
                Finance Student / ACCA Candidate
              </p>
              <div
                className="h-[2px] bg-teal transition-all duration-1000"
                style={{
                  width: isLoaded ? "12rem" : "2rem",
                  transition: "width 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
                }}
              ></div>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Analytical mind with a passion for financial strategy, data
              analysis, and business insights. Solving complex problems through
              numbers and innovative thinking.
            </p>
          </div>

          {/* CTA Buttons with hover effects */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center w-full gap-4 pt-8 transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Primary CTA */}
            <a
              href="/Devan Bansal CV.pdf"
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center rounded-lg justify-center bg-teal hover:bg-teal-600 text-black px-8 py-3 text-base font-medium transition-all duration-300 border border-teal/10 group relative overflow-hidden"
              aria-label="Download resume PDF"
            >
              <span className="relative flex items-center text-white">
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                Resume
              </span>
            </a>

            {/* Secondary Action */}
            <button
              onClick={scrollToAbout}
              className="border rounded-lg border-gray-800 text-gray-300 hover:text-white px-8 py-3 text-base font-medium transition-all duration-300 inline-flex items-center hover:border-gray-700 group relative overflow-hidden"
              aria-label="Scroll to about section"
            >
              <span className="relative flex items-center">
                Learn more
                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[2px]" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Banner at bottom */}
      <div
        className={`w-full border-t border-b border-teal/40 relative z-20 mt-auto mb-12 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="py-4 md:py-5 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center mx-4 font-geist-mono text-base md:text-lg"
              >
                <span className="mx-4 text-teal uppercase tracking-wider font-medium">
                  Analytical Mind
                </span>
                <span className="text-white/70">•</span>
                <span className="mx-4 text-teal uppercase tracking-wider font-medium">
                  Strategic Thinker
                </span>
                <span className="text-white/70">•</span>
                <span className="mx-4 text-teal uppercase tracking-wider font-medium">
                  Problem Solver
                </span>
                <span className="text-white/70">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
