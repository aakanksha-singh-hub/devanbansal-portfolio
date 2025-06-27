
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      institution: "NMIMS, Mumbai",
      degree: "B.Com Honours in Accounting & Finance",
      period: "2023 – Present",
      grade: "CGPA: 3.76/4.00",
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
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-8"></div>
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
