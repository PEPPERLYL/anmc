"use client";
import Image from "next/image";
import { useRef } from "react";
import Header from "@/components/Header";

export default function Home() {
  const sectionRefs = {
    home: useRef(null),
    event: useRef(null),
    ecosystems: useRef(null),
    about: useRef(null),
    contact: useRef(null),
    submit: useRef(null),
  };

  const scrollToRef = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full flex flex-col">
      <Header scrollToRef={scrollToRef} />
      <section ref={sectionRefs.home} className="h-[300px] mt-64 mb-8">
        <h1 className="text-3xl font-bold">Section 1</h1>
        <p>This is the first section.</p>
      </section>
      <section ref={sectionRefs.event} className="h-[300px] mb-8">
        <h1 className="text-3xl font-bold">Section 2</h1>
        <p>This is the second section.</p>
      </section>
      <section ref={sectionRefs.ecosystems} className="h-[300px] mb-[500px]">
        <h1 className="text-3xl font-bold">Section 3</h1>
        <p>This is the third section.</p>
      </section>
    </main>
  );
}
