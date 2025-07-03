import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  DollarSign,
  Calendar,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        "Working with cross-functional teams on financial reporting",
      ],
      skills: [
        "Financial Analysis",
        "Excel",
        "Financial Planning",
        "Banking Operations",
      ],
    },
    {
      title: "Student Placement Coordinator",
      organization: "Corporate Relations Cell, NMIMS",
      period: "2024 - Present",
      type: "Leadership",
      icon: Briefcase,
      achievements: [
        "Represented college at NDTV Profit & ASSOCHAM MSME Conclave 2025",
        "Coordinated placement activities for numerous students",
        "Built relationships with 15+ corporate partners",
        "Organized industry interaction sessions and workshops",
      ],
      skills: [
        "Corporate Relations",
        "Event Management",
        "Communication",
        "Leadership",
      ],
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
        "Managed budget and financial planning for the fest",
      ],
      skills: [
        "Team Leadership",
        "Budget Management",
        "Sponsorship",
        "Finance Events",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-geist-mono">
            Experience
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building leadership skills through meaningful roles and impactful
            contributions
          </p>
        </div>

        {/* Timeline Experience Layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[2.25rem] top-0 bottom-0 w-px bg-white/10"></div>
          
          {/* Experience Items */}
          <div className="space-y-16 md:space-y-20 ml-0 md:ml-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up pl-8 md:pl-10"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Circle on timeline */}
                  <div className="absolute left-0 md:-left-12 top-0 w-5 h-5 rounded-full border border-white/20 bg-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="mb-5">
                    <Badge
                      variant="outline"
                      className="bg-black text-white border-white/20 text-xs font-geist-mono"
                    >
                      {exp.period.split(" ")[0]} {/* Extract the year */}
                    </Badge>
                  </div>
                  
                  {/* Icon and Title section */}
                  <div className="flex flex-col md:flex-row md:items-center gap-5 mb-4">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        className="w-12 h-12 object-cover rounded-full border border-white/10"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-xl font-medium text-white font-geist-mono">
                        {exp.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {exp.organization}
                      </p>
                    </div>
                    
                    <Badge
                      variant="outline"
                      className="bg-black text-white border-white/20 md:ml-auto text-xs self-start md:self-center"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  
                  {/* Period and Location */}
                  <div className="mb-5 text-sm text-gray-400 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <span>📍 {exp.location}</span>
                    )}
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="bg-black text-white border-white/20 hover:bg-white/5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Achievements Accordion */}
                  <Accordion type="single" collapsible className="border-t border-white/10 pt-4">
                    <AccordionItem value={`exp-${index}`} className="border-b-0">
                      <AccordionTrigger className="hover:no-underline py-2 text-sm font-geist-mono uppercase tracking-wider text-white">
                        Key Achievements & Responsibilities
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-3 border-l border-white/10 pl-4 mt-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <div className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
