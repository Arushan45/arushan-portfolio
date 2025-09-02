import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Thermometer, FlaskConical, Gauge } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Heat Exchanger Design",
      description: "Designed and optimized a shell-and-tube heat exchanger with comprehensive duty, pressure drop, and efficiency analysis.",
      icon: <Thermometer className="h-6 w-6" />,
      technologies: ["Thermal Analysis", "Fluid Mechanics", "Process Design"],
      features: [
        "Shell-and-tube configuration optimization",
        "Heat duty calculations and analysis",
        "Pressure drop evaluation",
        "Thermal efficiency optimization"
      ],
      color: "primary",
      category: "Process Design"
    },
    {
      title: "Distillation Column Design",
      description: "Engineered a sieve-tray distillation column for n-hexane/n-heptane separation using McCabe-Thiele method and mass balance principles.",
      icon: <FlaskConical className="h-6 w-6" />,
      technologies: ["McCabe-Thiele", "Mass Balance", "Separation Process"],
      features: [
        "Sieve-tray column design",
        "Binary separation optimization",
        "Mass balance calculations",
        "McCabe-Thiele graphical analysis"
      ],
      color: "accent",
      category: "Separation Process"
    },
    {
      title: "Heat Exchanger Simulation",
      description: "Advanced simulation of a countercurrent shell-and-tube heat exchanger for methanol condensation using Aspen Plus and Aspen EDR.",
      icon: <Gauge className="h-6 w-6" />,
      technologies: ["Aspen Plus", "Aspen EDR", "Process Simulation"],
      features: [
        "Aspen Plus process simulation",
        "Methanol condensation modeling",
        "Countercurrent flow analysis",
        "Equipment design and rating"
      ],
      color: "success",
      category: "Process Simulation"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          badge: "bg-primary/20 text-primary",
          button: "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          badge: "bg-accent/20 text-accent",
          button: "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        };
      case "success":
        return {
          bg: "bg-success/10",
          text: "text-success",
          badge: "bg-success/20 text-success",
          button: "border-success text-success hover:bg-success hover:text-success-foreground"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          badge: "bg-primary/20 text-primary",
          button: "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        };
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Engineering <span className="hero-gradient">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic and technical projects showcasing chemical engineering expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <Card 
                  key={index}
                  className="card-hover bg-card border-border group h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="space-y-6 flex-grow">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className={`${colors.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <div className={colors.text}>
                              {project.icon}
                            </div>
                          </div>
                          <Badge variant="secondary" className={colors.badge}>
                            {project.category}
                          </Badge>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-foreground">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${colors.text === 'text-primary' ? 'bg-primary' : colors.text === 'text-accent' ? 'bg-accent' : 'bg-success'}`}></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-6 mt-auto">
                      <Button 
                        variant="outline"
                        size="sm"
                        className={`${colors.button} flex-1 transition-all duration-300`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;