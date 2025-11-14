"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imageScroll } from "@/lib/homeContent";

// const images = [
//   "/images/solar1.jpg",
//   "/images/solar2.jpg",
//   "/images/solar3.jpg",
// ];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? imageScroll.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === imageScroll.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group w-full mx-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer">
      <div className="relative h-64 sm:h-96">
        <AnimatePresence>
          <motion.img
            key={imageScroll[index].name}
            src={imageScroll[index].href}
            alt="Carousel Image"
            className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-50"
      >
        <ChevronLeft className="w-4 h-4 md:lg:w-6 md:lg:h-6 cursor-pointer" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-50"
      >
        <ChevronRight className=" w-4 h-4 md:lg:w-6 md:lg:h-6 cursor-pointer" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-50">
        {imageScroll.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
      <div className="absolute w-full top-4 md:lg:top-[45%] md:lg:group-hover:top-4 transform duration-300 text-foreground group-hover:bg-background/75 group-hover:text-foreground items-center justify-items-center">
        <h1 className="text-xl md:lg:text-3xl font-semibold py-2">{imageScroll[index].heading}</h1>
      </div>
      <div className="absolute opacity-100 top-[50%]  md:lg:opacity-0 transition duration-300 group-hover:opacity-100 md:lg:w-full md:lg:top-[65%] bg-background/75 text-foreground text-justify">
        <p className="text-[10px] text-center flex md:text-lg lg:text-lg p-5">{imageScroll[index].description}</p>
      </div>
    </div>
  );
}
