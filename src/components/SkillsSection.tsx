import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  BarChart3,
  Calculator,
  Presentation,
  FileSpreadsheet,
  TrendingUp,
  ChevronDown,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Microsoft Excel", icon: FileSpreadsheet, category: "Analysis" },
    { name: "Power BI", icon: BarChart3, category: "Visualization" },
    { name: "Financial Modeling", icon: Calculator, category: "Finance" },
    { name: "Data Analysis", icon: TrendingUp, category: "Analysis" },
    { name: "PowerPoint", icon: Presentation, category: "Presentation" },
    { name: "CAPM & Valuation", icon: Monitor, category: "Finance" },
  ];

  const certifications = [
    {
      name: "ACCA",
      status: "In Progress",
      provider: "Association of Chartered Certified Accountants",
      level: "Professional",
      logo: "/acca-logo.png",
    },
    {
      name: "NISM Series XV - Research Analyst",
      status: "Certified",
      provider: "National Institute of Securities Markets",
      level: "Professional",
      logo: "/nism-logo.jpeg",
    },
    {
      name: "CA Foundation",
      status: "Completed",
      provider: "Institute of Chartered Accountants of India",
      level: "Foundation",
      logo: "/ca-logo.png",
    },
  ];

  const softSkills = [
    "Leadership",
    "Team Management",
    "Communication",
    "Problem Solving",
    "Critical Thinking",
    "Project Management",
    "Public Speaking",
    "Analytical Thinking",
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair italic tracking-tight mb-3">
            Skills
          </h2>
          <div className="w-24 h-[2px] bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technical expertise and professional certifications driving
            excellence
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="bg-black border border-white/10 hover:border-teal/30 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-10">
                <div className="w-10 h-10 border border-teal/30 rounded-full flex items-center justify-center flex-shrink-0 bg-teal/5">
                  <Monitor className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-xl font-geist-mono text-white">
                  Technical Expertise
                </h3>
              </div>

              {/* Technical Skills Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center rounded-lg space-x-4 p-5 border border-white/10 hover:border-teal/30 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 border border-teal/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-teal/40 transition-colors bg-teal/5">
                        <IconComponent className="w-4 h-4 text-teal" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-medium truncate">
                          {skill.name}
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs mt-1.5 bg-black text-teal border-teal/20"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Soft Skills */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-teal mb-5 font-geist-mono">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-black text-white border-teal/20 hover:bg-teal/5 transition-colors text-xs py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Timeline */}
        <div
          className="mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border border-teal/30 rounded-full flex items-center justify-center flex-shrink-0 bg-teal/5">
              <Award className="w-5 h-5 text-teal" />
            </div>
            <h3 className="text-xl font-geist-mono text-white">
              Certifications
            </h3>
          </div>

          {/* Timeline layout */}
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-teal/30 via-teal/20 to-teal/10"></div>

            {/* Certification items */}
            <div className="space-y-14">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-16">
                  {/* Circle on timeline */}
                  <div className="absolute left-0 top-0 mt-1">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        className="w-10 h-10 object-cover rounded-full border border-teal/20"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center bg-black">
                        <span className="text-teal text-sm font-geist-mono">
                          {cert.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Year badge */}
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="bg-black text-teal border-teal/20 text-xs font-geist-mono"
                    >
                      2024
                    </Badge>
                  </div>

                  {/* Certification title */}
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg text-white font-geist-mono">
                      {cert.name}
                    </h4>
                    <Badge
                      variant="outline"
                      className="bg-black text-teal border-teal/20 text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  {/* Provider */}
                  <p className="text-white/70 text-sm mb-4">{cert.provider}</p>

                  {/* Details section */}
                  <div className="border-l border-teal/20 pl-4 py-1">
                    <div className="mb-3">
                      <h5 className="text-xs uppercase tracking-wider text-teal mb-2 font-geist-mono">
                        Level
                      </h5>
                      <p className="text-gray-400 text-sm">{cert.level}</p>
                    </div>

                    {cert.name === "ACCA" && (
                      <div>
                        <h5 className="text-xs uppercase tracking-wider text-teal mb-2 font-geist-mono">
                          Status
                        </h5>
                        <p className="text-gray-400 text-sm">
                          Currently advancing through the Strategic Level papers
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Pursuing */}
          <div className="mt-12 p-6 border rounded-lg border-white/10 hover:border-teal/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full animate-ping bg-teal/40"></span>
                <span className="relative block w-3 h-3 rounded-full bg-teal"></span>
              </div>
              <div className="flex-1 ml-3">
                <h4 className="text-teal text-xs uppercase tracking-wider font-geist-mono mb-2">
                  Currently Pursuing
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Advancing in the ACCA qualification pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
