import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headingText = "DOMINATE THE COURT";
  
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-beige border border-border mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-body text-xs uppercase tracking-widest text-foreground/70">
                Premium Pickleball Gear
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 overflow-hidden">
              {headingText.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p 
              className={`font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Professional-grade paddles and equipment designed for players who demand excellence. 
              Elevate your game with precision-engineered gear.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button variant="hero" size="xl" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Catalog
              </Button>
            </div>

            {/* Stats */}
            <div 
              className={`flex justify-center gap-12 mt-12 pt-8 border-t border-border transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                { value: '50K+', label: 'Players' },
                { value: '4.9', label: 'Rating' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-foreground">{stat.value}</div>
                  <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
          <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
