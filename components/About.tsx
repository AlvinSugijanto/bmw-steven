"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/about-bg.png"
                alt="Autodune Showroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Floating Experience Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 bg-primary-500 p-10 rounded-full hidden md:flex flex-col items-center justify-center text-white shadow-xl w-48 h-48 z-20"
            >
              <span className="text-5xl font-bold">25+</span>
              <span className="text-sm uppercase tracking-wider font-medium text-center mt-1">
                Years Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                About Autodune
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Driving Convenience, <br />
                Comfort and{" "}
                <span className="italic text-primary-500 font-serif">
                  Confidence
                </span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              We're your trusted travel partner. Whether you're exploring a new
              city, heading out on a business trip, or planning a weekend
              getaway, our diverse, well-maintained fleet ensures you meet every
              type of customer need.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 h-fit rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">24/7 Support</h4>
                  <p className="text-sm text-gray-600">
                    Always here to help you
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 h-fit rounded-lg">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">
                    Quality Assured
                  </h4>
                  <p className="text-sm text-gray-600">
                    Best vehicles guaranteed
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-primary mt-4">More About Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
