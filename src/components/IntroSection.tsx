import { ArrowDown } from "lucide-react";

export const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col item-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Joshua
            </span>
            <span className="opacity-0 animate-fade-in-delay-2"> Gaspar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences that are fast, clean, and
            user-focused. Specializing in full-stack development, I turn ideas
            into scalable solutions.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-small text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
