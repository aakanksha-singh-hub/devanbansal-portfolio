
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, BarChart3, Calculator, Presentation, FileSpreadsheet, TrendingUp } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Microsoft Excel", icon: FileSpreadsheet, category: "Analysis" },
    { name: "Power BI", icon: BarChart3, category: "Visualization" },
    { name: "Financial Modeling", icon: Calculator, category: "Finance" },
    { name: "Data Analysis", icon: TrendingUp, category: "Analysis" },
    { name: "PowerPoint", icon: Presentation, category: "Presentation" },
    { name: "CAPM & Valuation", icon: Monitor, category: "Finance" }
  ];

  const certifications = [
    {
      name: "ACCA",
      status: "In Progress",
      provider: "Association of Chartered Certified Accountants",
      level: "Professional"
    },
    {
      name: "NISM",
      status: "Certified",
      provider: "National Institute of Securities Markets",
      level: "Professional"
    },
    {
      name: "CA Foundation",
      status: "Completed",
      provider: "Institute of Chartered Accountants of India",
      level: "Foundation"
    }
  ];

  const softSkills = [
    "Leadership", "Team Management", "Communication", "Problem Solving",
    "Critical Thinking", "Project Management", "Public Speaking", "Analytical Thinking"
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl mx-auto">
            Technical expertise and professional certifications driving excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <Card className="group h-full border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in-up bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 md:mb-6 group-hover:text-navy-800 transition-colors">
                  Technical Expertise
                </h3>
                
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  {technicalSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md hover:bg-white hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-orange-200">
                        <div className="p-2 md:p-3 bg-navy-100 rounded-lg hover:bg-navy-200 transition-colors duration-300 flex-shrink-0">
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-navy-500 hover:text-navy-600 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-navy-900 hover:text-navy-800 transition-colors text-sm md:text-base truncate">
                            {skill.name}
                          </div>
                          <Badge variant="secondary" className="text-xs mt-1 bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors">
                            {skill.category}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 md:mt-8">
                  <h4 className="text-base md:text-lg font-semibold text-navy-900 mb-3 md:mb-4 group-hover:text-navy-800 transition-colors">
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge 
                        key={index}
                        className="bg-gray-200 text-navy-700 hover:bg-orange-200 hover:text-orange-800 hover:scale-105 transition-all duration-300 cursor-default text-xs md:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications */}
          <div>
            <Card className="group h-full border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in-up bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 md:mb-6 group-hover:text-navy-800 transition-colors">
                  Certifications
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-orange-400 pl-3 md:pl-4 py-2 md:py-3 bg-gray-50 rounded-r-lg hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-navy-900 hover:text-navy-800 transition-colors text-sm md:text-base">
                          {cert.name}
                        </h4>
                        <Badge 
                          className={`text-xs font-semibold text-white transition-all duration-300 ${
                            cert.status === 'Certified' || cert.status === 'Completed'
                              ? 'bg-green-500 hover:bg-green-600 hover:scale-105'
                              : 'bg-navy-500 hover:bg-navy-600 hover:scale-105'
                          }`}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-xs md:text-sm text-navy-600 mb-1 hover:text-navy-700 transition-colors">
                        {cert.provider}
                      </p>
                      <Badge variant="outline" className="text-xs border-orange-300 text-orange-700 hover:bg-orange-50 transition-colors">
                        {cert.level}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 md:mt-8 p-3 md:p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-navy-900 mb-2 text-sm md:text-base">
                    Currently Pursuing
                  </h4>
                  <p className="text-xs md:text-sm text-navy-600">
                    Working towards CFA Level 1 certification and advancing in ACCA qualification pathway.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
