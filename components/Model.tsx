"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { carList } from "@/lib/carList";

export default function Model() {
  const [selectedSeries, setSelectedSeries] = useState("i7");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // Get current car based on selected series
  const currentCar = useMemo(() => {
    return carList.find((car) => car.series === selectedSeries) || carList[0];
  }, [selectedSeries]);

  // Get current color
  const currentColor = useMemo(() => {
    if (currentCar.colors.length === 0) return null;
    return currentCar.colors[selectedColorIndex] || currentCar.colors[0];
  }, [currentCar, selectedColorIndex]);

  // Reset color index when series changes
  useEffect(() => {
    setSelectedColorIndex(0);
  }, [selectedSeries]);

  return (
    <section id="home" className="bg-white overflow-hidden py-16">
      {/* Section Heading */}
      <div className="container px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Discover our model
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our range of luxury vehicles and find your perfect BMW
          </p>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-12 w-full items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl space-y-6 flex-1"
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none mb-3">
                {currentCar.name}
              </h1>
            </div>

            {/* Series Selector */}
            <div className="w-full max-w-md">
              <label
                htmlFor="series-select"
                className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"
              >
                Select Model Series
              </label>
              <select
                id="series-select"
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-900 font-semibold text-base focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all cursor-pointer hover:border-gray-300 shadow-sm"
              >
                {carList.map((car) => (
                  <option key={car.series} value={car.series}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-[80%]">
              The BMW i7 Sedan takes the lead in every regard, from technology
              and design to comfort and a confident presence on the road.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 font-bold text-sm transition-all rounded-lg shadow-lg hover:shadow-xl transform">
                Request Test Drive
              </button>
              <button className="bg-white hover:bg-gray-50 text-primary-500 border-2 border-primary-500 px-8 py-4 font-bold text-sm transition-all rounded-lg shadow-md hover:shadow-lg transform">
                Download Spec Card
              </button>
            </div>
          </motion.div>

          {/* Right Side - Car Image and Color Palette */}
          <div className="w-full max-w-2xl mt-8">
            {/* Car Image Container */}
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSeries}-${selectedColorIndex}`}
                  initial={{ x: 900, opacity: 0 }} // Masuk dari KANAN
                  animate={{ x: 0, opacity: 1 }} // Posisi normal
                  exit={{ x: 900, opacity: 1 }} // Keluar ke KANAN
                  transition={{
                    duration: 0.3,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="relative w-full h-full"
                >
                  {currentColor ? (
                    <Image
                      src={currentColor.path}
                      alt={`${currentCar.name} ${currentColor.name}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                      <p>No image available</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Color Palette Selector - Below Image */}
            <div className="w-full">
              {currentCar.colors.length > 0 ? (
                <>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
                    Choose Your Color
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {currentCar.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColorIndex(index)}
                        className={`relative w-8 h-8 rounded transition-all transform hover:scale-110 ${
                          selectedColorIndex === index
                            ? "ring-2 ring-primary-500 ring-offset-2 scale-110 shadow-md"
                            : "hover:ring-2 hover:ring-gray-300"
                        }`}
                        style={{
                          backgroundColor: color.hex,
                          border: `2px solid ${color.border}`,
                        }}
                        title={color.name}
                      >
                        {selectedColorIndex === index && (
                          <motion.div
                            layoutId="colorCheck"
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <svg
                              className={`w-4 h-4 drop-shadow-lg ${
                                color.hex === "#FFFFFF"
                                  ? "text-gray-800"
                                  : "text-white"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                  {currentColor && (
                    <p className="text-xs text-gray-500 italic mt-4 text-center">
                      Selected:{" "}
                      <span className="font-semibold text-gray-700">
                        {currentColor.name}
                      </span>
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500 text-center">
                  No color options available for this series
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Specs Bar - Uncomment if needed */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-primary-500 w-full py-6 shadow-2xl"
      >
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col">
            <span className="text-blue-100 text-xs mb-1 uppercase tracking-wider font-semibold">
              Price
            </span>
            <span className="text-white text-xl font-bold">
              Rp 2.899.000.000
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-100 text-xs mb-1 uppercase tracking-wider font-semibold">
              Engine Power
            </span>
            <span className="text-white text-xl font-bold">Up to 523 hp</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-100 text-xs mb-1 uppercase tracking-wider font-semibold">
              Fuel Type
            </span>
            <span className="text-white text-xl font-bold">Gasoline</span>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
