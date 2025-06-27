
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Zonal Rank 2",
      subtitle: "SOF Commerce Olympiad",
      description: "Secured 2nd position in zonal rankings among thousands of participants nationwide",
      icon: Trophy,
      badge: "National Level",
      color: "orange"
    },
    {
      title: "International Rank 4",
      subtitle: "BSE Finance Olympiad",
      description: "Achieved 4th position internationally, demonstrating exceptional finance knowledge",
      icon: Medal,
      badge: "International",
      color: "orange"
    },
    {
      title: "Academic Excellence",
      subtitle: "CGPA 3.76/4.00",
      description: "Maintaining top academic performance while pursuing professional certifications",
      icon: Star,
      badge: "Academic",
      color: "orange"
    },
    {
      title: "Multiple Certifications",
      subtitle: "ACCA, NISM, CA Foundation",
      description: "Pursuing multiple professional certifications to build comprehensive expertise",
      icon: Award,
      badge: "Certifications",
      color: "orange"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-navy-600 max-w-2xl mx-auto">
            Recognition and excellence across academics, competitions, and professional development
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="group hover-lift border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in-up bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 ${
                    achievement.color === 'orange' 
                      ? 'bg-orange-100 group-hover:bg-orange-200 group-hover:scale-110' 
                      : 'bg-navy-100 group-hover:bg-navy-200 group-hover:scale-110'
                  }`}>
                    <IconComponent className={`h-6 w-6 md:h-8 md:w-8 transition-colors duration-300 ${
                      achievement.color === 'orange' ? 'text-orange-500 group-hover:text-orange-600' : 'text-navy-500 group-hover:text-navy-600'
                    }`} />
                  </div>
                  
                  <Badge 
                    className={`mb-3 text-xs font-semibold transition-all duration-300 text-white ${
                      achievement.badge === 'National Level' || achievement.badge === 'Academic' || achievement.badge === 'International' || achievement.badge === 'Certifications'
                        ? 'bg-orange-500 hover:bg-orange-600 group-hover:scale-105' 
                        : 'bg-navy-700 hover:bg-navy-800 group-hover:scale-105'
                    }`}
                  >
                    {achievement.badge}
                  </Badge>
                  
                  <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-2 group-hover:text-navy-800 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-orange-500 font-semibold mb-3 text-sm md:text-base group-hover:text-orange-600 transition-colors">
                    {achievement.subtitle}
                  </p>
                  
                  <p className="text-navy-600 text-xs md:text-sm leading-relaxed group-hover:text-navy-700 transition-colors">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
