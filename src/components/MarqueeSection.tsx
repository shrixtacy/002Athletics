const MarqueeSection = () => {
  const items = [
    'FREE SHIPPING OVER $100',
    '★',
    'PREMIUM QUALITY',
    '★',
    'PRO PLAYER APPROVED',
    '★',
    '30-DAY RETURNS',
    '★',
    'TOURNAMENT READY',
    '★',
  ];

  return (
    <div className="overflow-x-hidden w-full">
      <section className="relative -rotate-2 scale-105 bg-foreground text-background py-4 sm:py-6 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-[marquee_20s_linear_infinite]">
            {[...items, ...items].map((item, index) => (
              <span
                key={index}
                className="font-display text-lg sm:text-2xl tracking-wider mx-4 sm:mx-8"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex animate-[marquee_20s_linear_infinite]">
            {[...items, ...items].map((item, index) => (
              <span
                key={index}
                className="font-display text-lg sm:text-2xl tracking-wider mx-4 sm:mx-8"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueeSection;
