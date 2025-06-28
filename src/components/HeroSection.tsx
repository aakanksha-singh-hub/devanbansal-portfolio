
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, TrendingUp, BarChart3, PieChart, DollarSign } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    console.log('Scroll to About clicked');
    const aboutElement = document.getElementById('about');
    console.log('About element found:', aboutElement);
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('About element not found');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden pt-24 lg:pt-32">
      {/* SUPER VISIBLE Animated Background Blobs */}
      {/* ✨ Stylish Animated Glow Capsules for Finance Portfolio - VERY SUBTLE VERSION */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Left Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute -top-32 -left-48 w-[700px] h-[200px] bg-gradient-to-r from-orange-200 via-amber-200 to-orange-300 opacity-5 blur-[100px] rounded-full rotate-[20deg] animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Right Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute top-[20%] -right-48 w-[600px] h-[180px] bg-gradient-to-l from-orange-100 via-yellow-200 to-orange-200 opacity-5 blur-[110px] rounded-full rotate-[-30deg] animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>

        {/* Bottom Center Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[500px] h-[150px] bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 opacity-5 blur-[95px] rounded-full rotate-[10deg] animate-pulse" style={{ animationDuration: '12s', animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Professional Financial Charts - Clean and Minimal */}
        
        {/* Top Left - Clean Bar Chart */}
        <div className="absolute top-32 left-20 hidden lg:block animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <svg className="w-24 h-16 text-orange-400" viewBox="0 0 96 64">
              <rect x="8" y="35" width="8" height="20" fill="currentColor" opacity="0.6" className="animate-pulse" style={{animationDelay: '0s'}} />
              <rect x="20" y="25" width="8" height="30" fill="currentColor" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.2s'}} />
              <rect x="32" y="30" width="8" height="25" fill="currentColor" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.4s'}} />
              <rect x="44" y="20" width="8" height="35" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.6s'}} />
              <rect x="56" y="28" width="8" height="27" fill="currentColor" opacity="0.9" className="animate-pulse" style={{animationDelay: '0.8s'}} />
              <rect x="68" y="18" width="8" height="37" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}} />
            </svg>
            <div className="text-xs text-navy-600 font-medium mt-1">Growth Mindset</div>
          </div>
        </div>

        {/* Bottom Right - Clean Line Chart */}
        <div className="absolute bottom-32 right-20 hidden lg:block animate-fade-in-up" style={{animationDelay: '2s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <svg className="w-32 h-16 text-navy-400" viewBox="0 0 128 64">
              <defs>
                <linearGradient id="cleanLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(251, 146, 60)" />
                  <stop offset="100%" stopColor="rgb(30, 41, 59)" />
                </linearGradient>
              </defs>
              <polyline 
                fill="none" 
                stroke="url(#cleanLineGradient)" 
                strokeWidth="2" 
                points="8,45 24,35 40,40 56,25 72,30 88,20 104,25 120,15"
                className="animate-draw-line"
              />
            </svg>
            <div className="text-xs text-navy-600 font-medium mt-1">Learning Journey</div>
          </div>
        </div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(251, 146, 60)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      </div>
      
      <div className="container-custom text-center relative z-20 px-4">
        <div className="hero-enter max-w-5xl mx-auto">
          {/* Clean, Professional Title */}
          <div className="relative mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-navy-900 leading-tight">
              <span className="font-playfair">Devan</span>{' '}
              <span className="text-orange-500 font-inter">Bansal</span>
            </h1>
          </div>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-navy-600 mb-6 md:mb-8 space-y-2 md:space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-semibold">Finance Student at NMIMS Mumbai</p>
            <p className="text-orange-500 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">ACCA Candidate</p>
            <p className="text-base sm:text-lg md:text-xl text-navy-500 font-medium">
              Analytical Mind • Strategic Thinker • Problem Solver
            </p>
          </div>
          
          {/* Enhanced Quote */}
          <div className="relative mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-600 italic font-medium">
              "Driven by numbers, powered by insight."
            </p>
          </div>

          {/* Clean Button Layout */}
          <div className="flex flex-col items-center justify-center gap-6 mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Primary CTA */}
            <a 
              href="/Devan Bansal CV.pdf" 
              download="Devan_Bansal_CV.pdf"
              className="inline-flex items-center justify-center cta-button text-white px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold group relative shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
              aria-label="Download resume PDF"
            >
              <Download className="mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce transition-transform duration-300" />
              Download Resume
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            
            {/* Secondary Action */}
            <button 
              onClick={scrollToAbout}
              className="border border-orange-200 text-navy-700 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold bg-gradient-to-r from-orange-50/80 via-orange-100/60 to-orange-50/80 backdrop-blur-sm shadow-lg relative z-30 rounded-full inline-flex items-center justify-center hover:font-extrabold hover:from-orange-100/90 hover:via-orange-200/70 hover:to-orange-100/90 hover:border-orange-300 transition-all duration-300"
              aria-label="Scroll to about section"
            >
              Explore My Journey
              <ChevronDown className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
