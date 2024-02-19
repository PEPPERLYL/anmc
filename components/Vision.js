import Image from "next/image";
import { motion } from "framer-motion";
import visionimg from "../assets/vision.png";
import wave from "../assets/wave.png";

const Vision = () => {
  return (
    <>
      <div className="flex">
        <div className=" lg:w-2/6 w-1/3 h-[560px]  bg-[#001E2C] flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={visionimg}
              alt="Vision Image"
              width={250}
              height={150}
              className="object-cover w-full h-full py-12 lg:py-28 lg:pl-20 pl-5"
            />
          </motion.div>
        </div>
        <div className="w-2/3 lg:w-4/6 h-[560px] flex flex-col lg:px-10 px-2 lg:py-16 py-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl font-semibold">OUR VISION</p>
            <Image src={wave} alt="Wave" className="my-2 px-4 " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="lg:pr-28"
          >
            <p className="mt-3 text-md leading-snug tracking-tight font-normal">
              NFTs and the Metaverse stand as potent drivers for economic
              prosperity, cultural preservation, and technological excellence,
              poised to elevate our continent to a prominent global position in
              the digital age. <br />
              To achieve these, we aim to create:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <p className="mt-3 text-md leading-snug tracking-tight font-normal">
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Vision;
