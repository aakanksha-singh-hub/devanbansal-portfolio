
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, BarChart3 } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      institution: "NMIMS, Mumbai",
      degree: "B.Com Honours in Accounting & Finance",
      period: "2023 – Present",
      grade: "Excellent Academic Standing",
      status: "Current",
      achievements: ["Dean's List", "Top 10% of Class"]
    },
    {
      institution: "Bal Bharati Public School",
      degree: "Higher Secondary (XII)",
      period: "2021 – 2023",
      grade: "93.8%",
      status: "Completed",
      achievements: ["School Topper in Commerce", "Academic Excellence Award"]
    },
    {
      institution: "Bal Bharati Public School",
      degree: "Secondary (X)",
      period: "2019 – 2021",
      grade: "96.2%",
      status: "Completed",
      achievements: ["Subject Topper in Mathematics", "Overall Excellence"]
    }
  ];

  return (
    <section id="education" className="section-padding bg-white relative overflow-hidden">
      {/* ✨ Unified Animated Gradient Capsules - EXTREMELY SUBTLE VERSION */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Left Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute -top-32 -left-48 w-[700px] h-[200px] bg-gradient-to-r from-orange-200 via-amber-200 to-orange-300 opacity-5 blur-[100px] rounded-full rotate-[20deg] animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Right Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute top-[20%] -right-48 w-[600px] h-[180px] bg-gradient-to-l from-orange-100 via-yellow-200 to-orange-200 opacity-5 blur-[110px] rounded-full rotate-[-30deg] animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>

        {/* Bottom Center Glow Capsule - EXTREMELY SUBTLE */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[500px] h-[150px] bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 opacity-5 blur-[95px] rounded-full rotate-[10deg] animate-pulse" style={{ animationDuration: '12s', animationDelay: '1.5s' }}></div>
      </div>

      {/* Finance-themed floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Academic Performance */}
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
            <div className="text-xs text-navy-600 font-medium mt-1">Academic Growth</div>
          </div>
        </div>

        {/* Top Right - CGPA Performance */}
        <div className="absolute top-32 right-20 hidden lg:block animate-slide-in-right" style={{animationDelay: '1.5s'}}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <TrendingUp className="w-8 h-8 text-green-500 animate-bounce" style={{animationDuration: '3s'}} />
          </div>
        </div>

        {/* Bottom Left - Knowledge Progress */}
        <div className="absolute bottom-32 left-20 hidden lg:block animate-fade-in-up" style={{animationDelay: '2s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        {/* Bottom Right - Achievement Score */}
        <div className="absolute bottom-32 right-20 hidden lg:block animate-slide-in-right" style={{animationDelay: '2.5s'}}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <Award className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 hover:scale-105 transition-transform duration-500">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Academic excellence through dedicated learning and consistent performance
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 to-navy-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/30">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-navy-100 rounded-lg mr-3 group-hover:bg-navy-200 transition-colors duration-300">
                          <GraduationCap className="h-5 w-5 text-navy-500 group-hover:text-navy-600 transition-colors" />
                        </div>
                        <Badge 
                          variant={edu.status === 'Current' ? 'default' : 'secondary'}
                          className={edu.status === 'Current' ? 'bg-orange-500 hover:bg-orange-600 text-white group-hover:scale-105 transition-transform duration-300' : 'bg-gray-200 text-navy-700 group-hover:bg-navy-100 transition-colors'}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-navy-800 transition-colors">
                        {edu.institution}
                      </h3>
                      
                      <p className="text-navy-700 mb-3 font-medium group-hover:text-navy-800 transition-colors">
                        {edu.degree}
                      </p>
                      
                      <div className="flex items-center mb-3 text-navy-600 group-hover:text-navy-700 transition-colors">
                        <Calendar className="h-4 w-4 mr-2 text-navy-500" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-lg font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                          {edu.grade}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-navy-600 group-hover:text-navy-700 transition-colors">
                            <Award className="h-4 w-4 mr-2 text-orange-500 group-hover:text-orange-600 transition-colors" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300"></div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
