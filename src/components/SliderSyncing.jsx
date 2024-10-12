"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Replace with your actual image paths
const slides = [
  { src: "./src/assets/Slider1.png", caption: 'Caption for image one.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image two.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image three.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image four.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image five.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image six.' },
  { src: "./src/assets/Slider1.png", caption: 'Caption for image seven.' },
];

const SliderSyncing = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl slider-heading font-semibold text-center my-8">
        <span className="font-normal">Our</span> Projects
      </h1>

      <div className="relative">
        {/* Main Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={slide.src} alt={slide.caption} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white hover:bg-white/20 transition duration-200"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white hover:bg-white/20 transition duration-200"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-16 ${activeSlide === index ? 'ring-2 ring-green-700' : 'opacity-80'}`} // Changed to green-700
          >
            <img src={slide.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Button component defined in the same file
const Button = ({ variant = "solid", size = "md", className, children, ...props }) => {
  return (
    <button
      className={`${className} ${variant === "outline" ? "border border-gray-300" : "bg-blue-500 text-white"} py-2 px-4 rounded`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SliderSyncing;
