"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { carListNew } from "@/lib/carListNew";
import Link from "next/link";

export default function ModelPage() {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Filter cars based on selected series
  const filteredCars =
    selectedSeries === "all"
      ? carListNew
      : carListNew.filter((car) => {
          if (selectedSeries === "i-series") {
            return car.series.startsWith("i") && !car.series.startsWith("ix");
          } else if (selectedSeries === "ix-series") {
            return car.series.startsWith("ix");
          } else if (selectedSeries === "m-series") {
            return car.series.startsWith("m");
          } else if (selectedSeries === "x-series") {
            return car.series.startsWith("x") && !car.series.startsWith("xm");
          } else if (selectedSeries === "sedan") {
            return (
              car.series.includes("sedan") ||
              ["3-series-sedan", "5-sedan", "7-sedan"].includes(car.series)
            );
          } else if (selectedSeries === "coupe") {
            return car.series.includes("coupe");
          } else if (selectedSeries === "convertible") {
            return (
              car.series.includes("convertible") ||
              car.series.includes("roadster")
            );
          }
          return false;
        });

  // Series filter options
  const seriesOptions = [
    { value: "all", label: "All Models" },
    { value: "i-series", label: "i Series" },
    { value: "ix-series", label: "iX Series" },
    { value: "m-series", label: "M Series" },
    { value: "x-series", label: "X Series" },
    { value: "sedan", label: "Sedans" },
    { value: "coupe", label: "Coupes" },
    { value: "convertible", label: "Convertibles" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/car-list/bmw-i7.avif"
            alt="BMW Models"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Our Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Discover the future of electric mobility with BMW's innovative
              lineup
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {seriesOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSeries(option.value)}
                className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedSeries === option.value
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* Car Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.series}
                layout
                // initial={{ opacity: 0, scale: 0.9 }}
                // animate={{ opacity: 1, scale: 1 }}
                // exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:cursor-pointer"
              >
                {/* Card Content */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={car.path}
                    alt={car.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold font-sans text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {car.name}
                  </h3>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full  border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold text-sm shadow-md"
                  >
                    View Details
                  </motion.button>
                </div>

                {/* Hover Effect - Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredCars.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No models found</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Electric?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a test drive and discover the future of driving
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
