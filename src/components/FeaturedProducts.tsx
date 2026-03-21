import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
// Removed unused icons
import { Link } from 'react-router-dom';
import ballPreAd from '@/assets/ball-pre-ad.png';
import ballStrAd from '@/assets/ball-str-ad.png';

const products = [
  {
    id: 1,
    name: 'Pro Tournament Pickleball',
    category: 'Professional',
    price: 15,
    originalPrice: 20,
    image: ballPreAd,
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Classic Training Ball',
    category: 'Training',
    price: 12,
    image: ballStrAd,
    badge: 'New',
    rating: 4.8,
    reviews: 64,
  },
];

const FeaturedProducts = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="paddles" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 scroll-blur-in ${headerVisible ? 'visible' : ''}`}
        >
          <div>
            <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
              Featured Collection
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              TOP SELLERS
            </h2>
          </div>
          <Button variant="hero-outline" className="mt-6 md:mt-0">
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8"
        >
          {products.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className={`block group relative bg-card hover-lift scroll-pop-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {product.badge && (
                <div 
                  className={`absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 font-body text-xs uppercase tracking-wider transition-all duration-500 ${gridVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {product.badge}
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden bg-secondary aspect-square flex justify-center items-center px-4 md:px-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${gridVisible ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
                  style={{ transitionDelay: `${index * 150 + 100}ms` }}
                />
                
                {/* Removed Quick Actions */}
              </div>

              {/* Product Info */}
              <div className="p-6 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-body text-xs text-muted-foreground">
                    ★ {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-body text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
