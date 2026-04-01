import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroParallax = () => {
    const [scrollY, setScrollY] = useState(0);
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
        Autoplay({ delay: 3000, stopOnInteraction: false }),
    ]);

    const mobileSlides = [
        { image: '/mobile-hero-1.png', link: '/product/1' },
        { image: '/mobile-hero-2.png', link: '/product/2' },
        { image: '/mobile-hero-3.png', link: '/product/3' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-[100dvh] w-full">
            {/* Mobile Slideshow */}
            <div className="md:hidden absolute inset-0 w-full h-full">
                <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                    <div className="flex h-full w-full">
                        {mobileSlides.map((slide, index) => (
                            <Link to={slide.link} className="flex-[0_0_100%] min-w-0 relative h-full block group" key={index}>
                                <img
                                    src={slide.image}
                                    alt={`Mobile Hero ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors duration-700" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Setup */}
            <div className="hidden md:flex flex-col h-full w-full">
                {/* Top Section */}
                <Link 
                    to="/product/1" 
                    className="flex-1 relative overflow-hidden group border-b border-border/20"
                >
                    <img 
                        src="/front-cover-1.png" 
                        alt="002 PRE" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        style={{
                            transform: `translateY(${scrollY * 0.15}px) scale(1.05)`
                        }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                </Link>

                {/* Bottom Section */}
                <Link 
                    to="/product/2" 
                    className="flex-1 relative overflow-hidden group"
                >
                    <img 
                        src="/front-cover-2.png" 
                        alt="002 STR" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        style={{
                            transform: `translateY(${scrollY * 0.1}px) scale(1.05)`
                        }}
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
