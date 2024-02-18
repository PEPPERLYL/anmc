"use client";
import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Attend from "@/components/Attend";
import Vision from "@/components/Vision";

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
      <section ref={sectionRefs.home} className="flex flex-col gap-4 lg:gap-10">
        <div>
          <Hero />
        </div>
        <div>
          <Logos />
        </div>
        <div>
          <Attend />
        </div>
        <div>
          <Vision />
        </div>
      </section>
      <section ref={sectionRefs.event} className="h-[300px] mt-10">
        <h1 className="text-3xl font-bold">Section 2</h1>
        <p>This is the second section.</p>
      </section>
      <section ref={sectionRefs.ecosystems} className="h-[300px]">
        <h1 className="text-3xl font-bold">Section 3</h1>
        <p>This is the third section.</p>
      </section>
    </main>
  );
}
