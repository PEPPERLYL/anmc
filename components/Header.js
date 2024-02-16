import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../public/anmc-logo.png";

export default function Header({ scrollToRef }) {
  const navLinks = [
    { section: "home", label: "Home" },
    { section: "event", label: "Events" },
    { section: "ecosystems", label: "Ecosystems" },
    { section: "about", label: "About" },
    { section: "contact", label: "Contact Us" },
    { section: "submit", label: "Submit your work" },
  ];

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 30;
    const header = document.querySelector(".sticky-header");

    if (isTop) {
      header.classList.remove("scrolled");
    } else {
      header.classList.add("scrolled");
    }
  };

  if (typeof window !== "undefined") {
    // Check if window is defined (to avoid issues during server-side rendering)
    window.addEventListener("scroll", handleScroll);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <header className="sticky-header flex bg-white border-b-2 py-4 lg:py-2 px-5 lg:px-16 items-center justify-between gap-32">
      <div className="flex gap-2 items-center">
        <Image src={Logo} alt="Anmc logo" width={50} height={50} />
        <p className="flex items-center capitalize font-semibold text-2xl">
          <span className="text-red-700 font-light italic">a</span>
          <span className="text-blue-600 font-light italic">n</span>
          <span className="text-yellow-500 font-light italic">m</span>
          <span className="text-green-400 font-bold ml-1">c</span>
        </p>
      </div>

      {/* Regular menu for larger screens */}
      <nav className="container mx-auto flex-grow">
        <ul className="hidden lg:flex justify-start gap-10">
          {navLinks.map((link) => (
            <li className="mx-2" key={link.section}>
              <a
                className="text-black capitalize text-sm cursor-pointer"
                onClick={() => scrollToRef(link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu toggle */}
      <div className="lg:hidden items-end">
        <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-white bg-opacity-80 z-50 transition-all duration-500 ${
          isMenuOpen ? "w-3/4" : "w-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="bg-tertiary border-l-2 border-gray-600 w-full h-full flex flex-col justify-start p-4">
          <IoCloseOutline
            className="text-3xl my-4 cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="mt-8 text-center">
            {navLinks.map((link) => (
              <li className="my-8" key={link.section}>
                <a
                  className="text-black capitalize font-medium text-xl cursor-pointer"
                  onClick={() => scrollToRef(link.section)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
