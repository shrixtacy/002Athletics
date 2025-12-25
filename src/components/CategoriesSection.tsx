import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import pickleball from '@/assets/pickleball.jpg';

const categories = [
  {
    title: 'Paddles',
    count: 24,
    image: pickleball,
  },
  {
    title: 'Balls',
    count: 12,
  },
  {
    title: 'Bags',
    count: 8,
  },
  {
    title: 'Accessories',
    count: 32,
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-foreground text-background pattern-dots-lg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Shop By Category
          </span>
          <h2 className="font-display text-5xl md:text-7xl">
            EXPLORE OUR GEAR
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative aspect-square bg-background/5 border border-background/20 overflow-hidden cursor-pointer hover:border-primary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 pattern-grid opacity-20" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-4xl text-background group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-body text-sm text-background/60 mt-2">
                    {category.count} Products
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-background/60 group-hover:text-primary transition-colors">
                  <span className="font-body text-sm uppercase tracking-wider">Shop Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 border border-background/20 rounded-full group-hover:border-primary group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="purple-outline" size="xl" className="border-background text-background hover:bg-background hover:text-foreground">
            View Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
