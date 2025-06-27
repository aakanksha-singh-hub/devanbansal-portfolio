
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="font-playfair text-slate-800">Devan</span>{' '}
              <span className="font-inter text-orange-500">Bansal</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-all duration-300 relative group"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => window.open('https://www.linkedin.com/in/devanbansal/', '_blank')}
              className="p-2 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              title="Connect on LinkedIn"
              aria-label="Open LinkedIn profile in new tab"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            
            <a 
              href="/Devan Bansal CV.pdf" 
              download="Devan_Bansal_Resume.pdf"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-orange-500 text-white btn-hover px-6 py-2 font-semibold rounded-md transition-all duration-300"
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
              className="p-2 text-slate-700 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-slate-700 hover:text-orange-500 transition-colors font-semibold"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/devanbansal/', '_blank')}
                  className="w-full flex items-center justify-center py-3 text-slate-700 hover:text-blue-600 transition-colors font-semibold"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </button>
                
                <a 
                  href="/Devan Bansal CV.pdf" 
                  download="Devan_Bansal_Resume.pdf"
                  className="w-full inline-flex items-center justify-center bg-slate-800 hover:bg-orange-500 text-white btn-hover py-2 px-4 rounded-md transition-all duration-300"
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
