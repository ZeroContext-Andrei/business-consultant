import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, LineChart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const Testimonials = () => {
  const benefits = [
    {
      title: "Senior Expertise",
      description: "Seasoned consultants with proven track-records guide every engagement—no hand-offs to juniors.",
      Icon: ShieldCheck,
    },
    {
      title: "Data-Driven Insight",
      description: "We pair qualitative discovery with quantitative models, turning noise into actionable strategy.",
      Icon: LineChart,
    },
    {
      title: "Rapid Impact",
      description: "First insights in two weeks; a clear 90-day roadmap delivered in under a month.",
      Icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-background" id="insights">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Results-driven methodology, expert advisors, and a commitment to rapid, measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <Reveal direction="up" delay={index * 0.1}>
              <Card className="bg-card border border-border shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-4">
                  <item.Icon className="w-10 h-10 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        {/* Consultation CTA merged here */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground">
            Get your free 30-minute strategy consultation and discover how we can help accelerate your growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 border-none"
            data-hl-cta
            aria-label="Book a free consultation"
          >
            <a href="#">Book via HighLevel</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
