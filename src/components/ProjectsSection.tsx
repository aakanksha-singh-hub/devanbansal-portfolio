
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
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 md:mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl mx-auto">
            Applied finance knowledge through comprehensive analysis and real-world case studies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="project-card group border-gray-300 hover:border-orange-300 transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20"
              >
                <div className="project-card-content">
                  <CardHeader className="pb-3 md:pb-4">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 bg-navy-100 group-hover:bg-orange-100 rounded-lg transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-navy-600 group-hover:text-orange-600 transition-colors" />
                      </div>
                    </div>
                    <CardTitle className="text-lg md:text-xl text-navy-900 leading-tight">
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
