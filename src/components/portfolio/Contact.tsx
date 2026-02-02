import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fatmamostafaali2015@gmail.com",
    href: "mailto:fatmamostafaali2015@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 1002345343",
    href: "tel:+201002345343",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/FatmaMostafaAli",
    color: "hover:text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fatma-mostafa-ali",
    color: "hover:text-primary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>
          </div>

          {/* Contact Card */}
          <Card className="border-0 shadow-elevated overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="gradient-bg p-8 md:p-10 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-6">
                  Let's Connect
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Feel free to reach out through any of these channels. I'm always happy to discuss new projects, 
                  creative ideas, or opportunities.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary-foreground/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side - CTA */}
              <CardContent className="p-8 md:p-10 flex flex-col justify-center items-center text-center">
                <Send className="h-16 w-16 text-primary/30 mb-6" />
                <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                  Ready to Start a Project?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Send me an email and let's discuss how we can work together.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <a href="mailto:fatmamostafaalii@gmail.com">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
