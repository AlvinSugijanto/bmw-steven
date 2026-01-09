"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalculator, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function InstallmentCTA() {
  return (
    <section className="relative py-20 bg-white" id="simulate-installment">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Calculate Your{" "}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> */}
            Dream BMW Installment
            {/* </span>{" "} */}
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Plan your BMW purchase with an easy and transparent installment
            simulation. Get your monthly payment estimate in seconds.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <FaCalculator className="text-4xl text-blue-400 mb-6 mx-auto" />
              <h3 className="text-gray-600 font-semibold mb-2">
                Accurate Calculation
              </h3>
              <p className="text-gray-400 text-sm">
                Calculate installments with current interest rates
              </p>
            </div>
            <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <FaChartLine className="text-4xl text-blue-400 mb-6 mx-auto" />
              <h3 className="text-gray-600 font-semibold mb-2">
                Various Terms
              </h3>
              <p className="text-gray-400 text-sm">
                Choose terms from 12 to 60 months
              </p>
            </div>
            <div className="border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <FaCheckCircle className="text-4xl text-blue-400 mb-6 mx-auto" />
              <h3 className="text-gray-600 font-semibold mb-2">
                No Commitment
              </h3>
              <p className="text-gray-400 text-sm">
                Free simulation with no obligation
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/simulasi-cicilan"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
            >
              <FaCalculator className="text-xl" />
              Start Simulation Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
