import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useScrollAnimation(0.1);

  const footerLinks = {
    shop: ['Paddles', 'Balls', 'Accessories', 'Apparel', 'Bundles'],
    support: ['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Size Guide'],
    company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Partners'],
  };

  const socialIcons = [Instagram, Twitter, Facebook, Youtube];

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="bg-foreground text-background"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className={`font-display text-4xl tracking-wider inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              002<span className="text-primary">ATHLETICS</span>
            </a>
            <p
              className={`font-body text-background/60 mt-4 max-w-sm leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Premium pickleball equipment for players who demand excellence.
              Elevate your game with professional-grade gear.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, text: 'hello@002athletics.com', href: 'mailto:hello@002athletics.com' },
                { icon: Phone, text: '1-800-123-4567', href: 'tel:+18001234567' },
                { icon: MapPin, text: 'Austin, Texas', href: null },
              ].map((item, index) => (
                <a
                  key={item.text}
                  href={item.href || '#'}
                  className={`flex items-center gap-3 text-background/60 hover:text-primary transition-all duration-300 hover:translate-x-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-body text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {[
            { title: 'SHOP', links: footerLinks.shop },
            { title: 'SUPPORT', links: footerLinks.support },
            { title: 'COMPANY', links: footerLinks.company },
          ].map((column, colIndex) => (
            <div key={column.title}>
              <h4
                className={`font-display text-xl mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                style={{ transitionDelay: `${400 + colIndex * 100}ms` }}
              >
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={link}
                    className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${500 + colIndex * 100 + linkIndex * 50}ms` }}
                  >
                    <a
                      href="#"
                      className="font-body text-sm text-background/60 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p
              className={`font-body text-sm text-background/60 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              © {currentYear} 002Athletics. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div
              className={`flex items-center gap-6 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <a href="#" className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
