import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center max-w-5xl">
        <Reveal direction="left">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let's Make Something Great Together</h2>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
              Tell us about your goals. We'll reply within one business day.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 border-none w-max mx-auto md:mx-0" aria-label="Email us">
              <a href="mailto:hello@businessconsultant.com">Email Us</a>
            </Button>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="flex justify-center md:justify-end">
            <Card className="bg-card border border-border shadow-lg max-w-sm">
              <CardHeader className="items-center">
                <Mail className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl font-bold text-foreground">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-center">
                <p className="text-muted-foreground">hello@businessconsultant.com</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
