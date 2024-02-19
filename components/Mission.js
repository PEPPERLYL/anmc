import React from "react";
import { motion } from "framer-motion";
import missionimg from "../assets/mission.png";
import Image from "next/image";
import wave from "../assets/wave.png";
const Mission = () => {
  return (
    <div className="relative flex">
      <div className="w-0/3 lg:w-2/6 h-[560px] bg-white"></div>
      <div className="w-full lg:w-2/3 h-[560px] bg-[#001E2C]"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex  bg-white lg:mx-32 lg:my-32 mx-10 my-24"
      >
        <div className="w-full lg:w-3/4 flex flex-col items-start px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className=" flex flex-col items-center py-4"
          >
            <p className="text-3xl font-semibold">OUR MISSION</p>
            <Image src={wave} alt="Wave" className="my-2 px-4" />
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-md"
            >
              Empowering Africa’s digital potential.
              <br /> Uniting Minds and Fostering Innovation.
              <br /> Pushing Creativity and Collaboration in NFTs and Metaverse
              Web3 - Gaming Ecosystems. <br />
              Unveiling Use Cases and Other Industry Applications.
              <br /> Empowering Developers in Web3 Ecosystems such as NFTs,
              Gaming, Blockchain, and Web.
              <br /> Providing training, education, and experience for the
              Africa Web3 Ecosystem
            </motion.p>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/4 h-full">
          <div className="h-full">
            <Image
              src={missionimg}
              alt="mission"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
