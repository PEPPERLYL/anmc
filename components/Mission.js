import React from "react";
import missionimg from "../assets/mission.png";
import Image from "next/image";
import wave from "../assets/wave.png";
const Mission = () => {
  return (
    <div className="relative flex">
      <div className="w-1/3 lg:w-2/6 h-[560px] bg-white"></div>
      <div className="w-full lg:w-2/3 h-[560px] bg-[#001E2C]"></div>
      <div className="absolute inset-0 flex justify-center items-center bg-white lg:mx-32 lg:my-32">
        <div className="w-3/4"></div>
        <div className="w-1/4 h-full">
          <div className="h-full">
            <Image
              src={missionimg}
              alt="mission"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
