import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Zap, Shield, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Power & Control',
    description: 'Engineered for maximum power transfer and precise ball control on every shot.',
  },
  {
    icon: Shield,
    title: 'Premium Materials',
    description: 'Carbon fiber and advanced composites for unmatched durability and performance.',
  },
  {
    icon: Award,
    title: 'Pro Approved',
    description: 'Used by professional players in tournaments around the world.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free express delivery on orders over $100. Ships within 24 hours.',
  },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-beige pattern-lines">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-flip-in ${headerVisible ? 'visible' : ''}`}
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            THE PICKLE<span className="text-primary">PRO</span> DIFFERENCE
          </h2>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 bg-background border-2 border-transparent hover:border-foreground transition-all duration-500 scroll-pop-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon with bounce animation */}
              <div 
                className={`w-16 h-16 bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 ${gridVisible ? 'rotate-0 scale-100' : 'rotate-12 scale-0'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <feature.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 
                className={`font-display text-2xl text-foreground mb-3 transition-all duration-500 ${gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {feature.title}
              </h3>
              <p 
                className={`font-body text-muted-foreground leading-relaxed transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
