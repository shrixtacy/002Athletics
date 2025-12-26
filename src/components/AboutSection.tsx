import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const historyCards = [
  {
    year: '1965',
    title: 'THE BIRTH',
    description: 'Pickleball was invented on Bainbridge Island, Washington by three dads — Joel Pritchard, Bill Bell, and Barney McCallum — looking to entertain their bored children during summer.',
    color: 'bg-beige',
  },
  {
    year: '1967',
    title: 'FIRST COURT',
    description: 'The first permanent pickleball court was built in the backyard of Joel Pritchard\'s neighbor. The game started spreading through friends and family across the Pacific Northwest.',
    color: 'bg-background',
  },
  {
    year: '1972',
    title: 'OFFICIAL RULES',
    description: 'A corporation was formed to protect the sport, and official rules were established. The first rulebook was published, standardizing the game for players everywhere.',
    color: 'bg-beige',
  },
  {
    year: '1984',
    title: 'NATIONAL ASSOCIATION',
    description: 'The USA Pickleball Association (USAPA) was organized to promote the growth and development of pickleball on a national level.',
    color: 'bg-background',
  },
  {
    year: '2024',
    title: 'GLOBAL PHENOMENON',
    description: 'Pickleball is now the fastest-growing sport in America with over 36 million players. Courts are popping up worldwide, and professional tournaments offer millions in prizes.',
    color: 'bg-primary',
    textLight: true,
  },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [emblaRef] = useEmblaCarousel({ align: 'start', dragFree: true });

  return (
    <section id="about" className="relative bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-6 py-24 text-center">
        <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
          Our Story
        </span>
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
          THE HISTORY OF <span className="text-primary">PICKLEBALL</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          From a backyard game to a global phenomenon. Discover how pickleball became
          the fastest-growing sport in America.
        </p>
      </div>

      {/* Universal Horizontal Carousel */}
      <div className="mb-24 pl-4 md:pl-0">
        <div className="overflow-hidden md:cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-4 md:gap-8 md:px-8">
            {historyCards.map((card, index) => (
              <div
                key={card.year}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 relative"
              >
                <div
                  className={`${card.color} w-full h-full border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] md:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] p-6 md:p-10 transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div className="relative">
                      <div
                        className={`font-display text-5xl md:text-7xl leading-none ${card.textLight ? 'text-primary-foreground/20' : 'text-foreground/10'
                          }`}
                      >
                        {card.year}
                      </div>
                      <h3
                        className={`font-display text-3xl md:text-4xl mb-2 mt-2 ${card.textLight ? 'text-primary-foreground' : 'text-foreground'
                          }`}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p
                      className={`font-body text-base md:text-lg leading-relaxed ${card.textLight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                  {/* Decorative Elements */}
                  <div
                    className={`absolute top-4 right-4 w-4 h-4 md:w-6 md:h-6 border-2 ${card.textLight ? 'border-primary-foreground/30' : 'border-foreground/20'
                      }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="container mx-auto px-6 pb-24 text-center">
        <div className="inline-flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary" />
          <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
            And the journey continues
          </span>
          <div className="w-12 h-[2px] bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
