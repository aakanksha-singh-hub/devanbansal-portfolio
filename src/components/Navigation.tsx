import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-2 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[95%] sm:w-[90%] md:w-fit max-w-6xl ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border border-teal/20"
          : "bg-black/80 backdrop-blur-lg border border-teal/10"
      } rounded-lg sm:rounded-2xl shadow-2xl shadow-teal/20`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:justify-center sm:py-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="flex items-baseline cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="font-geist-mono text-xl text-white">Devan</span>
              <span className="font-playfair italic text-xl text-white ml-0.5">
                Bansal
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-300 hover:text-teal transition-all duration-200 px-4 py-2 rounded-lg border border-transparent"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/devanbansal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-600 transition-all duration-200 px-4 py-2"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center">
            <a
              href="/Devan Bansal CV.pdf"
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white px-5 py-2.5 font-medium rounded-lg transition-all duration-200 text-sm border border-teal/30 hover:border-teal-400"
              aria-label="Download resume PDF"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-teal/20 border border-transparent hover:border-teal/30"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-teal/20 bg-black/95 backdrop-blur-xl rounded-b-2xl w-full">
            <div className="space-y-2 px-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-teal/20 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-teal/30"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-teal/20 mt-3">
                <a
                  href="https://www.linkedin.com/in/devanbansal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-teal/20 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-teal/30"
                >
                  <div className="flex items-center">
                    <Linkedin className="h-4 w-4 mr-2 text-teal" />
                    LinkedIn
                  </div>
                </a>
                <a
                  href="/Devan Bansal CV.pdf"
                  download="Devan_Bansal_CV.pdf"
                  className="mt-2 w-full inline-flex items-center justify-center bg-teal hover:bg-teal-600 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium border border-teal/30"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
