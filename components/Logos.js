import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";

const logos = [
  { id: 1, src: logo1, alt: "Logo 1" },
  { id: 2, src: logo2, alt: "Logo 2" },
  { id: 3, src: logo3, alt: "Logo 3" },
  { id: 4, src: logo4, alt: "Logo 4" },
  { id: 5, src: logo5, alt: "Logo 5" },
  { id: 6, src: logo6, alt: "Logo 6" },
  { id: 7, src: logo7, alt: "Logo 7" },
  { id: 8, src: logo8, alt: "Logo 8" },
];

const Logos = () => {
  return (
    <Marquee gradient={false}>
      {logos.map((logo) => (
        <div key={logo.id} className="mx-4 lg:mx-20">
          <Image
            src={logo.src}
            width={150}
            height={150}
            alt={logo.alt}
            className="object-contain w-24 h-24"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default Logos;