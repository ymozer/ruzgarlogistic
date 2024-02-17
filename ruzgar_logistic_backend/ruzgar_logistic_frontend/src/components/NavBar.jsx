import React from 'react';
//svg
const Navbar = () => {
    return (
      <nav className="flex items-center justify-between bg-gray-100 px-4 py-2 relative">
        <div className="flex-none w-14 h-14">
          <div onMouseEnter={(e) => e.currentTarget.firstChild.classList.add('animate-slide')} onMouseLeave={(e) => e.currentTarget.firstChild.classList.remove('animate-slide')}>
            <div className="transition-transform duration-500"> 
              <img src="/android-chrome-192x192.png" alt="Rüzgar Lojistik" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-32 title text-center" style={{ zIndex: 20 }}>
          <h1 className="text-lg text-[#ff0000] font-bold">!!! UNDER DEVELOPMENT !!!</h1>
          <h1 className="text-lg font-bold">Rüzgar Lojistik</h1>
        </div>
        <div className="flex-none w-14 h-14"></div> {/* Maintains the title's centered position */}
      </nav>
    );
  };

export default Navbar;

