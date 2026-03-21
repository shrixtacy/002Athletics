import { useEffect, useState, useRef } from 'react';
import pickleballBg from '../assets/pickleball png.png';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const isClickable = 
                target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';
                
            setIsPointer(isClickable);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        let animationFrameId: number;

        const animate = () => {
            // LERP for smooth delay/drag effect
            positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
            positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

            if (cursorRef.current) {
                // Rotation gives a natural rolling effect while dragging
                const rotation = positionRef.current.x * 0.5;
                
                cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <img
                src={pickleballBg}
                alt="Custom Cursor"
                className={`w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-xl transition-transform duration-300 ease-out ${isPointer ? 'scale-125' : 'scale-100'}`}
            />
        </div>
    );
};

export default CustomCursor;
