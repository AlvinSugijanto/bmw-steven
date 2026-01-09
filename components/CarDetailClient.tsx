"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CarDetailClientProps {
  car: {
    name: string;
    series: string;
    path: string;
    title?: string;
    description?: string;
    content?: Record<string, string | undefined>;
  };
  previousCar: {
    name: string;
    series: string;
    path: string;
  };
  nextCar: {
    name: string;
    series: string;
    path: string;
  };
}

export default function CarDetailClient({
  car,
  previousCar,
  nextCar,
}: CarDetailClientProps) {
  return (
    <main className="min-h-screen pt-[65px] bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section with Car Image */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={car.path}
            alt={car.name}
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800/10 via-gray-800/0 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col mt-16 items-center">
          {/* Bottom Car Name and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4 tracking-tight drop-shadow-2xl font-mono font-normal">
              {car.name}
            </h1>

            {/* Action Buttons */}
          </motion.div>
        </div>
      </section>
      <section className="flex justify-between max-w-5xl mx-auto px-4">
        <motion.button
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center gap-2 w-full justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Spec Card
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const phoneNumber = "6285117576041"; // Ganti dengan nomor WA yang sesuai
            const message = `Halo, saya tertarik untuk request test drive untuk *${car.name}*.%0A%0ASaya ingin mendapatkan informasi lebih lanjut mengenai:%0A- Jadwal test drive yang tersedia%0A- Lokasi test drive%0A- Promo dan penawaran terbaru%0A%0ATerima kasih!`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, "_blank");
          }}
          className="bg-white text-blue-600 px-6 py-3 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-blue-600 flex items-center gap-2 w-full justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Request Test Drive
        </motion.button>
      </section>
      {/* Title Section */}
      {car.title && (
        <section className="px-4 py-16 flex flex-col gap-12 font-sans">
          <div className="max-w-2xl mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-6 text-center">
                {car.title}
              </h2>
              {/* <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto"></div> */}
            </motion.div>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-md  md:text-xl text-gray-700 leading-relaxed text-justify">
                {car.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Technical Specifications Section */}
      {car.content && Object.keys(car.content).length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Technical Specifications
              </h2>
              <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mb-12"></div>

              {/* Two Column Layout: Image + Specs */}
              <div className="flex lg:flex-row flex-col gap-8 lg:gap-12 items-center">
                {/* Left Column: Car Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full lg:w-[65%] h-[300px] md:h-[500px] lg:h-[500px] rounded-2xl overflow-hidden "
                >
                  {/* Series Name Watermark - Large transparent text behind car */}
                  <div className="absolute top-8 sm:left-16 md:left-24 pointer-events-none z-0">
                    <p className="font-light text-[60px] md:text-[80px] lg:text-[120px] text-gray-300 opacity-40 leading-none uppercase tracking-tight font-sans">
                      {car.series.split("-").join(" ").replace(" ", "  ")}
                    </p>
                  </div>

                  {/* Car Image - positioned above the watermark */}
                  <Image
                    src={car.path}
                    alt={car.name}
                    fill
                    className="object-cover relative z-10"
                  />

                  {/* Decorative gradient overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" /> */}
                </motion.div>

                {/* Right Column: Specifications Grid */}
                <div className="grid grid-cols-2 gap-y-6 sm:gap-y-4 sm:gap-x-12 gap-x-4">
                  {Object.entries(car.content)
                    .filter(([_, value]) => value !== undefined)
                    .map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="transition-all duration-300 hover:scale-105 font-sans"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              {key}
                            </p>
                            <p className="text-xl md:text-2xl font-normal text-gray-900">
                              {value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* Navigation Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore More Models
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Car */}
              <Link
                href={`/model/${previousCar.series}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48">
                  <Image
                    src={previousCar.path}
                    alt={previousCar.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-blue-500 mb-1 font-semibold">
                      &lt;&lt; Previous
                    </p>
                    <p className="text-xl font-bold text-white">
                      {previousCar.name}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Next Car */}
              <Link
                href={`/model/${nextCar.series}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-48 font-mono">
                  <Image
                    src={nextCar.path}
                    alt={nextCar.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <p className="text-sm text-blue-500 mb-1 font-semibold text-right">
                      Next &gt;&gt;
                    </p>
                    <p className="text-xl font-bold text-white">
                      {nextCar.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
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
              Interested in {car.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a test drive and experience the thrill firsthand
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
