import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: ['Paddles', 'Balls', 'Accessories', 'Apparel', 'Bundles'],
    support: ['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Size Guide'],
    company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Partners'],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="font-display text-4xl tracking-wider">
              PICKLE<span className="text-primary">PRO</span>
            </a>
            <p className="font-body text-background/60 mt-4 max-w-sm leading-relaxed">
              Premium pickleball equipment for players who demand excellence. 
              Elevate your game with professional-grade gear.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a href="mailto:hello@picklepro.com" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-body text-sm">hello@picklepro.com</span>
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-body text-sm">1-800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-background/60">
                <MapPin className="h-5 w-5" />
                <span className="font-body text-sm">Austin, Texas</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display text-xl mb-6">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-xl mb-6">SUPPORT</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-xl mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-sm text-background/60">
              © {currentYear} PicklePro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
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
