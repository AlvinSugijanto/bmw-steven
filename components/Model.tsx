"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { carList } from "@/lib/carList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Model() {
  return (
    <section id="home" className="bg-white overflow-hidden">
      {/* Carousel Section - Total */}
      <CarouselSection />
    </section>
  );
}

// Carousel Component using Swiper
function CarouselSection() {
  // Array of carousel images with text content
  const carouselImages = [
    {
      src: "/2.avif",
      alt: "THE i7 M70",
      title: "THE i7 M70",
      description: "The most powerful electric BMW M automobile",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
    },
    {
      src: "/3.webp",
      alt: "THE i5 M60",
      title: "THE i5 M60",
      description: "The most powerful electric BMW M automobile",
      showText: true,
      position: {
        title: { x: 0, y: 20 },
        description: { x: 0, y: 30 },
        button: { x: 0, y: 80 },
      },
    },
  ];

  return (
    <div className="w-full my-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Discover Our Models
        </h2>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="h-[500px] md:h-[600px]"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

                {/* Text Overlay */}
                {image.showText && (
                  <div className="absolute inset-0 z-20">
                    <div className="w-full h-full px-8 md:px-16">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full h-full max-w-7xl mx-auto relative"
                      >
                        {/* Title */}
                        <motion.h3
                          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tighter font-sans absolute"
                          style={{
                            left: `${image.position.title.x}%`,
                            top: `${image.position.title.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          {image.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl absolute"
                          style={{
                            left: `${image.position.description.x}%`,
                            top: `${image.position.description.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          {image.description}
                        </motion.p>

                        {/* Button */}
                        <motion.div
                          className="absolute"
                          style={{
                            left: `${image.position.button.x}%`,
                            top: `${image.position.button.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 font-semibold text-sm md:text-base transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide uppercase">
                            Explore Now
                          </button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
