import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Fatma Mostafa Ali
          </h1>

          {/* Title */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-display gradient-text font-semibold mb-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Junior Front-End Developer<br></br> & Software Tester Trainee 
          </h2>

          {/* Tagline */}
          <p
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
           Passionate about creating clean, responsive web experiences while maintaining high software quality standards. I combine front-end development skills with a tester’s mindset, allowing me to build applications that are not only visually engaging but also reliable, functional, and user-focused.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/fatmamostafa42"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fatma-mostafa-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:fatmamostafaalii@gmail.com"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all text-muted-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
