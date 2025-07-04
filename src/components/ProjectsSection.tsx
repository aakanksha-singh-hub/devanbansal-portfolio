import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Calculator } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "WACC Analysis for Arvind Ltd.",
      description:
        "Comprehensive Weighted Average Cost of Capital analysis for Arvind Limited, including detailed cost of equity and debt calculations using CAPM model and market data analysis.",
      skills: ["Excel", "CAPM", "Financial Modeling", "Data Analysis"],
      icon: Calculator,
      highlights: [
        "Calculated optimal capital structure",
        "Risk assessment using beta analysis",
        "Comparative industry analysis",
      ],
    },
    {
      title: "Bonus Issue Analysis for Varun Beverages Ltd.",
      description:
        "In-depth analysis of Varun Beverages' bonus issue impact on stock price, market capitalization, and shareholder value, with detailed pre and post-issue financial metrics.",
      skills: [
        "Stock Analysis",
        "Market Research",
        "Excel",
        "Financial Ratios",
      ],
      icon: TrendingUp,
      highlights: [
        "Market impact assessment",
        "Shareholder value analysis",
        "Price adjustment calculations",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair italic tracking-tight mb-3">
            Projects
          </h2>
          <div className="w-24 h-[2px] bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world finance projects showcasing analytical expertise and
            strategic thinking
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="bg-black border border-white/10 hover:border-teal/30 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 border border-teal/30 rounded-full flex items-center justify-center bg-teal/5">
                      <IconComponent className="w-5 h-5 text-teal" />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-4 font-geist-mono leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-medium text-teal mb-3 font-geist-mono uppercase tracking-wider">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-sm text-gray-400 flex items-start"
                          >
                            <div className="w-1 h-1 bg-teal mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-teal/10">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="bg-black text-teal border-teal/20 hover:bg-teal/5 transition-colors text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
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

export default ProjectsSection;
