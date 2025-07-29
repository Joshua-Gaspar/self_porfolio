import { AboutSection } from "@/components/AboutSection";
import { IntroSection } from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
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
      </main>
      {/* Footer */}
    </div>
  );
};
