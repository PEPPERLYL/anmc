"use client";
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
      <div className="flex gap-2">
        <Image src={Logo} alt="Anmc logo" className="w-[40px] lg:w-[50px]" />
        <p className="hidden lg:flex items-center capitalize font-semibold text-2xl">
          <span className="text-red-700 italic">a</span>
          <span className="text-blue-600 italic">n</span>
          <span className="text-yellow-500 italic">m</span>
          <span className="text-green-400 italic">c</span>
        </p>
      </div>
      <nav className="container mx-auto">
        <ul className="hidden lg:flex justify-start gap-10">
          {navLinks.map((link) => (
            <li className="mx-2" key={link.section}>
              <a
                className="text-black capitalize text-sm hover:underline-offs cursor-pointer"
                onClick={() => scrollToRef(link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
