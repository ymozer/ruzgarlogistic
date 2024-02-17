import React from 'react';
import HorizontalScroll from './hs';



function Hero() {
  return (
<<<<<<< HEAD
    <div className="w-full relative py-16 overflow-auto">
      {/* Background image. Maybe flashing lights on front 
      <div className="">
        <ScrollAnimation />
      </div>
*/}
      {/* still background img */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-truck-bg z-[-1]"></div>
=======
    <div className="text-white py-16 relative overflow-hidden">

      {/* Background image. Maybe flashing lights on front */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" id="scrollingImage"
        style={{
          backgroundImage: "url('/static/truck_obj.png')",
          backgroundPosition: '25vw -7vw', // Shift the image to the right  
          zIndex: 0

        }}
      ></div>

      {/* still background img */}
      <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ 
        backgroundImage: "url('/static/truck_objbg.png')", 
        zIndex: -1,
        backgroundPosition: '200px -200px', // Shift the image to the right
      }}
      ></div>
>>>>>>> b007f02f5ffef04d7e0c8991f0f46897464e666a

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-50% md:from-30% from-white"></div>

      {/* Content container
        TODO: remove mx auto
      */}
      <div className="ml-4 flex justify-end flex-row items-stretch sm:flex-row" style={{ position: 'relative' }}>
        <div className="flex-1 ml-8">
          <h1 className="text-[#182A47] text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Efficient Logistics & Transportation Solutions</h1>
          <p className="text-[#182A47]/75 mb-8 text-xl sm:text-l md:text-xl lg:text-2xl">Your trusted partner in seamless and reliable logistic services, ensuring your goods arrive safely and on time.</p>
          <div className="flex space-x-4 mb-8">
            <a href="https://wa.me/905331394920?text=Hello, I'm interested in your logistics services. Could you provide more information?"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg transition duration-300 ease-in-out shadow-md"
              target="_blank"
              rel="noreferrer">
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              <span className="ml-2">WhatsApp</span>
            </a>

          </div>

        </div>

        <div className="flex-1 flex justify-end items-end">
          <HorizontalScroll />
        </div>
      </div>



    </div>
  );
}

export default Hero;
