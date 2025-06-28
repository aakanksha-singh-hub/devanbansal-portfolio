
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, Calculator } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "WACC Analysis for Arvind Ltd.",
      description: "Comprehensive Weighted Average Cost of Capital analysis for Arvind Limited, including detailed cost of equity and debt calculations using CAPM model and market data analysis.",
      skills: ["Excel", "CAPM", "Financial Modeling", "Data Analysis"],
      icon: Calculator,
      highlights: ["Calculated optimal capital structure", "Risk assessment using beta analysis", "Comparative industry analysis"]
    },
    {
      title: "Bonus Issue Analysis for Varun Beverages Ltd.",
      description: "In-depth analysis of Varun Beverages' bonus issue impact on stock price, market capitalization, and shareholder value, with detailed pre and post-issue financial metrics.",
      skills: ["Stock Analysis", "Market Research", "Excel", "Financial Ratios"],
      icon: TrendingUp,
      highlights: ["Market impact assessment", "Shareholder value analysis", "Price adjustment calculations"]
    },
    {
      title: "Corporate Finance Case Study",
      description: "Comprehensive case study analyzing merger and acquisition scenarios, including valuation methods, synergy analysis, and financial modeling for strategic decision making.",
      skills: ["M&A Analysis", "DCF Modeling", "Valuation", "Strategic Finance"],
      icon: BarChart3,
      highlights: ["Multiple valuation approaches", "Synergy quantification", "Risk-adjusted returns"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* ✨ Very Subtle Background Elements for Visual Continuity */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft accent capsule - very subtle for gray background */}
        <div className="absolute top-10 left-20 w-[280px] h-[70px] bg-gradient-to-r from-orange-200 to-amber-200 opacity-6 blur-[85px] rounded-full rotate-[20deg] animate-pulse" style={{ animationDuration: '9s' }}></div>
        
        {/* Center right accent */}
        <div className="absolute top-1/2 right-20 w-[200px] h-[50px] bg-gradient-to-l from-orange-100 to-yellow-100 opacity-5 blur-[75px] rounded-full rotate-[-25deg] animate-pulse" style={{ animationDuration: '11s', animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 md:mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6 md:mb-8 animate-pulse"></div>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl mx-auto">
            Applied finance knowledge through comprehensive analysis and real-world case studies
          </p>
        </div>
        
        {/* Animated Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="project-card group border-gray-300 hover:border-orange-300 transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-card-content">
                  <CardHeader className="pb-3 md:pb-4">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 bg-navy-100 group-hover:bg-orange-100 rounded-lg transition-all duration-300 flex-shrink-0 group-hover:rotate-6 group-hover:scale-110">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-navy-600 group-hover:text-orange-600 transition-colors duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-lg md:text-xl text-navy-900 leading-tight group-hover:text-navy-900 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 md:space-y-4">
                    <p className="text-navy-600 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-navy-700">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-xs md:text-sm text-navy-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          className="bg-navy-100 text-navy-700 hover:bg-orange-100 hover:text-orange-700 transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
