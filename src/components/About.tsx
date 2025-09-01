import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="hero-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about engineering solutions that make a difference in sustainability and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-fade-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Engineering the <span className="text-accent">Future</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a Chemical and Process Engineering undergraduate at the University of Moratuwa, 
                  I bring a strong foundation in thermodynamics, heat & mass transfer, and process design. 
                  My expertise spans chemical plant operations, laboratory practices, and advanced process 
                  simulation tools.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm particularly passionate about sustainable engineering solutions and innovation. 
                  My approach combines analytical thinking with creative problem-solving, always aiming 
                  to develop solutions that are both technically sound and environmentally conscious.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">Analytical approach to complex challenges</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Award className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-semibold text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Creative solutions for industry needs</p>
                </div>
              </div>
            </div>

            {/* Education & Experience Cards */}
            <div className="space-y-6 animate-fade-in">
              {/* Education */}
              <Card className="card-hover bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Education</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-foreground">
                            B.Sc (Hons) in Chemical & Process Engineering
                          </h5>
                          <p className="text-accent font-medium">University of Moratuwa, Sri Lanka</p>
                          <p className="text-sm text-muted-foreground">2023 – 2027 (Expected)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card className="card-hover bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Work Experience</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-foreground">Intern</h5>
                          <p className="text-primary font-medium">Yarl IT Hub</p>
                          <p className="text-sm text-muted-foreground mb-2">2022 – 2023</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Contributed to Puthiya Payanankal innovation program</li>
                            <li>• Supported AKI e-learning platform development</li>
                            <li>• Managed Startup Incubator documentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Core Competencies */}
              <Card className="card-hover bg-card border-border accent-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Core Competencies</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Thermodynamics</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Heat Transfer</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Mass Transfer</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Process Design</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Plant Operations</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-accent font-medium">•</span>
                      <span className="text-muted-foreground ml-2">Lab Practices</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;