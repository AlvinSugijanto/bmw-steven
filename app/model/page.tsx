"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { carListNew } from "@/lib/carListNew";
import Link from "next/link";

export default function ModelPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Filter states
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Apply filters to car list
  const filteredCarList = carListNew.filter((car) => {
    const seriesMatch =
      selectedSeries === "all" ||
      (selectedSeries === "ix" && car.series.startsWith("ix")) ||
      (selectedSeries === "i" &&
        car.series.startsWith("i") &&
        !car.series.startsWith("ix")) ||
      (selectedSeries === "m" && car.series.startsWith("m")) ||
      (selectedSeries === "x" &&
        car.series.startsWith("x") &&
        !car.series.startsWith("xm")) ||
      (selectedSeries === "sedan" && car.series.includes("sedan")) ||
      (selectedSeries === "coupe" && car.series.includes("coupe")) ||
      (selectedSeries === "convertible" &&
        car.series.includes("convertible")) ||
      (selectedSeries === "roadster" && car.series.includes("roadster"));

    const typeMatch = selectedType === "all" || car.type === selectedType;
    const tagMatch = selectedTag === "all" || car.tag === selectedTag;

    return seriesMatch && typeMatch && tagMatch;
  });

  // Group filtered cars by series category
  const groupedCars = {
    "iX Series": filteredCarList.filter((car) => car.series.startsWith("ix")),
    "i Series": filteredCarList.filter(
      (car) => car.series.startsWith("i") && !car.series.startsWith("ix")
    ),
    "M Series": filteredCarList.filter((car) => car.series.startsWith("m")),
    "X Series": filteredCarList.filter(
      (car) => car.series.startsWith("x") && !car.series.startsWith("xm")
    ),
    "Sedan Series": filteredCarList.filter(
      (car) =>
        car.series.includes("sedan") &&
        !car.series.startsWith("i") &&
        !car.series.startsWith("m")
    ),
    "Coupe Series": filteredCarList.filter(
      (car) =>
        car.series.includes("coupe") &&
        !car.series.startsWith("m") &&
        !car.series.includes("gran")
    ),
    "Gran Coupe Series": filteredCarList.filter((car) =>
      car.series.includes("gran-coupe")
    ),
    "Convertible Series": filteredCarList.filter((car) =>
      car.series.includes("convertible")
    ),
    "Roadster Series": filteredCarList.filter((car) =>
      car.series.includes("roadster")
    ),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/our-models.jpg"
            alt="BMW Models"
            fill
            className="object-cover [object-position:50%_60%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
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
          {/* <motion.div
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
          </motion.div> */}
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            {/* Series Filter */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Series
              </label>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all cursor-pointer hover:border-gray-400"
              >
                <option value="all">All Series</option>
                <option value="ix">iX Series</option>
                <option value="i">i Series</option>
                <option value="m">M Series</option>
                <option value="x">X Series</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="roadster">Roadster</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all cursor-pointer hover:border-gray-400"
              >
                <option value="all">All Types</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="petrol">Petrol</option>
              </select>
            </div>

            {/* Tag Filter */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tag
              </label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full md:w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all cursor-pointer hover:border-gray-400"
              >
                <option value="all">All Tags</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="roadster">Roadster</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="w-full md:w-auto md:mt-7">
              <button
                onClick={() => {
                  setSelectedSeries("all");
                  setSelectedType("all");
                  setSelectedTag("all");
                }}
                className="w-full md:w-auto px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section - Grouped by Series */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {Object.entries(groupedCars).map(
            ([seriesName, cars], seriesIndex) => {
              // Skip empty series
              if (cars.length === 0) return null;

              return (
                <motion.div
                  key={seriesName}
                  // initial={{ opacity: 0, y: 30 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  // transition={{ duration: 0.6, delay: seriesIndex * 0.05 }}
                >
                  {/* Series Heading */}
                  <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                      {seriesName}
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                  </div>

                  {/* Car Grid for this Series */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car, index) => (
                      <motion.div
                        key={car.series}
                        // initial={{ opacity: 0, scale: 0.9 }}
                        // whileInView={{ opacity: 1, scale: 1 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.4, delay: index * 0.05 }}
                        onHoverStart={() =>
                          setHoveredCard(seriesIndex * 100 + index)
                        }
                        onHoverEnd={() => setHoveredCard(null)}
                        className="group relative bg-white rounded-xl border overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer transition-shadow duration-300"
                      >
                        {/* Card Content */}
                        <div className="relative h-80 overflow-hidden bg-white">
                          {/* Car Image */}
                          <Image
                            src={car.path}
                            alt={car.name}
                            fill
                            className="object-contain p-2"
                          />

                          {/* Bottom Gradient Overlay - Always visible */}
                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white pointer-events-none" /> */}

                          {/* Tags/Badges - Top left corner */}
                          {(car.type || car.tag) && (
                            <div className="absolute top-4 left-4 z-10 flex gap-2">
                              {car.type && (
                                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-xl border border-white/20">
                                  <svg
                                    className="w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                  </svg>
                                  {car.type}
                                </span>
                              )}
                              {car.tag && (
                                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-xl border border-white/20">
                                  <svg
                                    className="w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {car.tag}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Car Name - Always visible at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h3 className="text-xl font-normal text-gray-600 drop-shadow-lg font-mono">
                              {car.name}
                            </h3>
                          </div>

                          {/* Hover Overlay with Button */}
                          <Link href={`/model/${car.series}`}>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity:
                                  hoveredCard === seriesIndex * 100 + index
                                    ? 1
                                    : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-black/40 flex items-center justify-center z-20"
                            >
                              <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                  y:
                                    hoveredCard === seriesIndex * 100 + index
                                      ? 0
                                      : 20,
                                  opacity:
                                    hoveredCard === seriesIndex * 100 + index
                                      ? 1
                                      : 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="bg-white hover:bg-blue-600 text-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold text-sm shadow-xl"
                              >
                                View Detail
                              </motion.button>
                            </motion.div>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            }
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
              Ready to Experience BMW?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a test drive and discover the future of driving
            </p>
            <Link href="/#contact-us">
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
