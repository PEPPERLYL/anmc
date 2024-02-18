import Image from "next/image";
import React from "react";
import visionimg from "../assets/vision.png";
import wave from "../assets/wave.png";

const Vision = () => {
  return (
    <>
      <div className="flex">
        <div className=" lg:w-2/6 w-1/2 lg:h-[720px] h-[560px]  bg-[#001E2C] flex items-center justify-end">
          <Image
            src={visionimg}
            alt="Vision Image"
            width={250}
            height={150}
            className="object-cover w-full h-full py-12 lg:py-28 pl-20"
          />
        </div>
        <div className="w-1/2 lg:w-4/6 lg:h-[720px] h-[560px] flex flex-col lg:px-10 px-2 lg:py-28 py-2 items-start">
          <div className="flex flex-col items-center">
            <p className="lg:text-4xl text-2xl font-semibold">OUR VISION</p>
            <Image src={wave} alt="Wave" className="lg:my-2 lg:px-2 px-10" />
          </div>
          <div className="lg:pr-48">
            <p className="mt-3 lg:text-xl text-lg leading-snug tracking-tight font-normal">
              NFTs and the Metaverse stand as potent drivers for economic
              prosperity, cultural preservation, and technological excellence,
              poised to elevate our continent to a prominent global position in
              the digital age. <br />
              To achieve these, we aim to create:
            </p>
          </div>
          <div>
            <p className="mt-3 lg:text-xl text-lg leading-snug tracking-tight font-normal">
              A vibrant community of digital creators.
              <br /> An exquisite community of artists.
              <br /> A robust game developers community.
              <br /> A community of virtual world owners.
              <br /> An investors-creators community for NFT, and game dev
              projects.
              <br /> A robust community of blockchain developers.
              <br /> A refined ecosystem of Web3 - blockchain services
              providers.
              <br />
              Space for a safe transition into Tech.
              <br /> Train individuals into the Web3 ecosystem.
              <br /> AI-driven Web3 ecosystem that automate the future
              Realization of an inclusive digital Africa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
