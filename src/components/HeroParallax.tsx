import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroParallax = () => {
    const [scrollY, setScrollY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-scroll carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 2);
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(interval);
    }, []);

    // Handle touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentSlide < 1) {
            setCurrentSlide(1);
        }
        if (isRightSwipe && currentSlide > 0) {
            setCurrentSlide(0);
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div className="relative md:h-[100dvh] w-full flex flex-col">

            {/* Mobile: carousel with images */}
            <div 
                className="md:hidden relative w-full overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Slide 1: PRE - cropped to match STR height */}
                    <Link to="/pre" className="min-w-full flex items-center justify-center bg-black">
                        <div className="w-full overflow-hidden">
                            <img 
                                src="/pre-slot-1.png" 
                                alt="002 PRE" 
                                className="w-full h-auto object-cover object-top"
                                style={{ 
                                    maxHeight: '95vh',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </Link>

                    {/* Slide 2: STR - use new image */}
                    <Link to="/str" className="min-w-full flex items-center justify-center bg-black">
                        <img 
                            src="/002 str ball slot 2.png" 
                            alt="002 STR" 
                            className="w-full h-auto object-contain"
                            style={{ maxHeight: '95vh' }}
                        />
                    </Link>
                </div>

                {/* Carousel indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {[0, 1].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'bg-white w-8' 
                                    : 'bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Swipe hint */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-widest z-20">
                    Swipe
                </div>
            </div>

            {/* Desktop: parallax two halves */}
            <div className="hidden md:flex flex-col h-full w-full">
                <Link
                    to="/pre"
                    className="flex-1 relative overflow-hidden group border-b border-border/20"
                >
                    <img
                        src="/front-cover-1.png"
                        alt="002 PRE"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        style={{ transform: `translateY(${scrollY * 0.15}px) scale(1.05)` }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </Link>

                <Link
                    to="/str"
                    className="flex-1 relative overflow-hidden group"
                >
                    <img
                        src="/front-cover-2.png"
                        alt="002 STR"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        style={{ transform: `translateY(${scrollY * 0.1}px) scale(1.05)` }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 pointer-events-none">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
                    <div className="w-1 h-2 bg-white rounded-full mt-2" />
                </div>
            </div>
        </div>
    );
};

export default HeroParallax;
