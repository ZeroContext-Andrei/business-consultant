import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileSearch, Rocket, BriefcaseBusiness, Cog, LineChart, Lightbulb } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Services = () => {
  const services = [
    {
      title: "Business Audit",
      description: "Comprehensive analysis of your operations, performance gaps & opportunities.",
      Icon: FileSearch,
      features: [
        "Organizational Health Assessment",
        "Financial & Operational Review",
        "SWOT & Risk Diagnostics",
      ],
    },
    {
      title: "Strategic Business Development",
      description: "Long-term planning to drive sustainable growth & competitive edge.",
      Icon: Rocket,
      features: [
        "Market Positioning",
        "Revenue Model Optimization",
        "Growth Roadmaps",
      ],
    },
    {
      title: "Business Consulting",
      description: "Executive advisory and tailored strategies for unique challenges.",
      Icon: BriefcaseBusiness,
      features: [
        "Executive Strategy Support",
        "Organizational Structuring",
        "Change Management",
      ],
    },
    {
      title: "Operations & Systems Integration",
      description: "Streamlining operations & aligning systems for efficiency & scale.",
      Icon: Cog,
      features: [
        "Process Design & Automation",
        "Tool & System Alignment",
        "Workflow Optimization",
      ],
    },
    {
      title: "Business & Economic Forecasting",
      description: "Data-driven forecasting for confident decision-making.",
      Icon: LineChart,
      features: [
        "Market & Trend Analysis",
        "Economic Risk Scenarios",
        "Strategic Forecast Models",
      ],
    },
    {
      title: "Executive Insight",
      description: "Guidance for founders & executives navigating uncertainty.",
      Icon: Lightbulb,
      features: [
        "Industry Briefings",
        "Founder Strategy Sessions",
        "Custom Research Requests",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategic planning to operational excellence, we provide end-to-end consulting 
            services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
              <Card className="bg-card border border-border shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <service.Icon className="w-8 h-8 text-primary mb-4" />
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
