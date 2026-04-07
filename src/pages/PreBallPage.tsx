import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

const features = [
  {
    image: '/pre-slot-1.png',
    title: 'Premium Material',
    description: 'Crafted from high durability polymer material engineered to withstand intense play and deliver consistent performance every match.',
  },
  {
    image: '/pre-slot-2.png',
    title: 'Optimized Flight',
    description: 'Precision-drilled holes and aerodynamic design ensure true, predictable flight paths for accurate shots and reliable control.',
  },
  {
    image: '/pre-slot-3.png',
    title: 'Optimized Durability',
    description: 'Crafted from high durability polymer material — built to last through countless rallies without losing its shape or bounce.',
  },
];

const PreBallPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />

      {/* Banner */}
      <div className="w-full pt-16">
        <img
          src="/pre-sports-ad-poster.png"
          alt="002 PRE Ball Banner"
          className="w-full object-cover max-h-[85vh]"
        />
      </div>

      {/* Description */}
      <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-6xl mb-6 uppercase tracking-tight">002 PRE</h1>
        <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
          The 002 PRE pickleball is engineered for durability and precision. Designed for players who demand
          consistent performance, the PRE ball delivers reliable flight, true bounce, and long-lasting resilience
          across every surface. Whether you're drilling or competing, the PRE is built to keep up.
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
          Get your 002 PRE balls and take your game to the next level.
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

export default PreBallPage;
