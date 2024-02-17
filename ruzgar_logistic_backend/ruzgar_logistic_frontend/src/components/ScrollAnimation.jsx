import React, { useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';

const ScrollAnimation = () => {
  // State to hold the scroll Y position
  const [scrollY, setScrollY] = useState(0);

  // React Spring animation hook
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Calculate how much to translate the image based on scroll position
    // Adjust the divisor to control the speed of the animation
    const translateX = scrollY *5;

    // Update the React Spring animation
    set({ x: translateX });
  }, [scrollY, set]);

  return (
    <a.div 
      style={{
        transform: x.to(x => `translate3d(-${x}px, 0, 0)`),
      }}
      className="absolute inset-0 bg-cover bg-no-repeat bg-(url('/public/3d-render-cargo-delivery-truck.png')) z-0"
    />
  );
};

export default ScrollAnimation;
