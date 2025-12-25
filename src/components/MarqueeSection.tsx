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
    <div className="py-8 sm:py-12 overflow-hidden">
      <section className="relative -rotate-2 bg-foreground text-background py-6 sm:py-8">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-[marquee_20s_linear_infinite]">
            {[...items, ...items].map((item, index) => (
              <span
                key={index}
                className="font-display text-xl sm:text-3xl tracking-wider mx-4 sm:mx-8"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex animate-[marquee_20s_linear_infinite]">
            {[...items, ...items].map((item, index) => (
              <span
                key={index}
                className="font-display text-xl sm:text-3xl tracking-wider mx-4 sm:mx-8"
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
