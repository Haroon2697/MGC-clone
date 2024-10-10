import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(value / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
};

const Card = ({ number, label, Icon }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 sm:p-8 md:p-10 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <div className="text-black mb-4">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">
        <AnimatedCounter value={number} />
      </div>
      <div className="text-lg sm:text-xl md:text-2xl text-black">{label}</div>
    </div>
  );
};

export default Card;
