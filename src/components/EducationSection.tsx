import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Award,
  GraduationCap,
  MapPin,
  ChevronDown,
} from "lucide-react";
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
      degree: "B.Com Honours in Accounting & Finance",
      period: "2023 - 2026",
      grade: "3.76 CGPA",
      status: "Final Year",
      specialization: "Accounting & Finance",
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
      institution: "Association of Chartered Certified Accountants, UK",
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
        " Financial Reporting",
        "Performance Management",
        "Exemptions: BT, MA, FA, LW, TX, AA ",
      ],
    },
    {
      institution: "Bal Bharati Public School, Navi Mumbai",
      degree: "Senior Secondary Education (CBSE)",
      period: "Batch of 2023",
      grade: "93.80% Class 12\n96.20% Class 10",
      status: "Completed",
      location: "Navi Mumbai, India",
      logo: "B",
      specialization: "Commerce Stream",
      achievements: [
        "Zonal Rank 2 in Maharashtra and Goa - SOF Commerce Olympiad (June 2022)",
        "International Rank 4 - 7th BSE International Finance Olympiad (December 2019)",
      ],
      subjects: [
        "Financial Management",
        "Investment Analysis",
        "Corporate Finance",
        "Banking Operations",
        "Risk Management",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header - Minimalist */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair italic tracking-wide mb-3">
            Education
          </h2>
          <div className="w-24 h-[2px] bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Academic foundation and professional certifications in finance and
            business management
          </p>
        </div>

        {/* Education Timeline with Accordions */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-teal/40 via-teal/20 to-teal/10"></div>

          {/* Education items */}
          <Accordion type="single" collapsible className="space-y-14 w-full">
            {educationData.map((edu, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative border-none animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative pl-16">
                  {/* Circle on timeline */}
                  <div className="absolute left-0 top-0 mt-1 w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center bg-black">
                    <span className="text-teal text-sm font-geist-mono">
                      {edu.logo}
                    </span>
                  </div>

                  {/* Accordion Header Section */}
                  <AccordionTrigger className="py-3 hover:no-underline group">
                    <div className="flex flex-col w-full items-start group-hover:opacity-90 transition-opacity">
                      {/* Year badge */}
                      <div className="mb-3">
                        <Badge
                          variant="outline"
                          className="bg-black text-teal border-teal/20 text-xs font-geist-mono"
                        >
                          {edu.period}
                        </Badge>
                      </div>

                      {/* Education title */}
                      <div className="flex justify-between items-start w-full">
                        <div>
                          <h3 className="text-xl text-white font-geist-mono text-left">
                            {edu.degree}
                          </h3>
                          <p className="text-white/70 text-sm mt-1 text-left">
                            {edu.institution}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-black text-teal border-teal/20 text-xs"
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      {/* Location info */}
                      <div className="flex items-center justify-between w-full mt-3">
                        {edu.location && (
                          <div className="flex items-center gap-2 text-white/50 text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>{edu.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                </div>

                {/* Accordion Content Section */}
                <AccordionContent className="pl-16 pt-6">
                  {/* Details section */}
                  <div className="border-l border-teal/20 pl-6 py-3">
                    {/* Meta info */}
                    <div className="mb-10">
                      {edu.grade && (
                        <div className="mb-6">
                          <h5 className="text-xs uppercase tracking-wider text-teal mb-3 font-geist-mono">
                            Grade
                          </h5>
                          <p className="text-white text-sm whitespace-pre-line leading-relaxed font-medium">
                            {edu.grade}
                          </p>
                        </div>
                      )}
                      {edu.progress && (
                        <div className="mb-6">
                          <h5 className="text-xs uppercase tracking-wider text-teal mb-3 font-geist-mono">
                            Progress
                          </h5>
                          <p className="text-gray-300 text-sm">
                            {edu.progress}
                          </p>
                        </div>
                      )}
                      {edu.specialization && (
                        <div className="mb-6">
                          <h5 className="text-xs uppercase tracking-wider text-teal mb-3 font-geist-mono">
                            Specialization
                          </h5>
                          <p className="text-gray-300 text-sm">
                            {edu.specialization}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Key Subjects */}
                    <div className="mb-10">
                      <div className="border border-white/10 rounded-md hover:border-teal/30 transition-all duration-300">
                        <div className="w-full flex items-center justify-between p-4 pb-3">
                          <h5 className="text-xs uppercase tracking-wider text-teal font-geist-mono">
                            Key Subjects
                          </h5>
                        </div>
                        <div className="px-4 pb-5">
                          {edu.subjects?.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="bg-black text-white border-teal/20 hover:bg-teal/10 transition-colors text-xs py-1.5 px-3"
                                >
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-400 text-sm">
                              No subjects information available
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Achievements section */}
                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-teal mb-5 font-geist-mono">
                        Achievements
                      </h5>
                      <div className="space-y-4">
                        {edu.achievements.map((achievement, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal mt-2 flex-shrink-0 rounded-full"></div>
                            <span className="text-white text-sm leading-relaxed">
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
        </div>

        {/* Additional Educational Context - Minimalist */}
        {/* <div
          className="mt-20 p-8 border rounded-lg border-white/10 hover:border-teal/30 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <span className="absolute inset-0 rounded-full animate-ping bg-teal/40"></span>
              <span className="relative block w-3 h-3 rounded-full bg-teal"></span>
            </div>
            <div>
              <h3 className="text-teal text-xs uppercase tracking-wider font-geist-mono mb-2">
                Continuous Learning
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Committed to lifelong learning and professional development in
                finance and accounting. Currently pursuing ACCA qualification
                alongside academic studies to build comprehensive expertise in
                financial management and strategic business leadership.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EducationSection;
