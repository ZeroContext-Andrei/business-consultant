import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 min-h-[80vh] md:min-h-screen flex items-center bg-cover bg-center md:bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80')" }}
    >
      {/* Overlay to darken background image */}
      <div className="absolute inset-0 z-0 bg-black/80 mix-blend-multiply" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center md:text-left space-y-10">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground"
          >
            Scaling Modern Enterprises<br />with Precision Strategy
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            Our experts help you pivot fast, lead with clarity, and scale with confidence.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button asChild size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none" aria-label="Book a free consultation">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white px-8 py-3 hover:bg-white hover:text-black"
              aria-label="Explore our consulting approach"
            >
              <span onClick={() => {
                const el=document.getElementById('services');
                if(el){el.scrollIntoView({behavior:'smooth'});}
              }}>Explore Our Approach</span>
            </Button>
          </motion.div>

          {/* Supporting microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-gray-400"
          >
            Schedule your complimentary intro call today
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
