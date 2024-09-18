"use client"; // Add this directive at the top of the file

import React, { useState } from 'react';
import Image from 'next/image';
import './Header.css'; // Ensure CSS file exists

const images = [
  '/path/to/your/image1.jpg',
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg',
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="header bg-white p-6">
      <div className="info">
        <h2 className="text-2xl font-semibold">Design Slider</h2>
        <h1 className="text-4xl font-bold mt-2">Lorem Ipsum</h1>
        <p className="mt-4">Lorem Ipsum ...</p>
        <button className="btn-coba bg-[#D05805] text-white px-4 py-2 mt-4 rounded-lg font-medium hover:bg-[#D05805]">
          Coba Sekarang
        </button>
      </div>
      <div className="slider relative mt-8">
        <button className="arrow left" onClick={handlePrev}>←</button>
        <div className="images flex overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Slide ${index}`}
              width={100}
              height={100}
              className={`image ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'left' : 'right'}`}
            />
          ))}
        </div>
        <button className="arrow right" onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Header;
