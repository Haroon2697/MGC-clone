import React, { useEffect, useState } from 'react';
import { Building2, Users, Briefcase } from 'lucide-react';

const Counter = ({ endCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / endCount));
    let currentCount = 0;

    const interval = setInterval(() => {
      if (currentCount < endCount) {
        currentCount++;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [endCount]);

  return <div className="text-2xl sm:text-3xl font-bold mb-2">{count}+</div>;
};

export default function Whychooseus() {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-between">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/eef1/38df/ce37fdb2af89b594e8882ad3ae0b769a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dlL4oiEp4e7hXQeWwcxPBclSqEDDpSwct2j7AeDdD0lb26E0fSr6ZJRTxgOtgw7U~nCodrYSgQ2PV7QHTW7xuQ71ea-QxWBDIKibp6TLpBNvHEeB9EQe1Y3BMS1qY2EIJIiL6yoz5xd3XtIBFZ3Xg4flcbWdAbFD2jV5NvBty5fs8dGY6QOE1zR2ZuOLbXxtIkRri0Ba336P0wLobO~lw4R8vLCkBrdUn7ta1VyHmo0gqgvetIZyP6a9QkZgA~supsQ7KKyCjsSutk2F-Xch5~D7llNmc5iY6dRyFSYw7LKMTQFbl-SXHpNKaHeuSZlKD4RS5oOZWZFe8-roxBo-5A__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/10 z-0"></div>
      
      <div className="relative z-10 flex-grow">
        <div className="container mx-auto max-w-6xl py-8 sm:py-12 md:py-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {[ 
              { icon: Building2, label: 'PROJECTS', count: 400 },
              { icon: Users, label: 'CLIENTS', count: 400 },
              { icon: Briefcase, label: 'WORK FORCE', count: 400 },
              { icon: Users, label: 'PARTNERS', count: 100 },
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg text-black text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-80">
                {React.createElement(item.icon, { className: 'w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-amber-500' })}
                <Counter endCount={item.count} />
                <div className="text-xs sm:text-sm text-gray-700">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="relative py-8 sm:py-12 md:py-16 mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2">
              UNLOCK <br />
              <span className="text-amber-500">PROSPERITY</span>
            </h3>
            <p className="text-amber-500 text-lg sm:text-xl mb-4">#FIRSTTIMEINPAKISTAN</p>
            <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 rounded-full hover:bg-amber-500 hover:border-amber-500 transition-colors duration-300 text-sm sm:text-base">
              Read More
            </button>
          </div>
        </div>

        <section className="py-8 sm:py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">JOIN US TODAY</h3>
            <p className="mb-6 sm:mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed text-sm sm:text-base">
              Experience the difference with MGC Developments and take the first step towards your future.
            </p>
            <button className="bg-amber-500 border border-amber-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-transparent hover:border-white transition-colors duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}