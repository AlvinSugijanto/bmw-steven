"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request:", formData);
    alert("Thank you! We'll contact you soon to schedule your demo.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ============================================================
  // 🎨 DESIGN VARIATIONS - Uncomment ONE option at a time
  // ============================================================

  // OPTION 1: Dark & Dramatic (requestdemo.png)
  const bgImage = "/requestdemo.png";
  const headingClass =
    "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight";
  const subheadingClass =
    "text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl";
  const featuresClass = "mt-8 flex flex-wrap gap-6 text-sm text-gray-300";
  const inputClass =
    "px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-gray-300";
  const overlayClass = "";

  // OPTION 2: Clean & Modern (requestdemo3.jpg) - CURRENTLY ACTIVE
  // const bgImage = "/requestdemo3.jpg";
  // const headingClass =
  //   "text-5xl md:text-7xl font-bold text-black mb-6 leading-tight uppercase tracking-tight";
  // const subheadingClass =
  //   "text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-xl";
  // const featuresClass = "mt-8 flex flex-wrap gap-6 text-sm text-gray-700";
  // const inputClass =
  //   "px-5 py-4 bg-white/90 backdrop-blur-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black placeholder-gray-500";
  // const overlayClass = ""; // No overlay needed for light background

  // OPTION 3: Balanced & Sophisticated (requestdemo4.png)
  // const bgImage = "/requestdemo4.png";
  // const headingClass =
  //   "text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight drop-shadow-lg";
  // const subheadingClass =
  //   "text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl drop-shadow-md";
  // const featuresClass = "mt-8 flex flex-wrap gap-6 text-sm text-gray-200";
  // const inputClass =
  //   "px-5 py-4 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-gray-200";
  // const overlayClass =
  //   "absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40";

  return (
    <section id="request-demo" className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="BMW Electric Vehicle Demo"
          fill
          className="object-cover md:object-bottom object-left"
          priority
        />
        {/* Overlay - changes per design option */}
        {overlayClass && <div className={overlayClass}></div>}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={headingClass}
            >
              Experience the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Future
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={subheadingClass}
            >
              Schedule your personalized test drive today and discover the
              revolutionary BMW electric driving experience. Limited slots
              available.
            </motion.p>

            {/* Compact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4 max-w-xl"
            >
              <div className="grid md:grid-cols-3 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 uppercase tracking-wide"
              >
                Request Test Drive
              </button>
            </motion.form>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={featuresClass}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Test Drive</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Obligation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--dark)] to-transparent pointer-events-none"></div>
    </section>
  );
}
