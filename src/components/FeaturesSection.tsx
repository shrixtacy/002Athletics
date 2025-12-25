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
  return (
    <section className="py-24 bg-beige pattern-lines">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            THE PICKLE<span className="text-primary">PRO</span> DIFFERENCE
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background border-2 border-transparent hover:border-foreground transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
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
