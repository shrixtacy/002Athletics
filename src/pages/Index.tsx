import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroParallax from '@/components/HeroParallax';
import FeaturedProducts from '@/components/FeaturedProducts';
import MarqueeSection from '@/components/MarqueeSection';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CategoriesSection from '@/components/CategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-background ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <HeroParallax />
        <FeaturedProducts />
        <MarqueeSection />
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
