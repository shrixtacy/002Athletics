import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const upcomingProducts = [
  {
    id: 3,
    name: 'Genesis Series Edition',
    category: 'Exclusive Collection',
    image: '/upcoming-1.png',
    badge: 'Coming Soon',
    upcoming: true
  },
  {
    id: 4,
    name: 'Court Signature Gear',
    category: 'Apparel',
    image: '/upcoming-2.png',
    badge: 'Coming Soon',
    upcoming: true
  },
  {
    id: 5,
    name: 'Pro Tour Prototype',
    category: 'Equipment',
    image: '/upcoming-3.png',
    badge: 'Coming Soon',
    upcoming: true
  }
];

const UpcomingProductsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-fade-rotate ${headerVisible ? 'visible' : ''}`}
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
            Sneak Peek
          </span>
          <h2 className="font-display text-5xl md:text-7xl">
            UPCOMING DROPS
          </h2>
        </div>
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 gap-6 md:gap-8 scroll-stagger ${gridVisible ? 'visible' : ''} pb-4 -mx-6 px-6 md:mx-0 md:px-0`}
        >
          {upcomingProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center block group relative bg-card hover-lift"
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 font-body text-xs uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
              <div className="relative overflow-hidden bg-secondary aspect-square flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-border text-center">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  {product.category}
                </span>
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="font-display text-xl text-muted-foreground">
                  Coming Soon
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UpcomingProductsSection;
