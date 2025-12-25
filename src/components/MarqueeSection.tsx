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
    <section className="bg-foreground text-background py-4 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-[marquee_20s_linear_infinite]">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="font-display text-lg tracking-wider mx-6"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_20s_linear_infinite]">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="font-display text-lg tracking-wider mx-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
