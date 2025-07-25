import { Briefcase, Code, User,Database,Bot,NotebookPen} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
            I’m Kaushik — someone who believes in clean code, clear thinking, and the occasional chaos it takes to build something that actually works. I like to keep things sharp — whether it’s learning fast, solving real problems, or figuring out why my code ran perfectly at 2 a.m. and broke at 9.
            </p>

            <p className="text-muted-foreground">
              Professionally, I bring structure, focus, and a let’s-get-it-done mindset.
            Personally, I bring sarcasm, a love for late-night playlists, and questionable opinions about anime power rankings
            </p>

            <p className="text-muted-foreground">
            I’m not here to blend in — I’m here to grow, contribute, and make the process just as interesting as the outcome.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Kaushik_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Developing scalable, maintainable software with a strong emphasis on clean code practices
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Logic Handling</h4>
                  <p className="text-muted-foreground">
                    Leveraging DSA and SQL to design efficient solutions and manage structured data.
                  </p>
                </div>
              </div>
              
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <NotebookPen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Growth</h4>
                  <p className="text-muted-foreground">
                     Actively enhancing skills through hands-on development and adoption of modern technologies.

                  </p>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      
      
    </section>
  );
};
