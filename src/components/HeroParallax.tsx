import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroParallax = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative md:h-[100dvh] w-full flex flex-col">

            {/* Mobile: stacked images */}
            <div className="md:hidden flex flex-col w-full">
                <Link to="/pre">
                    <img src="/front-cover-1.png" alt="002 PRE" className="w-full h-auto block" />
                </Link>
                <Link to="/str">
                    <img src="/front-cover-2.png" alt="002 STR" className="w-full h-auto block" />
                </Link>
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
