import { Github, Linkedin, Mail, Heart } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/fatmamostafa42", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fatma-mostafa-ali", label: "LinkedIn" },
  { icon: Mail, href: "mailto:fatmamostafaalii@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-18 mb-8">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="font-display text-2xl font-bold mb-4 inline-block"
              >
                <span className="text-accent"></span>
              </a>
             
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/10 hover:bg-accent/20 hover:text-accent transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
              <p>© {currentYear} Fatma Mostafa Ali. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-accent fill-accent" /> using React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
