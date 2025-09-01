import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:arushan.ravikaran@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/arushan-ravikaran-97b979224",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Arushan45",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold hero-gradient hover:opacity-80 transition-opacity"
              >
                Arushan Ravikaran
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Chemical Engineering undergraduate passionate about innovation, 
                sustainability, and creating engineering solutions for tomorrow's challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const section = document.getElementById(item.toLowerCase());
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <p className="text-muted-foreground">
                Let's discuss engineering solutions and opportunities
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-accent fill-accent" />
                <span>by Arushan Ravikaran</span>
              </div>
              
              <div className="text-muted-foreground text-sm">
                © {currentYear} Arushan Ravikaran. All rights reserved.
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Chemical & Process Engineering • University of Moratuwa • Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;