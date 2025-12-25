import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <h2 
            className={`font-display text-5xl md:text-7xl mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-md'}`}
            style={{ transitionDelay: '100ms' }}
          >
            JOIN THE CLUB
          </h2>
          <p 
            className={`font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Subscribe to our newsletter for exclusive deals, new product launches, 
            and pro tips delivered straight to your inbox.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form 
              onSubmit={handleSubmit} 
              className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:outline-none focus:border-primary-foreground transition-all duration-300 focus:scale-[1.02]"
                required
              />
              <Button 
                type="submit"
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          ) : (
            <div 
              className="flex items-center justify-center gap-3 text-primary-foreground animate-scale-in"
            >
              <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center animate-bounce">
                <Check className="h-5 w-5" />
              </div>
              <span className="font-body text-lg">Thanks for subscribing!</span>
            </div>
          )}

          {/* Trust Badges */}
          <div 
            className={`flex flex-wrap justify-center gap-8 mt-12 text-primary-foreground/60 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            {['No Spam', 'Unsubscribe Anytime', 'Exclusive Offers'].map((badge, index) => (
              <span 
                key={badge}
                className={`font-body text-sm uppercase tracking-wider transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {badge}
                {index < 2 && <span className="ml-8">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
