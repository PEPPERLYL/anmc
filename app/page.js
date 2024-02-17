"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

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
      <section ref={sectionRefs.home} className="mb-8">
        <Hero />
        <p>This is the first section.</p>
      </section>
      <section ref={sectionRefs.event} className="h-[300px] mb-8">
        <h1 className="text-3xl font-bold">Section 2</h1>
        <p>This is the second section.</p>
      </section>
      <section ref={sectionRefs.ecosystems} className="h-[300px] mb-8">
        <h1 className="text-3xl font-bold">Section 3</h1>
        <p>This is the third section.</p>
      </section>
    </main>
  );
}
