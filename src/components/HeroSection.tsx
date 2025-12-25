import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroPaddle from '@/assets/hero-paddle.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headingText = "DOMINATE THE COURT";
  
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-foreground/10 rotate-45" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-bounce-subtle" />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
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
              className={`font-body text-lg text-muted-foreground max-w-md mb-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Professional-grade paddles and equipment designed for players who demand excellence. 
              Elevate your game with precision-engineered gear.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
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
              className={`flex gap-12 mt-12 pt-8 border-t border-border transition-all duration-700 delay-1000 ${
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

          {/* Hero Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Image Frame */}
              <div className="absolute -inset-4 bg-beige -z-10 transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-foreground -z-10 transform -rotate-2" />
              
              <img
                src={heroPaddle}
                alt="Premium Pickleball Paddle"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Tag */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4">
                <div className="font-display text-2xl">NEW</div>
                <div className="font-body text-xs uppercase tracking-wider">2024 Collection</div>
              </div>
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
