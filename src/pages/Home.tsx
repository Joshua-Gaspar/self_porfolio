import { AboutSection } from "@/components/AboutSection";
import { IntroSection } from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSections";
import { SkillSection } from "@/components/SkillSection";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effect*/}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main content*/}
      <main>
      <IntroSection />
      <AboutSection  />
      <SkillSection />
      <ProjectsSection />

      {/* Add more sections as needed */}
      </main>
      {/* Footer */}
    </div>
  );
};
