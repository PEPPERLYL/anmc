import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import attend01 from "../assets/attend01.png";
import attend02 from "../assets/attend02.png";
import attend03 from "../assets/attend03.png";
import attend04 from "../assets/attend04.png";
import attend05 from "../assets/attend05.png";
import attend06 from "../assets/attend06.png";
import attend07 from "../assets/attend07.png";
import attend08 from "../assets/attend08.png";
import attend09 from "../assets/attend09.png";
import attend10 from "../assets/attend10.png";
import attend11 from "../assets/attend11.png";
import attend12 from "../assets/attend12.png";

const Attend = () => {
  const attendbox = [
    {
      title: "Digital Artists & Creators",
      image: attend01,
    },
    {
      title: "Museums",
      image: attend02,
    },
    {
      title: "Game Developers",
      image: attend03,
    },
    {
      title: "Investors",
      image: attend04,
    },
    {
      title: "Virtual World Owners",
      image: attend05,
    },
    {
      title: "Web3 Enthusiasts",
      image: attend06,
    },
    {
      title: "Blockchain/Web3 Companies",
      image: attend07,
    },
    {
      title: "Gamers",
      image: attend08,
    },
    {
      title: "VR/AR Providers",
      image: attend09,
    },
    {
      title: "Gaming Companies",
      image: attend10,
    },
    {
      title: "Tech Enthusiasts",
      image: attend11,
    },
    {
      title: "Cryptocurrency Enthusiasts",
      image: attend12,
    },
  ];

  return (
    <div className="my-5">
      <div className="mb-5 lg:mb-10">
        <p className="text-3xl font-medium text-center">WHO CAN ATTEND?</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:mx-32 mx-3 gap-x-10 gap-y-5 lg:gap-x-20 lg:gap-y-10">
        {attendbox.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={index}
            className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-md cursor-pointer hover:-translate-y-2 group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={250}
              height={150}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-light text-xl pointer-events-none">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Attend;
