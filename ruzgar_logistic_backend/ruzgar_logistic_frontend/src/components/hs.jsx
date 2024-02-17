import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const HorizontalScroll = () => {
    const [props, set] = useSpring(() => ({
        transform: 'translateX(0px)',
        config: { mass: 1, tension: 50, friction: 10 },
    }));

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY; // Get scroll position
            
            if (window.innerWidth < 640) {
                set({ transform: `translateX(${position * -0.6}%)` }); // Update position based on scroll
            }
            if (window.innerWidth > 640) {
                set({ transform: `translateX(${position * -1.7}%)` }); // Update position based on scroll
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [set]);


    return (
        <div className="flex overflow-x-hidden space-x-[50%]">
            {[...Array(3).keys()].map((index) => (
                <div
                    key={index}
                    className={`flex-none flex items-end justify-between ${index === 2 ? 'animated-item' : ''}`}
                >
                    {index === 2 ? (
                        <animated.div style={props}>
                            <img src="/3d-render-cargo-delivery-truck.png" alt="Image by kjpargeter on Freepik" className="size-1/3" />
                        </animated.div>
                    ) : (
                        ``
                    )}
                </div>
            ))}
        </div>
    );
};

export default HorizontalScroll;
