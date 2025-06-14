import { Target, Gem, Lightbulb } from 'lucide-react';
import Reveal from '@/components/Reveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Business consultant working with client"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="right" delay={0.1}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Transforming Businesses Through Strategic Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry experts, we bring cutting-edge insights and bold strategies to businesses ready to scale and lead.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with strategic insights and actionable solutions 
                    that drive measurable growth and competitive advantage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Gem className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, innovation, and results-driven approach form the foundation 
                    of every client relationship and project we undertake.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep industry knowledge across technology, finance, healthcare, and 
                    manufacturing sectors with proven methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
