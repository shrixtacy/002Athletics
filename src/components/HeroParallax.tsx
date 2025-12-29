import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import whiteLogo from '../assets/white-002-logo.png';
import bg1 from '../assets/Gemini_Generated_Image_vnluh9vnluh9vnlu.png';
import bg2 from '../assets/Gemini_Generated_Image_xzd0dwxzd0dwxzd0.png';
import bg3 from '../assets/hero-bg-3.jpeg';
import mobileBg1 from '../assets/Gemini_Generated_Image_diar0mdiar0mdiar.png';
import mobileBg2 from '../assets/Gemini_Generated_Image_hxz049hxz049hxz0.png';
import mobileBg3 from '../assets/Gemini_Generated_Image_qdl2v0qdl2v0qdl2.png';

const HeroParallax = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    ]);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const slides = [
        { desktop: bg1, mobile: mobileBg1 },
        { desktop: bg2, mobile: mobileBg2 },
        { desktop: bg3, mobile: mobileBg3 },
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Carousel with Parallax */}
            <div
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            >
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {slides.map((slide, index) => (
                            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                                <picture className="w-full h-full block">
                                    <source media="(max-width: 768px)" srcSet={slide.mobile} />
                                    <img
                                        src={slide.desktop}
                                        alt={`Hero Background ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </picture>
                                {/* Overlay for better text/logo visibility */}
                                <div className="absolute inset-0 bg-black/30" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Centered Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div
                    className="relative w-[300px] md:w-[500px] lg:w-[600px] opacity-90 hover:opacity-100 transition-opacity duration-700"
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`
                    }}
                >
                    <img
                        src={whiteLogo}
                        alt="002 Athletics"
                        className="w-full h-auto drop-shadow-2xl animate-fade-in"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2" />
                </div>
            </div>
        </div>
    );
};

export default HeroParallax;
