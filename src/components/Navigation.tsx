
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
        ? 'bg-gradient-to-r from-orange-50/98 via-white/98 to-orange-50/98 backdrop-blur-xl shadow-2xl border-b border-orange-200/30' 
        : 'bg-gradient-to-r from-orange-50/85 via-white/85 to-orange-50/85 backdrop-blur-lg shadow-lg'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="font-playfair text-navy-800">Devan</span>{' '}
              <span className="font-inter text-orange-500 drop-shadow-sm">Bansal</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-navy-700 hover:text-orange-600 transition-all duration-300 relative group px-4 py-2 rounded-xl hover:bg-orange-100/40 hover:shadow-sm"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
              </button>
            ))}
            
            <div className="h-6 w-px bg-orange-200/60 mx-2"></div>
            
            <button
              onClick={() => window.open('https://www.linkedin.com/in/devanbansal/', '_blank')}
              className="p-3 text-navy-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 rounded-xl hover:bg-blue-50/50 hover:shadow-sm"
              title="Connect on LinkedIn"
              aria-label="Open LinkedIn profile in new tab"
            >
              <Linkedin className="h-5 w-5" />
            </button>
            
            <a 
              href="/Devan Bansal CV.pdf" 
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:from-orange-600 hover:via-orange-600 hover:to-orange-700 text-white px-6 py-2.5 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
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
              className="p-3 text-navy-700 hover:text-orange-600 transition-all duration-300 rounded-xl hover:bg-orange-100/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-orange-200/40 bg-gradient-to-r from-orange-50/98 via-white/98 to-orange-50/98 backdrop-blur-xl rounded-b-2xl shadow-xl mx-4 mb-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-navy-700 hover:text-orange-600 hover:bg-orange-100/50 transition-all duration-300 font-semibold rounded-xl"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-3 border-t border-orange-200/40 space-y-2 mt-3">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/devanbansal/', '_blank')}
                  className="w-full flex items-center justify-center py-3 px-4 text-navy-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 font-semibold rounded-xl"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </button>
                
                <a 
                  href="/Devan Bansal CV.pdf" 
                  download="Devan_Bansal_CV.pdf"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
