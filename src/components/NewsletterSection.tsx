import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            JOIN THE CLUB
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive deals, new product launches, 
            and pro tips delivered straight to your inbox.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:outline-none focus:border-primary-foreground"
                required
              />
              <Button 
                type="submit"
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center">
                <Check className="h-5 w-5" />
              </div>
              <span className="font-body text-lg">Thanks for subscribing!</span>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-primary-foreground/60">
            <span className="font-body text-sm uppercase tracking-wider">No Spam</span>
            <span>•</span>
            <span className="font-body text-sm uppercase tracking-wider">Unsubscribe Anytime</span>
            <span>•</span>
            <span className="font-body text-sm uppercase tracking-wider">Exclusive Offers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
