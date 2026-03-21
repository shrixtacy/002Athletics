import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import { Link } from 'react-router-dom';
// Removed unused icons
import ballPreAd from '@/assets/ball-pre-ad.png';
import ballStrAd from '@/assets/ball-str-ad.png';
import { useEffect } from 'react';

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

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
              {products.map((product, index) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="block group relative bg-card hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 font-body text-xs uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-secondary aspect-square flex justify-center items-center px-4 md:px-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
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
