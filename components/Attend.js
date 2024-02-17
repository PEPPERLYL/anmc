import React from "react";
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
import Image from "next/image";

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
      <div className="grid grid-cols-2 md:grid-cols-4 mx-10 gap-x-20 gap-y-10">
        {attendbox.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-md cursor-pointer group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={250}
              height={150}
              className="object-cover w-full h-full  duration-300 ease-in-out "
            />
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-light text-xl pointer-events-none">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attend;
