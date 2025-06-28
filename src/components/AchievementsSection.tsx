
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, TrendingUp, Target, BarChart3 } from 'lucide-react';

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
      subtitle: "Excellent Academic Performance",
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
    <section id="achievements" className="section-padding bg-gray-50 relative overflow-hidden">
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
        {/* Top Left - Achievement Ranking */}
        <div className="absolute top-32 left-20 hidden lg:block animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <Trophy className="w-8 h-8 text-orange-500 animate-bounce" style={{animationDuration: '3s'}} />
          </div>
        </div>

        {/* Top Right - Performance Metrics */}
        <div className="absolute top-32 right-20 hidden lg:block animate-slide-in-right" style={{animationDelay: '1.5s'}}>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
            <Target className="w-8 h-8 text-green-500 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 hover:scale-105 transition-transform duration-500">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
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
