import React from 'react';
import { useEffect } from 'react';


function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById('scrollingImage');
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const maxMove = 200; // Maximum movement in pixels
      const move = maxMove * scrollPercentage;
      
      // Update image position
      image.style.transform = `translate(-${move}px, 0%)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="text-white py-16 relative overflow-hidden">

      {/* Background image. Maybe flashing lights on front */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" id="scrollingImage"
        style={{
          backgroundImage: "url('/truck_obj.png')",
          backgroundPosition: '25vw -7vw', // Shift the image to the right  
          zIndex: 0

        }}
      ></div>

      {/* still background img */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ 
        backgroundImage: "url('/truck_objbg.png')", 
        zIndex: -1,
        backgroundPosition: '200px -200px', // Shift the image to the right
      }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-30%  from-white"></div>
  
      {/* Content container */}
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between" style={{ position: 'relative' }}>
        <div className="flex-1 m-8 px-px md:px-0">
          <h1 className="text-[#182A47] text-4xl md:text-5xl font-bold mb-4">Efficient Logistics & Transportation Solutions</h1>
          <p className="text-[#182A47]/75 mb-8 text-xl">Your trusted partner in seamless and reliable logistic services, ensuring your goods arrive safely and on time.</p>
          <a href="#contact" className="bg-yellow-500 text-gray-800 py-3 px-6 rounded-lg font-bold text-lg">Get a Quote</a>
        </div>
        <div className="flex-1">
          {/* Optionally, you can include an image here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
