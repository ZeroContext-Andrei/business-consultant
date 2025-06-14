import React from 'react';

const logos = [
  { src: '/logos/ibm.svg', alt: 'IBM' },
  { src: '/logos/mckinsey.svg', alt: 'McKinsey' },
  { src: '/logos/deloitte.svg', alt: 'Deloitte' },
  { src: '/logos/accenture.svg', alt: 'Accenture' }
];

const TrustBar = () => (
  <section className="bg-background py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* spacing removed */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-80">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar; 