import SiteNav from "../components/SiteNav";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div id="top">
      <SiteNav />
      <Hero />
      <div className="h-10 bg-gradient-to-b from-black/5 to-transparent" />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <div className="h-10 bg-gradient-to-b from-black-500/5 to-transparent" />      
      <ContactSection />
    </div>
  );
}
