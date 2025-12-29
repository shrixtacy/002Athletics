import { useEffect, useState } from 'react';
import pickleballBg from '../assets/pickleball png.png';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    // Use CSS for smooth "lag" effect rather than complex JS Spring
    // transition-transform duration-100 ease-out gives a nice floaty feel
    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                // Offset calculation: 
                // X: centered on cursor (position.x) -> translate(-50%)
                // Y: above cursor (position.y) -> translate(-120%) to float above
                // Rotation: slight tilt based on X position for "swinging" feel (position.x % 20 - 10)
                transform: `
                    translate3d(${position.x}px, ${position.y}px, 0) 
                    translate(-50%, -120%) 
                    rotate(${position.x * 0.05}deg)
                `,
                // Increased duration for "delay/swing" feel
                transition: 'transform 0.15s ease-out, opacity 0.3s ease',
            }}
        >
            <img
                src={pickleballBg}
                alt="Custom Cursor"
                className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-xl"
            />
        </div>
    );
};

export default CustomCursor;
