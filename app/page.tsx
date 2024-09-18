"use client"; // Add this directive at the top of the file

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const images = [
  '/path/to/your/image1.jpg',
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg',
];

// Teks untuk setiap slide
const headers = ['Penetasan', 'Penggemukan', 'Layer'];
const descriptions = ['"Penetasan" adalah fitur yang mengoptimalkan proses penetasan telur itik untuk mencapai kesuksesan menetas yang maksimal dan kualitas anakan itik yang baik.', 'Lorem Ipsum... 2', 'Lorem Ipsum... 3'];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <header className="bg-gray-100 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Image src="/assets/Logo.svg" alt="SI-ITIK Logo" width={250} height={250} />
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link href="#" className="underline-animation text-gray-800 hover:text-gray-600 font-medium transition duration-300">
              Tentang Kami
            </Link>
            <Link href="#" className="underline-animation text-gray-800 hover:text-gray-600 font-medium transition duration-300">
              Fitur Utama
            </Link>
            <Link href="#" className="underline-animation text-gray-800 hover:text-gray-600 font-medium transition duration-300">
              Testimoni
            </Link>
            <Link href="#" className="underline-animation text-gray-800 hover:text-gray-600 font-medium transition duration-300">
              Cara Kerja
            </Link>
            <Link href="#" className="underline-animation text-[#D05805] hover:text-orange-600 font-medium transition duration-300">
              Unduh Aplikasi Seluler
            </Link>
          </nav>

          {/* Login Button */}
          <div>
            <Link
              href="#"
              className="border border-[#D05805] text-[#D05805] hover:bg-[#D05805] hover:text-white transition duration-300 px-4 py-2 rounded-lg font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Header Content */}
      <div className="header bg-white p-6">
        <div className="info text-center">
          <h2 className="text-2xl font-semibold">Design Slider</h2>
          <h1 className="text-4xl font-bold mt-2">{headers[currentIndex]}</h1>
          <p className="mt-4">{descriptions[currentIndex]}</p>
          <button className="btn-coba bg-[#D05805] text-white px-4 py-2 mt-4 rounded-lg font-medium hover:bg-[#D05805]">
            Coba Sekarang
          </button>
        </div>
        <div className="slider-container relative mt-8 flex items-center justify-center">
          <button className="arrow left" onClick={handlePrev}>←</button>
          <div className="slider flex overflow-hidden">
            <div className="images flex">
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
          </div>
          <button className="arrow right" onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
}
