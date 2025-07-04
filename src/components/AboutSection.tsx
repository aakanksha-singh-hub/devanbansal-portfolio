import React from "react";
import { Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-16 lg:pt-24 bg-black relative overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair italic tracking-tight">
            About
          </h2>
          <div className="w-16 h-[2px] bg-teal mt-4 mx-auto"></div>
        </div>

        <div className="max-w-3xl space-y-6">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I'm a passionate Finance student at NMIMS Mumbai, currently pursuing
            my ACCA qualification. My journey in finance has been driven by a
            deep fascination with numbers and their power to tell stories, drive
            decisions, and create value.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            With a strong analytical mindset and strategic thinking approach, I
            excel at breaking down complex financial problems and developing
            innovative solutions. My experience spans across financial analysis,
            market research, and data-driven decision making.
          </p>

          <div className="flex gap-12 pt-8">
            <div>
              <div className="text-teal font-geist-mono font-medium text-2xl">
                3+
              </div>
              <div className="text-gray-400 text-sm mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-teal font-geist-mono font-medium text-2xl">
                15+
              </div>
              <div className="text-gray-400 text-sm mt-2">
                Projects Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
