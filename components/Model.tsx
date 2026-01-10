"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Model() {
  return (
    <section className="bg-white overflow-hidden">
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
      src: "/car-list/bmw-i7.avif",
      alt: "THE I7 M70",
      title: "The I7 M70",
      description: "The most powerful electric BMW M automobile",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/i7-sedan",
    },
    {
      src: "/car-list/m4-coupe.webp",
      alt: "The M4 Coupé",
      title: "The M4 Coupé",
      description: "The most powerful electric BMW M automobile",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m4-coupe",
    },
    {
      src: "/car-list/bmw-3.avif",
      alt: "The 3",
      title: "The 3",
      description: "Exclusive Design.",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m3-touring",
    },
    {
      src: "/car-list/bmw-m2.avif",
      alt: "THE M2",
      title: "The M2",
      description: "The most powerful electric BMW M automobile",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m2-coupe",
    },
  ];

  return (
    <div className="w-full mt-16 mb-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-semibold text-gray-700">
          DISCOVER OUR MODEL
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
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: {
              navigation: {
                enabled: false,
              },
            },
            768: {
              navigation: {
                enabled: true,
              },
            },
          }}
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />

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
                          className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl absolute sm:mt-0 mt-4"
                          style={{
                            left: `${image.position.description.x}%`,
                            top: `${image.position.description.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          {image.description}
                        </motion.p>

                        {/* Button */}
                        <Link href={`${image.href}`}>
                          <motion.div
                            className="absolute sm:mt-0 mt-8"
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
                        </Link>
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
