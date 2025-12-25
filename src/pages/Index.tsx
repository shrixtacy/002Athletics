import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MarqueeSection from '@/components/MarqueeSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturesSection from '@/components/FeaturesSection';
import CategoriesSection from '@/components/CategoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-background overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MarqueeSection />
        <FeaturedProducts />
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
