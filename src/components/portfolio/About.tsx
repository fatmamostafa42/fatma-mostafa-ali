import { GraduationCap, Briefcase, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-soft-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-primary">FM</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Add your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-medium">Junior Front-End Developer</span> with 
                a Bachelor's degree in Accounting from Ain Shams University. My journey into tech began with a 
                deep curiosity for creating beautiful, functional web experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in building responsive, user-centric applications using <span className="text-primary font-medium">React.js</span>, 
                JavaScript, and modern CSS frameworks. I'm committed to writing clean, maintainable code 
                and continuously learning new technologies.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">B.Sc. Accounting - Ain Shams University (2022)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Training</h4>
                    <p className="text-sm text-muted-foreground">Information Technology Institute (ITI) - Front-End Track</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Passion</h4>
                    <p className="text-sm text-muted-foreground">Creating seamless digital experiences & continuous learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
