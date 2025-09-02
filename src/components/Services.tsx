import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Video, Palette, Youtube, ExternalLink } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editing",
      description: "Professional video editing services for content creators and businesses. High-quality post-production with attention to detail.",
      features: ["Professional editing", "Color correction", "Audio enhancement", "Motion graphics"],
      color: "primary"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Flyer Design",
      description: "Creative and impactful flyer designs that capture attention and communicate your message effectively.",
      features: ["Custom designs", "Brand alignment", "Print-ready files", "Multiple revisions"],
      color: "accent"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "YouTube Content",
      description: "Complete YouTube content creation from concept to final upload. Helping creators grow their channels.",
      features: ["Content strategy", "Thumbnail design", "Video optimization", "Channel branding"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          button: "bg-primary hover:bg-primary/90 text-primary-foreground"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          button: "bg-accent hover:bg-accent/90 text-accent-foreground"
        };
      case "success":
        return {
          bg: "bg-success/10",
          text: "text-success",
          button: "bg-success hover:bg-success/90 text-success-foreground"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          button: "bg-primary hover:bg-primary/90 text-primary-foreground"
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Freelance <span className="hero-gradient">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creative digital services with a track record of satisfied international clients
            </p>
          </div>

          {/* Fiverr Highlight */}
          <div className="mb-12 animate-fade-in">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-success/20 p-3 rounded-full">
                      <Star className="h-8 w-8 text-success" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Freelancer on Fiverr
                      </h3>
                      <p className="text-muted-foreground">
                        Active since 2024 • International clients • Repeat projects • Positive feedback
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <Card 
                  key={index}
                  className="card-hover bg-card border-border group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Icon */}
                      <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className={colors.text}>
                          {service.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.text === 'text-primary' ? 'bg-primary' : colors.text === 'text-accent' ? 'bg-accent' : 'bg-success'}`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Started Freelancing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient mb-2">Global</div>
              <div className="text-sm text-muted-foreground">International Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold hero-gradient mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;