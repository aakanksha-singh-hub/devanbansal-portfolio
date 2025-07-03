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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-fit max-w-6xl ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border border-gray-800/50"
          : "bg-black/80 backdrop-blur-lg border border-gray-800/30"
      } rounded-2xl shadow-2xl shadow-purple-500/10`}
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/db.png"
              alt="DB Logo"
              className="h-8 w-8 object-contain filter brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 px-4 py-2 rounded-lg border border-transparent hover:border-purple-500/30"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center">
            <a
              href="/Devan Bansal CV.pdf"
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 font-medium rounded-lg transition-all duration-200 text-sm border border-purple-500/30 hover:border-purple-400"
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
              className="p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-purple-600/20 border border-transparent hover:border-purple-500/30"
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
          <div className="lg:hidden py-4 border-t border-gray-800/50 bg-black/95 backdrop-blur-xl rounded-b-2xl">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 font-medium rounded-lg border border-transparent hover:border-purple-500/30"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-gray-800/50 space-y-2 mt-3">
                <a
                  href="/Devan Bansal CV.pdf"
                  download="Devan_Bansal_CV.pdf"
                  className="w-full inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium border border-purple-500/30"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
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
