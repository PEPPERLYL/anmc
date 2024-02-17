import Image from "next/image";
import { useState, useEffect } from "react";
import heroimg1 from "../assets/Hero-Image-1.png";
import heroimg2 from "../assets/Hero-Image-2.png";
import heroimg3 from "../assets/Hero-Image-3.png";
import heroimg4 from "../assets/Hero-Image-4.png";
import heroimg5 from "../assets/Hero-Image-5.png";
import heroimg6 from "../assets/Hero-Image-6.png";
import heroimg7 from "../assets/Hero-Image-7.png";
import heroimg8 from "../assets/Hero-Image-8.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    heroimg1,
    heroimg2,
    heroimg3,
    heroimg4,
    heroimg5,
    heroimg6,
    heroimg7,
    heroimg8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Slider */}
      <div className="h-screen lg:h-[650px] w-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            width={2000}
            height={2000}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ))}
        {/* Hero Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        {/* Hero Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            NFT & Metaverse Conference
          </h1>
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
