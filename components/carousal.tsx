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
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6 cursor-pointer" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronRight className="w-6 h-6 cursor-pointer" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
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
      
      <div className="absolute w-full top-[45%] group-hover:top-4 transform duration-300 text-gray-900 group-hover:bg-gray-800/75 group-hover:text-gray-400 items-center justify-items-center">
        <h1 className="text-3xl font-semibold py-2">{imageScroll[index].heading}</h1>
      </div>
      <div className="absolute opacity-0 transition duration-300 group-hover:opacity-100 w-full top-[65%] bg-gray-800/75 text-gray-300 text-justify">
        <p className="text-md p-5">{imageScroll[index].description}</p>
      </div>
    </div>
  );
}
