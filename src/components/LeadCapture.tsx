import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto">
          Get your free 30-minute strategy consultation and discover how we can help accelerate your growth.
        </p>

        <div className="space-y-8">
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-background mb-2">Strategic Assessment</h4>
              <p className="text-background/80 text-sm">Comprehensive snapshot of current position & growth opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-2">Actionable Insights</h4>
              <p className="text-background/80 text-sm">Practical recommendations you can implement immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-2">Custom Roadmap</h4>
              <p className="text-background/80 text-sm">Tailored 90-day plan aligned to your goals.</p>
            </div>
          </div>

          {/* GHL-compatible button */}
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 border-none"
          >
            <a
              href="#"
              data-hl-cta="true"
              aria-label="Open scheduling widget"
            >
              Book via HighLevel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
