"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";
import { carListNew } from "@/lib/carListNew";

export default function SimulasiCicilan() {
  const [selectedSeries, setSelectedSeries] = useState("");
  const [tenor, setTenor] = useState(36); // Default: 36 months
  const [downPayment, setDownPayment] = useState("");

  // Get unique series from carList
  const seriesOptions = useMemo(() => {
    const uniqueSeries = Array.from(
      new Set(carListNew.map((car) => car.series))
    ).filter((series) => series);
    return uniqueSeries;
  }, []);

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (!numericValue) return "";
    return new Intl.NumberFormat("id-ID").format(Number(numericValue));
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setDownPayment(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Halo, saya ingin simulasi cicilan BMW dengan detail berikut:
    
Series: ${selectedSeries.toUpperCase()}
Tenor: ${tenor} bulan (${Math.floor(tenor / 12)} tahun)
Down Payment: Rp ${formatCurrency(downPayment)}

Mohon informasi lebih lanjut. Terima kasih!`;

    // WhatsApp number (replace with actual number)
    const phoneNumber = "6281234567890"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-[72px] font-sans">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Installment Simulation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                BMW
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in the form and we'll contact you via WhatsApp
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Series Dropdown */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  BMW Series <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select Series</option>
                  {seriesOptions.map((series) => (
                    <option key={series} value={series}>
                      BMW {series.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tenor Dropdown */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Tenor (Months) <span className="text-red-500">*</span>
                </label>
                <select
                  value={tenor}
                  onChange={(e) => setTenor(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value={12}>12 months (1 year)</option>
                  <option value={24}>24 months (2 years)</option>
                  <option value={36}>36 months (3 years)</option>
                  <option value={48}>48 months (4 years)</option>
                  <option value={60}>60 months (5 years)</option>
                </select>
              </div>

              {/* Down Payment Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Down Payment (DP) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    Rp
                  </span>
                  <input
                    type="text"
                    value={formatCurrency(downPayment)}
                    onChange={handleDownPaymentChange}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="0"
                    required
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Enter your down payment amount in IDR
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full hover:cursor-pointer bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                disabled={!selectedSeries || !downPayment}
              >
                <FaWhatsapp className="text-2xl" />
                Ask Our Sales
              </button>
            </form>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">
              * This simulation is only an estimate. Actual installments may
              vary depending on dealer and financing institution policies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
