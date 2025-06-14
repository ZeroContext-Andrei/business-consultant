import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LogoIcon from '@/components/LogoIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <LogoIcon size={40} />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground whitespace-nowrap">The Business Consultant</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('home')} className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('services')} className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollTo('insights')} className="text-muted-foreground hover:text-foreground transition-colors">
              Insights
            </button>
            <button onClick={() => scrollTo('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 border-none">Book a Consultation</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation: full-width panel positioned below header bar */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-background border-t border-border md:hidden">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <button onClick={() => scrollTo('home')} className="text-muted-foreground hover:text-foreground transition-colors text-left">Home</button>
            <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-foreground transition-colors text-left">About</button>
            <button onClick={() => scrollTo('services')} className="text-muted-foreground hover:text-foreground transition-colors text-left">Services</button>
            <button onClick={() => scrollTo('insights')} className="text-muted-foreground hover:text-foreground transition-colors text-left">Insights</button>
            <button onClick={() => scrollTo('contact')} className="text-muted-foreground hover:text-foreground transition-colors text-left">Contact</button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
