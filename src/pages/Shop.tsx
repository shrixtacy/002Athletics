import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import { Link } from 'react-router-dom';
// Removed unused icons
import ballPreAd from '@/assets/ball-pre-ad.png';
import ballStrAd from '@/assets/ball-str-ad.png';
import { useEffect } from 'react';

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

const availableProducts = [
  {
    id: 1,
    name: '002 PRE',
    category: 'Training',
    price: 15,
    originalPrice: 20,
    image: '/pre-sports-ad-poster.png',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: '002 STR',
    category: 'Professional',
    price: 12,
    image: '/str-sports-ad-poster.png',
    badge: 'New',
    rating: 4.8,
    reviews: 64,
  },
];

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
                Official Store
              </span>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                SHOP ALL GEAR
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our premium range of pickleball equipment designed for players who demand the best in performance and reliability.
              </p>
            </div>

            {/* Available Products Grid */}
            <div className="mb-24">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="font-display text-4xl text-foreground">
                  CURRENTLY AVAILABLE
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto gap-4 md:gap-8">
                {availableProducts.map((product, index) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="flex flex-col group relative bg-card hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 bg-primary text-primary-foreground px-2 py-0.5 md:px-3 md:py-1 font-body text-[10px] md:text-xs uppercase tracking-wider">
                        {product.badge}
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-secondary flex justify-center items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto block transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-3 md:p-6 border-t border-border flex flex-col flex-1">
                      <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-2">
                        <span className="font-body text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                          {product.category}
                        </span>
                        <span className="text-muted-foreground hidden sm:inline">•</span>
                        <span className="font-body text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">
                          ★ {product.rating} ({product.reviews})
                        </span>
                      </div>
                      
                      <h3 className="font-display text-base md:text-2xl text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 md:gap-3 mt-auto">
                        <span className="font-display text-lg md:text-2xl text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-body text-xs md:text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Products Grid */}
            <div>
              <div className="text-center mb-12 mt-6 animate-fade-in">
                <h2 className="font-display text-4xl text-foreground">
                  UPCOMING DROPS
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-4 md:gap-8">
                {upcomingProducts.map((product, index) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="flex flex-col group relative bg-card hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className="relative overflow-hidden bg-secondary aspect-[3/4] flex justify-center items-start">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain object-top transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 md:p-6 border-t border-border text-center flex flex-col flex-1">
                      <h3 className="font-display text-base md:text-2xl text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                      <div className="font-display text-sm md:text-xl text-muted-foreground mt-auto">
                        Coming Soon
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
      
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default Shop;
