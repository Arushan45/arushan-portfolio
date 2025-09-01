import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cpu, 
  BarChart3, 
  Settings, 
  Palette, 
  GitBranch,
  TrendingUp,
  Wrench
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Process Simulation",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Aspen Plus", "Simulink"],
      color: "primary"
    },
    {
      title: "Programming & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "MATLAB"],
      color: "accent"
    },
    {
      title: "CAD & Drafting",
      icon: <Palette className="h-6 w-6" />,
      skills: ["PFD/P&ID Drafting", "Solid Edge"],
      color: "success"
    },
    {
      title: "Automation",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["PLC Fundamentals"],
      color: "primary"
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Power BI", "MS Excel"],
      color: "accent"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"],
      color: "success"
    },
    {
      title: "Project Management",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ["Project Management Foundations"],
      color: "primary"
    },
    {
      title: "Process Improvement",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Lean Six Sigma Basics"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          badge: "bg-primary/20 text-primary hover:bg-primary/30"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          badge: "bg-accent/20 text-accent hover:bg-accent/30"
        };
      case "success":
        return {
          bg: "bg-success/10",
          text: "text-success",
          badge: "bg-success/20 text-success hover:bg-success/30"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          badge: "bg-primary/20 text-primary hover:bg-primary/30"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="hero-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for modern chemical engineering challenges
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <Card 
                  key={index} 
                  className="card-hover bg-card border-border group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3">
                        <div className={`${colors.bg} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className={colors.text}>
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-foreground text-sm leading-tight">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills Badges */}
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className={`${colors.badge} text-xs font-medium w-full justify-center transition-all duration-300`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Process Simulation</h4>
              <p className="text-sm text-muted-foreground">
                Advanced modeling and simulation using industry-standard tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Programming</h4>
              <p className="text-sm text-muted-foreground">
                Data analysis and automation through Python and MATLAB
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Turning complex data into actionable engineering insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;