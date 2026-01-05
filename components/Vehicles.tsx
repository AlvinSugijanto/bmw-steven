"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const vehicles = [
  {
    id: 1,
    name: "Lamborghini Aventador",
    type: "Sports",
    price: 1000,
    seats: 2,
    speed: "350 km/h",
    image: "/hero-bg.png", // Using hero bg as placeholder for now, ideally unique images
  },
  {
    id: 2,
    name: "Rolls-Royce Ghost",
    type: "Luxury",
    price: 2000,
    seats: 4,
    speed: "250 km/h",
    image: "/hero-bg.png",
  },
  {
    id: 3,
    name: "Range Rover Autobiography",
    type: "SUV",
    price: 1200,
    seats: 5,
    speed: "220 km/h",
    image: "/hero-bg.png",
  },
  {
    id: 4,
    name: "Mercedes S-Class",
    type: "Luxury",
    price: 1500,
    seats: 4,
    speed: "250 km/h",
    image: "/hero-bg.png",
  },
  {
    id: 5,
    name: "Ferrari 488 GTB",
    type: "Sports",
    price: 1800,
    seats: 2,
    speed: "330 km/h",
    image: "/hero-bg.png",
  },
  {
    id: 6,
    name: "Cadillac Escalade",
    type: "SUV",
    price: 1100,
    seats: 7,
    speed: "200 km/h",
    image: "/hero-bg.png",
  },
];

const filters = ["All", "Luxury", "Sports", "SUV"];

export default function Vehicles() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVehicles =
    activeFilter === "All"
      ? vehicles
      : vehicles.filter((v) => v.type === activeFilter);

  return (
    <section id="vehicle" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              Premium Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Luxury Garage
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVehicles.map((car) => (
              <motion.div
                layout
                key={car.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden group border border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg">
                      <span className="text-primary-500 font-bold text-xl">
                        ${car.price}
                      </span>
                      <span className="text-gray-600 text-xs ml-1">
                        / per day
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary-500 transition-colors">
                    {car.name}
                  </h3>

                  <div className="flex justify-between border-t border-gray-200 pt-6 mb-8">
                    <div className="text-center px-4">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Seats
                      </span>
                      <span className="text-gray-900 font-bold">
                        {car.seats}
                      </span>
                    </div>
                    <div className="text-center px-4 border-l border-gray-200">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Speed
                      </span>
                      <span className="text-gray-900 font-bold">
                        {car.speed}
                      </span>
                    </div>
                    <div className="text-center px-4 border-l border-gray-200">
                      <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Type
                      </span>
                      <span className="text-gray-900 font-bold">
                        {car.type}
                      </span>
                    </div>
                  </div>

                  <button className="w-full btn-primary">Rent This Car</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
