
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Target, TrendingUp, Award, Linkedin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* ✨ Very Subtle Background Elements for Visual Continuity */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft accent capsules - very subtle */}
        <div className="absolute top-20 right-10 w-[300px] h-[80px] bg-gradient-to-r from-orange-200 to-amber-200 opacity-5 blur-[90px] rounded-full rotate-[25deg] animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Bottom left accent */}
        <div className="absolute bottom-20 left-10 w-[250px] h-[60px] bg-gradient-to-l from-orange-100 to-yellow-100 opacity-5 blur-[80px] rounded-full rotate-[-15deg] animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
        
        {/* Professional Growth Chart - Top Right */}
        <div className="absolute top-20 right-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-200/50">
            <svg className="w-20 h-14 text-orange-400" viewBox="0 0 80 56">
              <defs>
                <linearGradient id="aboutLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(251, 146, 60)" />
                  <stop offset="100%" stopColor="rgb(245, 158, 11)" />
                </linearGradient>
              </defs>
              <polyline 
                fill="none" 
                stroke="url(#aboutLineGradient)" 
                strokeWidth="2.5" 
                points="8,42 20,32 32,38 44,22 56,28 68,18 76,14"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 md:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full animate-pulse"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content with Staggered Animation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="prose prose-lg text-navy-600 mb-6 md:mb-10">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 hover:text-navy-700 transition-colors duration-300">
                I'm a 2nd-year Accounting and Finance student at NMIMS Mumbai with a CGPA of 
                <span className="font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300">excellent academic standing</span>, on track for 
                <span className="font-bold text-navy-800 hover:text-navy-900 transition-colors duration-300"> ACCA and CFA certifications</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed hover:text-navy-700 transition-colors duration-300">
                I thrive on financial analysis, corporate finance, and strategic decision-making, 
                having earned top ranks in national and international finance olympiads. My passion 
                lies in transforming complex financial data into actionable insights that drive 
                business growth.
              </p>
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold btn-hover w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
              <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
              View Complete Resume
            </Button>
          </div>
          
          {/* Animated Cards */}
          <div className="grid gap-4 md:gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20 transform hover:scale-102 hover:-translate-y-1">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-navy-100 group-hover:bg-orange-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-navy-700 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800 group-hover:text-navy-900 transition-colors duration-300">Strategic Focus</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed group-hover:text-navy-700 transition-colors duration-300">
                  Specialized in financial analysis, WACC calculations, and investment valuation with 
                  hands-on experience in corporate finance projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20 transform hover:scale-102 hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-orange-100 group-hover:bg-navy-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-orange-600 group-hover:text-navy-700 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800 group-hover:text-navy-900 transition-colors duration-300">Academic Excellence</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed group-hover:text-navy-700 transition-colors duration-300">
                  Maintaining top academic performance while pursuing professional certifications 
                  in ACCA, NISM, and CA Foundation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20 transform hover:scale-102 hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-navy-100 group-hover:bg-orange-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-navy-700 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800 group-hover:text-navy-900 transition-colors duration-300">Recognition</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed group-hover:text-navy-700 transition-colors duration-300">
                  Achieved Zonal Rank 2 in SOF Commerce Olympiad and International Rank 4 
                  in BSE Finance Olympiad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;