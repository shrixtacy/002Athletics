import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import ballPreAd from '@/assets/ball-pre-ad.png';
import ballStrAd from '@/assets/ball-str-ad.png';

// Mock data base matching FeaturedProducts
const allProducts = [
  {
    id: 1,
    name: '002 PRE',
    category: 'Training',
    price: 150,
    images: [ballPreAd, '/pre-sports-ad-poster.png', ballStrAd, ballPreAd],
    description: 'Designed for professional tournament play, these pickleballs engineered for maximum durability and a consistent bounce. Tested rigorously on outdoor courts to withstand aggressive play while maintaining their true flight path.',
    features: [
      'Approved for official tournament play',
      'Seamless rotational molding for durability',
      'True flight technology with 40 precise holes',
      'Highly visible optic yellow color'
    ],
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: '002 STR',
    category: 'Professional',
    price: 130,
    images: [ballStrAd, '/str-sports-ad-poster.png', ballPreAd, ballStrAd],
    description: 'The perfect ball for drills, practice sessions, and recreational games. Built specifically to offer slightly more bounce forgiveness while retaining the authentic feel of a match ball. Great for extended practice sessions.',
    features: [
      'Extended durability for repeated drills',
      'Softer composite ideal for practice',
      'Visible vibrant color',
      'Indoor and outdoor versatility'
    ],
    rating: 4.8,
    reviews: 64,
  },
  {
    id: 3,
    name: 'Genesis Series Edition',
    category: 'Exclusive Collection',
    images: ['/upcoming-1.png'],
    description: 'This exclusive limited edition drop is built to elevate your performance. Crafted with the finest materials and cutting-edge engineering, you can experience unparalleled control and power. Stay tuned for the official launch date.',
    features: [
      'Limited production run',
      'Advanced carbon technology',
      'Ergonomic grip design',
      'Unmatched power and control'
    ],
    upcoming: true
  },
  {
    id: 4,
    name: 'Court Signature Gear',
    category: 'Apparel',
    images: ['/upcoming-2.png'],
    description: 'Designed for optimal movement and breathability on the court. Our signature gear represents the pinnacle of athletic wear, combining sleek aesthetics with unparalleled comfort for serious competitors.',
    features: [
      'Moisture-wicking fabric',
      'Four-way stretch for maximum mobility',
      'Premium stitching and durability',
      'Signature court design'
    ],
    upcoming: true
  },
  {
    id: 5,
    name: 'Pro Tour Prototype',
    category: 'Equipment',
    images: ['/upcoming-3.png'],
    description: 'A sneak peek into the future of pro tours. This prototype equipment features the latest innovations in court technology, providing a professional-grade experience that dominates the game.',
    features: [
      'Pro-tour tested prototype design',
      'Engineered for competitive advantage',
      'Exclusive premium finish',
      'Next-generation balance and precision'
    ],
    upcoming: true
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { items, addItem, removeItem, updateQuantity } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  
  const product = allProducts.find(p => p.id === Number(id)) || allProducts[0];
  const relatedProducts = allProducts.filter(p => p.id !== product.id);

  const cartItem = items.find(i => i.id === product.id);
  const isInCart = !!cartItem;

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-6">
            
            {/* Breadcrumb */}
            <div className="text-sm font-body text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>{product.category}</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">{product.name}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Product Images (Scrollable / Selectable) */}
              <div className="flex flex-col-reverse lg:flex-row gap-6">
                <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:w-24 pb-4 lg:pb-0 scrollbar-hide">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx} 
                      className={`flex-shrink-0 w-20 h-24 lg:w-24 lg:h-32 border-2 ${activeImage === idx ? 'border-primary' : 'border-border'} overflow-hidden rounded bg-secondary transition-all`}
                      onClick={() => setActiveImage(idx)}
                    >
                      <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                
                <div className="flex-1 aspect-square bg-secondary rounded overflow-hidden relative border border-border">
                  <img 
                    src={product.images[activeImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover animate-fade-in"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <span className="font-body text-sm uppercase tracking-widest text-primary mb-2">
                  {product.category}
                </span>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  {product.upcoming ? (
                    <div className="inline-block bg-primary text-primary-foreground px-4 py-2 font-body text-sm uppercase tracking-wider rounded">
                      Coming Soon
                    </div>
                  ) : (
                    <>
                      <div className="flex text-primary">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={20} fill={star <= Math.floor(product.rating) ? 'currentColor' : 'none'} />
                        ))}
                      </div>
                      <span className="font-body text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </>
                  )}
                </div>

                {!product.upcoming && (
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-display text-3xl md:text-4xl text-foreground">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-xl text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                )}

                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-display text-xl mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground font-body">
                        <Check className="text-primary mt-1 shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart Actions or Coming Soon message */}
                <div className="mt-auto pt-8 border-t border-border">
                  {product.upcoming ? (
                    <div className="w-full py-4 text-center border border-border rounded bg-secondary/30">
                      <span className="font-display text-2xl tracking-widest text-muted-foreground">
                        LAUNCHING SOON
                      </span>
                    </div>
                  ) : (
                    <>
                      {!isInCart ? (
                        <Button 
                          className="w-full h-14 text-lg gap-3 transition-all hover:scale-[1.02]"
                          onClick={() => addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0],
                            quantity: 1
                          })}
                        >
                          <ShoppingCart size={20} />
                          Add to Cart
                        </Button>
                      ) : (
                        <div className="flex items-center justify-between border border-border rounded h-14 bg-secondary/30 animate-fade-in shadow-inner">
                          <button 
                            className="px-6 font-display text-2xl hover:bg-secondary transition-colors h-full rounded-l"
                            onClick={() => {
                              if (cartItem.quantity <= 1) {
                                removeItem(product.id);
                              } else {
                                updateQuantity(product.id, cartItem.quantity - 1);
                              }
                            }}
                          >
                            -
                          </button>
                          <div className="flex flex-col items-center justify-center pointer-events-none">
                            <span className="font-display text-xl leading-none">{cartItem.quantity}</span>
                            <span className="font-body text-[10px] uppercase tracking-widest text-primary font-medium mt-1">In Cart</span>
                          </div>
                          <button 
                            className="px-6 font-display text-xl hover:bg-secondary transition-colors h-full rounded-r"
                            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {!product.upcoming && (
                  <div className="mt-8 flex gap-6 font-body text-sm text-muted-foreground border-t border-border pt-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Free Shipping
                    </div>
                  </div>
                )}

              </div>
            </div>
            
            {/* Products You May Also Like */}
            {relatedProducts.length > 0 && (
              <div className="mt-32 border-t border-border pt-24">
                <div className="text-center mb-16">
                  <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
                    More to explore
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground">
                    YOU MAY ALSO LIKE
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                  {relatedProducts.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id} className="group relative bg-card hover-lift max-w-sm mx-auto w-full">
                      <div className="relative overflow-hidden bg-secondary aspect-square">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 border-t border-border text-center">
                        <span className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                          {p.category}
                        </span>
                        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <span className="font-display text-xl text-foreground">
                          {p.upcoming ? 'COMING SOON' : `₹${p.price}`}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
