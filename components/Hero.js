import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import heroimg1 from "../assets/Hero-Image-1.png";
import heroimg2 from "../assets/Hero-Image-2.png";
import heroimg3 from "../assets/Hero-Image-3.png";
import heroimg4 from "../assets/Hero-Image-4.png";
import heroimg5 from "../assets/Hero-Image-5.png";
import heroimg6 from "../assets/Hero-Image-6.png";
import heroimg7 from "../assets/Hero-Image-7.png";
import heroimg8 from "../assets/Hero-Image-8.png";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <div className="h-screen lg:h-[500px] w-full flex items-center justify-center">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          className="absolute lg:left-10 text-white"
        >
          <p className="text-3xl lg:text-6xl font-bold mb-1">Africa</p>
          <p className="text-xl lg:text-3xl font-semibold mb-4">
            NFT & Metaverse Conference
          </p>
          <p className="flex flex-col text-sm lg:text-xl gap-0 mb-4">
            <span>Unlocking Africa&apos;s Digital Future:</span>
            <span> showcasing Creativity. Made by Africa. For Africa</span>
          </p>
          <Link
            href="#"
            className="flex items-center justify-center bg-[#5E54EF] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#5E54EF] hover:bg-white "
          >
            Register Here
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
