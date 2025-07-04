import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Award,
  Medal,
  Star,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Zonal Rank 2",
      subtitle: "SOF Commerce Olympiad",
      description:
        "Secured 2nd position in zonal rankings among thousands of participants nationwide",
      icon: Trophy,
      badge: "National Level",
      color: "purple",
    },
    {
      title: "International Rank 4",
      subtitle: "BSE Finance Olympiad",
      description:
        "Achieved 4th position internationally, demonstrating exceptional finance knowledge",
      icon: Medal,
      badge: "International",
      color: "purple",
    },
    {
      title: "Academic Excellence",
      subtitle: "Excellent Academic Performance",
      description:
        "Maintaining top academic performance while pursuing professional certifications",
      icon: Star,
      badge: "Academic",
      color: "purple",
    },
    {
      title: "Multiple Certifications",
      subtitle: "ACCA, NISM, CA Foundation",
      description:
        "Pursuing multiple professional certifications to build comprehensive expertise",
      icon: Award,
      badge: "Certifications",
      color: "purple",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair italic tracking-tight">
              Achievements
            </h2>
            <div className="w-16 h-[2px] bg-teal mt-4 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognition and excellence across academics, competitions, and
            professional development
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8 auto-rows-auto">
          {/* First achievement - Large card spanning 4 columns */}
          {(() => {
            const achievement = achievements[1];
            const IconComponent = achievement.icon;
            return (
              <Card
                key="achievement-0"
                className="bg-black border border-white/10 rounded-xl hover:border-teal/30 transition-all duration-300 group animate-fade-in-up md:col-span-4 md:row-span-1"
              >
                <CardContent className="p-8 h-full flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 flex flex-col items-center text-center md:border-r md:border-teal/10 md:pr-6 md:mr-6">
                    {/* Icon */}
                    <div className="w-16 h-16 border border-teal/30 rounded-full flex items-center justify-center mb-4 group-hover:border-teal/50 transition-all duration-300 bg-teal/5">
                      <IconComponent className="w-7 h-7 text-teal" />
                    </div>

                    {/* Badge */}
                    <Badge
                      variant="outline"
                      className="bg-black text-teal border-teal/20 hover:bg-teal/5 transition-colors mb-2 text-xs font-medium"
                    >
                      {achievement.badge}
                    </Badge>
                  </div>

                  <div className="md:w-2/3 mt-6 md:mt-0 text-left">
                    {/* Title */}
                    <h3 className="text-2xl font-medium text-white mb-2 font-geist-mono leading-tight">
                      <span className="text-teal">{achievement.title}</span>
                    </h3>

                    {/* Subtitle */}
                    <p className="text-white/70 mb-4 text-sm font-geist-mono">
                      {achievement.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })()}

          {/* Second achievement - Medium card spanning 2 columns */}
          {(() => {
            const achievement = achievements[0];
            const IconComponent = achievement.icon;
            return (
              <Card
                key="achievement-1"
                className="bg-black border border-white/10 rounded-xl hover:border-teal/30 transition-all duration-300 group animate-fade-in-up md:col-span-2 md:row-span-1"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 border border-teal/30 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-teal/50 transition-all duration-300 bg-teal/5">
                    <IconComponent className="w-6 h-6 text-teal" />
                  </div>

                  {/* Badge */}

                  {/* Title */}
                  <h3 className="text-lg font-medium text-white mb-2 font-geist-mono leading-tight">
                    {achievement.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/70 mb-3 text-sm font-geist-mono">
                    {achievement.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })()}

          {/* Third & Fourth achievements - Side by side in the second row */}
          {achievements.slice(2, 4).map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={`achievement-${index + 2}`}
                className="bg-black border border-white/10 rounded-xl hover:border-teal/30 transition-all duration-300 group animate-fade-in-up md:col-span-3"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    {/* Icon */}
                    <div className="w-12 h-12 border border-teal/30 rounded-full flex items-center justify-center group-hover:border-teal/50 transition-all duration-300 mr-4 bg-teal/5">
                      <IconComponent className="w-5 h-5 text-teal" />
                    </div>

                    <div>
                      {/* Title */}
                      <h3 className="text-lg font-medium text-white font-geist-mono leading-tight">
                        {achievement.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-white/70 text-sm font-geist-mono">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow pr-4">
                      {achievement.description}
                    </p>

                    {/* Badge */}
                    <Badge
                      variant="outline"
                      className="bg-black text-teal border-teal/20 hover:bg-teal/5 transition-colors text-xs font-medium flex-shrink-0"
                    >
                      {achievement.badge}
                    </Badge>
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

export default AchievementsSection;
