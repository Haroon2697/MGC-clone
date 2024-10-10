"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ahsan Kayani",
    image: "/images/boy1.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 4,
  },
  {
    name: "Sara Ali",
    image: "/images/girl1.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 5,
  },
  {
    name: "Haroon Aziz",
    image: "/images/boy2.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/images/girl2.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 5,
  },

  {
    name: "Ahsan Kayani",
    image: "/images/boy1.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 4,
  },
  {
    name: "Sana Ahmed",
    image: "/images/girl1.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 5,
  },
  {
    name: "John Doe",
    image: "/images/boy2.jpg",
    quote: "Consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt. Consectetur adipiscing elit.",
    rating: 3,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Piccard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  // Calculate the visible testimonials based on the current index
  const visibleTestimonials = [
    testimonials[(currentIndex + 0) % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
    testimonials[(currentIndex + 3) % testimonials.length],
  ];

  return (
    <div className="text-center p-6 font-sans">
      <h2 className="text-3xl font-bold mb-24">
        <span className="text-black">WHAT </span>
        <span className="text-amber-500">OUR CLIENT</span>
        <span className="text-black"> SAY?</span>
      </h2>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {visibleTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white pt-10 pb-6 px-6 rounded-lg custom-shadow h-full flex flex-col justify-between relative transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-black/5" // Added hover effects
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="font-semibold text-lg mb-2">{testimonial.name}</p>
              <blockquote className="text-sm italic mb-4">"{testimonial.quote}"</blockquote>
            </div>
            <div className="text-center">
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        ))}
      </div>
      {/* Carousel Controls */}
      <div className="flex justify-center mt-8">
        <button 
          onClick={prevSlide} 
          className="bg-amber-500 text-white p-2 rounded-full mx-2 hover:bg-amber-600 transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="bg-amber-500 text-white p-2 rounded-full mx-2 hover:bg-amber-600 transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Piccard;
