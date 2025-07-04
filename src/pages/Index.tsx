import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
