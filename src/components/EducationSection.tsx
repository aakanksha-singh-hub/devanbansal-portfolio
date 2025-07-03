import React from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const EducationSection = () => {
  const educationData = [
    {
      institution: "NMIMS University",
      degree: "Bachelor of Management Studies (BMS)",
      period: "2022 - 2025",
      grade: "8.2 CGPA",
      status: "Final Year",
      specialization: "Finance",
      location: "Mumbai, Maharashtra",
      logo: "N",
      achievements: [
        "Student Placement Coordinator",
        "Corporate Relations Cell Member",
        "Vaayu Fest Senior Member",
        "Academic Excellence in Finance",
      ],
      subjects: [
        "Financial Management",
        "Investment Analysis",
        "Corporate Finance",
        "Banking Operations",
        "Risk Management",
      ],
    },
    {
      institution: "ACCA Global",
      degree: "ACCA (Association of Chartered Certified Accountants)",
      period: "2023 - Present",
      status: "In Progress",
      progress: "Strategic Level",
      location: "Professional Qualification",
      logo: "A",
      achievements: [
        "Cleared 9 Papers",
        "Strategic Business Leader (SBL) Qualified",
        "Advanced Financial Management Focus",
        "Global Recognition",
      ],
      subjects: [
        "Strategic Business Leader",
        "Strategic Business Reporting",
        "Advanced Financial Management",
        "Corporate & Business Law",
        "Performance Management",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-5xl mx-auto px-12 lg:px-20 relative z-10">
        {/* Header - Minimalist */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-geist-mono">
            Education
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Academic foundation and professional certifications in finance and
            business management
          </p>
        </div>

        {/* Accordion Education List */}
        <Accordion type="single" collapsible className="space-y-6">
          {educationData.map((edu, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 animate-fade-in-up rounded-none"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <AccordionTrigger className="py-6 hover:no-underline px-6">
                <div className="flex items-center w-full">
                  {/* Logo Circle */}
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-geist-mono text-lg">
                      {edu.logo}
                    </span>
                  </div>

                  {/* Main Info */}
                  <div className="flex-grow text-left flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                    <div>
                      <h3 className="text-white font-geist-mono text-lg">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-400 text-sm">{edu.degree}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-gray-400 text-sm hidden sm:block">
                        {edu.period}
                      </span>
                      <Badge
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-6 pb-8 pl-[4.5rem] px-6">
                <div className="space-y-8 border-l border-white/10 pl-6">
                  {/* Meta Info - Period, Grade, Location */}
                  <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-white/70" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-white/70" />
                        <span>{edu.grade}</span>
                      </div>
                    )}
                    {edu.progress && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-white/70" />
                        <span>{edu.progress}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Subjects */}
                  <div className="space-y-4">
                    <h4 className="text-white font-geist-mono text-xs uppercase tracking-wider">
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-black text-white border-white/20 hover:bg-white/5 transition-colors text-xs"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-white font-geist-mono text-xs uppercase tracking-wider">
                      Achievements
                    </h4>
                    <div className="space-y-3">
                      {edu.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-3">
                          <div className="w-1 h-1 bg-white mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Educational Context - Minimalist */}
        <div
          className="mt-20 border border-white/10 p-8 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <h3 className="text-white mb-4 font-geist-mono text-xs uppercase tracking-wider">
            Continuous Learning
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Committed to lifelong learning and professional development in
            finance and accounting. Currently pursuing ACCA qualification
            alongside academic studies to build comprehensive expertise in
            financial management and strategic business leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
