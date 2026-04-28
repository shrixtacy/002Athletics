import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

const features = [
  {
    image: '/str-slot-1.png',
    title: 'Precise Control',
    description: 'Engineered for pinpoint accuracy, delivering consistent shot placement every time.',
  },
  {
    image: '/002 str ball slot 2.png',
    title: 'Durability Enhanced',
    description: 'Built to endure the most intense rallies without compromising performance.',
  },
  {
    image: '/str-slot-3.png',
    title: 'Optimal Weight',
    description: 'Perfectly balanced for maximum swing speed and effortless court coverage.',
  },
];

const StrBallPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />

      {/* Banner */}
      <div className="w-full pt-16">
        <img
          src="/str-sports-ad-poster.png"
          alt="002 STR Ball Banner"
          className="w-full object-cover max-h-[85vh]"
        />
      </div>

      {/* Description */}
      <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-6xl mb-6 uppercase tracking-tight">002 STR</h1>
        <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
          The 002 STR pickleball is built for speed and competitive edge. Engineered with advanced polymer
          technology, the STR ball offers exceptional responsiveness, tight spin control, and a lively bounce
          that keeps the game fast and exciting. Designed for players who play to win.
        </p>
      </div>

      {/* 3-Column Feature Grid */}
      <div className="container mx-auto px-6 pb-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-4">
              <div className="w-full overflow-hidden rounded-sm">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Now CTA */}
      <div className="w-full bg-foreground text-background py-20 flex flex-col items-center gap-6 text-center px-6">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">Ready to Play?</h2>
        <p className="font-body text-background/70 max-w-md text-base">
          Get your 002 STR balls and dominate the court.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-2 px-10 py-4 bg-background text-foreground font-display uppercase tracking-widest text-sm hover:bg-background/90 transition-colors duration-300"
        >
          Shop Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default StrBallPage;
