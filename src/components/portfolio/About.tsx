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
          {/* Photo */}
<div className="relative">
  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
    <div className="w-full h-full rounded-2xl overflow-hidden bg-card">
      <img
        src="/images/Fatma.jpg"
        alt="Fatma Mostafa Ali"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Decorative elements */}
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10" />
</div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-medium">Junior Front-End Developer</span> with an Accounting background, combining analytical thinking with creativity. My journey into tech grew from curiosity into a drive to design intuitive, engaging, and user-focused digital experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
               I build responsive, user-centered applications using <span className="text-primary font-medium">React.js</span>, JavaScript, and modern CSS. With a development and testing mindset.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">B.Sc. Accounting - Helwan University (2002)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Training</h4>
                    <p className="text-sm text-muted-foreground">Egyptian Council for Training & Developmen - Front-End Track</p>
                    <p className="text-sm text-muted-foreground pt-2">
  Digital Egypt Pioneers Initiative (DEPI) - Software Testing (Manual & Automation) Trainee
</p>
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
