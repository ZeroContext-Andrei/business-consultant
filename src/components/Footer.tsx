import { toast } from '@/hooks/use-toast';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              The Business Consultant
            </div>
            <p className="text-background/80">
              Strategic business guidance for modern enterprises. 
              Helping you scale, pivot, and lead with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-background/80 hover:text-background transition-colors">
                Home
              </a>
              <a href="#about" className="text-background/80 hover:text-background transition-colors">
                About
              </a>
              <a href="#services" className="text-background/80 hover:text-background transition-colors">
                Services
              </a>
              <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Strategic Planning
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Operational Excellence
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Digital Transformation
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                Financial Advisory
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80 text-sm">
              Get insights and industry updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded text-background placeholder-background/60 focus:outline-none focus:border-background/40"
              />
              <button
                onClick={() =>
                  toast({
                    title: 'Coming Soon',
                    description: 'Newsletter sign-up will be available after launch.',
                    variant: 'destructive',
                  })
                }
                className="px-4 py-2 bg-background text-foreground rounded hover:bg-background/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 The Business Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
