
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, DollarSign, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "FP&A Intern",
      organization: "CSB Bank Limited",
      period: "Jun 2025 - Present • 1 month",
      location: "Mumbai, Maharashtra, India",
      type: "Internship",
      icon: DollarSign,
      logo: "/bank.jpg",
      achievements: [
        "Performing financial planning and analysis for banking operations",
        "Supporting budget preparation and variance analysis",
        "Analyzing financial data to support strategic decision making",
        "Working with cross-functional teams on financial reporting"
      ],
      skills: ["Financial Analysis", "Excel", "Financial Planning", "Banking Operations"]
    },
    {
      title: "Student Placement Coordinator",
      organization: "Corporate Relations Cell, NMIMS",
      period: "2024 - Present",
      type: "Leadership",
      icon: Briefcase,
      achievements: [
        "Represented college at NDTV Profit & ASSOCHAM MSME Conclave 2025",
        "Coordinated placement activities for 200+ students",
        "Built relationships with 15+ corporate partners",
        "Organized industry interaction sessions and workshops"
      ],
      skills: ["Corporate Relations", "Event Management", "Communication", "Leadership"]
    },
    {
      title: "Senior Member",
      organization: "Vaayu Fest, NMIMS",
      period: "2023 - 2024",
      type: "Event Management",
      icon: Users,
      achievements: [
        "Led stock market simulation with 150+ participants",
        "Raised ₹15,000 through strategic sponsorship deals",
        "Coordinated team of 12 volunteers for finance events",
        "Managed budget and financial planning for the fest"
      ],
      skills: ["Team Leadership", "Budget Management", "Sponsorship", "Finance Events"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl mx-auto">
            Building leadership skills through meaningful roles and impactful contributions
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index}
                className="group hover-lift border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in-up bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <div className="p-2 md:p-3 bg-navy-100 rounded-lg mr-3 md:mr-4 group-hover:bg-navy-200 transition-colors duration-300">
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-navy-600 group-hover:text-navy-700 transition-colors" />
                        </div>
                        <Badge className="bg-orange-500 hover:bg-orange-600 group-hover:scale-105 transition-transform duration-300 text-xs md:text-sm">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      {/* Company Logo */}
                      {exp.logo && (
                        <div className="mb-4">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.organization} logo`}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg border border-gray-200 bg-white p-2"
                          />
                        </div>
                      )}
                      
                      <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-2 group-hover:text-navy-900 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <p className="text-base md:text-lg text-orange-600 font-semibold mb-3 group-hover:text-orange-700 transition-colors">
                        {exp.organization}
                      </p>
                      
                      <div className="flex items-center text-navy-500 mb-3 group-hover:text-navy-600 transition-colors">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm md:text-base">{exp.period}</span>
                      </div>
                      
                      {/* Location */}
                      {exp.location && (
                        <p className="text-sm text-navy-500 mb-4 group-hover:text-navy-600 transition-colors">
                          📍 {exp.location}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="text-base md:text-lg font-semibold text-navy-700 mb-3 md:mb-4 group-hover:text-navy-800 transition-colors">
                        Key Achievements & Responsibilities:
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-orange-600 transition-colors"></div>
                            <p className="text-navy-600 leading-relaxed text-sm md:text-base group-hover:text-navy-700 transition-colors">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
