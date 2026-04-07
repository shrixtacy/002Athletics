import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/002-logo.png';
import whiteLogo from '@/assets/white-002-logo.png';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/CartContext';
import ballPreAd from '@/assets/ball-pre-ad.png';
import ballStrAd from '@/assets/ball-str-ad.png';

const navLinks = ['Contact', 'About'];

const pickleballProducts = [
  { id: 1, name: '002 PRE', image: ballPreAd },
  { id: 2, name: '002 STR', image: ballStrAd }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { items } = useCart();
  const cartItemCount = items.length;
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = !isHomePage || isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-custom ${isScrolled && !isMobileMenuOpen ? 'py-3 px-2 md:px-6' : 'py-0 px-0'
        }`}
    >
      <div
        className={`transition-all duration-700 ease-custom ${isScrolled
          ? `mx-auto max-w-4xl backdrop-blur-md border border-border shadow-lg px-4 md:px-6 py-3 ${isMobileMenuOpen ? 'w-full rounded-none bg-background border-t-0 border-x-0' : 'w-full rounded-[2rem] bg-background/95'}`
          : `w-full px-6 py-4 ${isMobileMenuOpen || !isHomePage ? 'bg-background' : 'bg-transparent'}`
          }`}
      >
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 transition-opacity hover:opacity-80">
            <img
              src={isDarkText ? logo : whiteLogo}
              alt="002Athletics"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
            <span
              className={`font-display text-lg sm:text-2xl md:text-4xl tracking-wider whitespace-nowrap transition-all duration-700 ease-custom 
                ${isScrolled ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}
                ${isDarkText ? 'text-foreground' : 'text-white'}`}
            >
              zero zero two
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 font-body text-sm uppercase tracking-widest transition-colors animated-underline
                  ${isDarkText ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                Pickleball <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Desktop Dropdown */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {pickleballProducts.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-secondary transition-colors"
                  >
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded bg-secondary" />
                    <span className="font-body text-sm text-foreground">{product.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                className={`font-body text-sm uppercase tracking-widest transition-colors animated-underline
                  ${isDarkText ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative ${isDarkText ? '' : 'text-white hover:text-white hover:bg-white/20'}`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center animate-scale-in">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="hero" size="sm">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute right-0 md:hidden flex items-center gap-4">
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative ${isDarkText ? 'text-foreground' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <button
              className={`${isDarkText ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              
              <div className="flex flex-col gap-2">
                <span className="font-body text-lg uppercase tracking-widest text-primary mb-2">Pickleball</span>
                {pickleballProducts.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-2 pl-4 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded bg-secondary" />
                    <span className="font-body text-base text-foreground/80 hover:text-primary transition-colors">{product.name}</span>
                  </Link>
                ))}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="font-body text-lg uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" className="mt-4 w-full">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
