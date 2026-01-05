"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Chauffeur-Driven Car Rentals",
    desc: "Sit back and relax while our professional chauffeurs handle the driving. Perfect for business meetings.",
    icon: "🚗",
  },
  {
    title: "Self-Drive Car Rental Service",
    desc: "Whether you're commuting around the city, heading out for a road trip our self-drive service puts you behind the wheel.",
    icon: "🔑",
  },
  {
    title: "Airport Pickup & Drop-Off Service",
    desc: "Start and end your journey with ease. Our reliable airport transfer service ensures timely pickups.",
    icon: "✈️",
  },
];

export default function Services() {
  return (
    <section id="service" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            Premium Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Car Rental Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-primary-100 text-primary-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
