import { useState, useEffect } from 'react';
import logo from '@/assets/002-logo.png';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Paddles', 'Balls', 'Accessories', 'About'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-custom ${isScrolled ? 'py-3 px-6' : 'py-0 px-0'
        }`}
    >
      <div
        className={`transition-all duration-700 ease-custom ${isScrolled
          ? `mx-auto max-w-4xl backdrop-blur-md border border-border shadow-lg px-6 py-3 ${isMobileMenuOpen ? 'rounded-2xl bg-background' : 'rounded-full bg-background/95'}`
          : `container mx-auto px-6 py-4 ${isMobileMenuOpen ? 'bg-background' : 'bg-transparent'}`
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src={logo} alt="002Athletics" className="h-10 w-auto" />
            <span
              className={`font-display text-2xl tracking-wider text-foreground whitespace-nowrap transition-all duration-700 ease-custom 
                ${isScrolled ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}
            >
              002ATHLETICS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors animated-underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="hero" size="sm">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-in-left">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-lg uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button variant="hero" className="mt-4">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
