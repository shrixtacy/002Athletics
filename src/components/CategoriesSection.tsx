import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-24 bg-foreground text-background pattern-dots-lg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-fade-rotate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Shop By Category
          </span>
          <h2 className="font-display text-5xl md:text-7xl">
            EXPLORE OUR GEAR
          </h2>
        </div>

        {/* Categories Grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative aspect-square bg-background/5 border border-background/20 overflow-hidden cursor-pointer hover:border-primary transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-3'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 pattern-grid opacity-20" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 
                    className={`font-display text-4xl text-background group-hover:text-primary transition-all duration-500 ${gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{ transitionDelay: `${index * 120 + 150}ms` }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className={`font-body text-sm text-background/60 mt-2 transition-all duration-500 ${gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${index * 120 + 250}ms` }}
                  >
                    {category.count} Products
                  </p>
                </div>
                
                <div 
                  className={`flex items-center gap-2 text-background/60 group-hover:text-primary transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 120 + 350}ms` }}
                >
                  <span className="font-body text-sm uppercase tracking-wider">Shop Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Decorative Circle with animation */}
              <div 
                className={`absolute -bottom-12 -right-12 w-32 h-32 border border-background/20 rounded-full group-hover:border-primary group-hover:scale-110 transition-all duration-700 ${gridVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`text-center mt-16 scroll-pop-up ${ctaVisible ? 'visible' : ''}`}
        >
          <Button variant="purple-outline" size="xl" className="border-background text-background hover:bg-background hover:text-foreground">
            View Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
