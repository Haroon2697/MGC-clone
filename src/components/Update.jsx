import React from 'react';

const newsItems = [
  {
    image: "/images/building01.jpg", 
    title: "Lorem ipsum dolor sit,",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
  {
    image: "/images/building02.jpg",  
    title: "Lorem ipsum dolor sit,",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
  {
    image: "/images/building03.jpg",  
    title: "Lorem ipsum dolor sit,",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
];

const Update = () => {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-16 bg-white">
      <div className="relative max-w-6xl mx-auto h-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-sans text-center mb-8 sm:mb-12">
          <span className="text-amber-500">NEWS</span>/UPDATES
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden group transition-shadow duration-300 ease-in-out shadow-custom-light hover:shadow-custom-shadow"
            >
              {/* Responsive image container */}
              <div className="relative aspect-[3/4]"> 
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Update;
