import React from 'react';

const logos = [
  'https://lazarev.kiev.ua/la24/forbes.svg',
  'https://lazarev.kiev.ua/la24/adweek.svg',
  'https://lazarev.kiev.ua/la24/pmi.svg',
  'https://lazarev.kiev.ua/la24/wf.svg',
  'https://lazarev.kiev.ua/la24/adweek.svg',
  'https://lazarev.kiev.ua/la24/rd.svg',
  'https://lazarev.kiev.ua/la24/pmi.svg',
  'https://lazarev.kiev.ua/la24/webby.svg',
];

const LogoMarquee = () => {
  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-green-600 font-semibold text-4xl">
          OUR BRANDS <span className="text-green-600 font-thin">COLLABORATION</span>
        </h1>
      </div>

      <div className="relative w-full bg-green-800 py-6 overflow-hidden">
        {/* Left Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 via-black/30 to-black/100 z-10"></div> 

        {/* Moving Logos */}
        <div className="flex animate-marquee">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 md:h-14 lg:h-16 w-auto mx-4 transition-transform duration-300 hover:scale-110"
            />
          ))}
          {logos.map((logo, index) => (  // Duplicate logos for continuous flow
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 md:h-14 lg:h-16 w-auto mx-4 transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black via-transparent to-transparent z-10"></div> 
      </div>
    </>
  );
};

export default LogoMarquee;
