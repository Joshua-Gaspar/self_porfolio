import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="spacy-y-6">
            <h3 className="text-2xl font-bold">
              Passionate Web Developer & Tech Creator.
            </h3>
            <br />

            <p className="text-muted-foreground">
              My journey in web development has equipped me with a diverse skill
              set, allowing me to tackle challenges from front-end design to
              back-end architecture. I thrive on learning new technologies and
              continuously improving my craft.
            </p>
            <br />
            <p className="text-muted-foreground">
              I believe in the power of collaboration and open-source, and I'm
              always eager to contribute to projects that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center pt-6">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web development</h4>
                    <p>Creating responsive wetsites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX design</h4>
                    <p>Designin intuitive user experience</p>
                </div>
              </div>
            </div>

            <div className=" gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />                 
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p>Creating responsive wetsites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
