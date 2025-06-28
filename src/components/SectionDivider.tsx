import React from 'react';

const SectionDivider = () => {
  return (
    <div className="section-divider bg-gradient-to-r from-slate-100 to-slate-50 relative overflow-hidden">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="wave-animation relative z-10"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(30, 41, 59)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(251, 146, 60)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(30, 41, 59)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(251, 146, 60)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="rgb(30, 41, 59)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path 
          d="M0,60 C300,90 600,30 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" 
          fill="url(#waveGradient)"
          className="wave-layer-1"
        />
        <path 
          d="M0,80 C300,50 600,100 900,80 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z" 
          fill="url(#waveGradient2)"
          className="wave-layer-2"
        />
        <path 
          d="M0,70 C200,45 400,95 600,70 C800,45 1000,95 1200,70 L1200,120 L0,120 Z" 
          fill="rgb(251, 146, 60)"
          fillOpacity="0.08"
          className="wave-layer-3"
        />
      </svg>
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex space-x-3">
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-navy-600 animate-pulse" style={{animationDelay: '0.3s'}}></div>
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
