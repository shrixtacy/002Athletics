import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tournament Player',
    content: 'The Carbon Elite Pro transformed my game. The control and power balance is unlike anything I\'ve used before. Worth every penny.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Club Champion',
    content: 'Fast shipping, incredible quality. PicklePro\'s customer service went above and beyond. My go-to for all pickleball gear.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Recreational Player',
    content: 'As a beginner, I wasn\'t sure what to get. Their team helped me pick the perfect paddle for my skill level. Now I\'m hooked!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.2);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Header */}
          <div 
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`scroll-slide-left ${leftVisible ? 'visible' : ''}`}
          >
            <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              WHAT PLAYERS SAY
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-md">
              Don't just take our word for it. Here's what our community of players 
              has to say about PicklePro gear.
            </p>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div 
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`relative scroll-slide-right ${rightVisible ? 'visible' : ''}`}
          >
            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-beige -z-10" />
            
            <div className="bg-background border-2 border-foreground p-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center font-display text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-xl text-foreground">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 transition-all ${
                      index === activeIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
