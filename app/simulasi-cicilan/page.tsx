"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaCar } from "react-icons/fa";
import Link from "next/link";

export default function SimulasiCicilan() {
  const [carPrice, setCarPrice] = useState(2000000000); // Default: Rp 2 Miliar
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // Default: 20%
  const [loanTerm, setLoanTerm] = useState(36); // Default: 36 bulan
  const [interestRate, setInterestRate] = useState(3.5); // Default: 3.5% per tahun

  // Calculate values
  const downPayment = useMemo(
    () => (carPrice * downPaymentPercent) / 100,
    [carPrice, downPaymentPercent]
  );

  const loanAmount = useMemo(
    () => carPrice - downPayment,
    [carPrice, downPayment]
  );

  const monthlyInterestRate = useMemo(
    () => interestRate / 12 / 100,
    [interestRate]
  );

  const monthlyPayment = useMemo(() => {
    if (monthlyInterestRate === 0) return loanAmount / loanTerm;
    return (
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1)
    );
  }, [loanAmount, monthlyInterestRate, loanTerm]);

  const totalPayment = useMemo(
    () => monthlyPayment * loanTerm,
    [monthlyPayment, loanTerm]
  );

  const totalInterest = useMemo(
    () => totalPayment - loanAmount,
    [totalPayment, loanAmount]
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-white pt-[72px] font-sans">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Installment Simulation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                BMW
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Calculate your monthly installment for your dream BMW
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-gray-200 rounded-2xl p-8 bg-gray-50"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaMoneyBillWave className="text-blue-400" />
                Financing Details
              </h2>

              {/* Car Price */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Car Price
                </label>
                <input
                  type="text"
                  value={formatCurrency(carPrice)}
                  onChange={(e) => {
                    // Remove all non-numeric characters
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    setCarPrice(Number(numericValue) || 0);
                  }}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rp 0"
                />
              </div>

              {/* Down Payment */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Down Payment (DP): {downPaymentPercent}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    setDownPaymentPercent(Number(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-gray-600 text-sm mt-2">
                  <span>10%</span>
                  <span className="font-semibold text-blue-400">
                    {formatCurrency(downPayment)}
                  </span>
                  <span>50%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Installment Term
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-3 rounded-lg font-semibold transition-all ${
                        loanTerm === term
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  {loanTerm} months ({Math.floor(loanTerm / 12)} years)
                </p>
              </div>

              {/* Interest Rate */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Interest Rate (% per year)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  step="0.1"
                  min="0"
                  max="20"
                />
                <p className="text-gray-600 text-sm mt-2">
                  Interest per month: {(interestRate / 12).toFixed(3)}%
                </p>
              </div>
            </motion.div>

            {/* Right Column - Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Monthly Payment - Highlighted */}
              <div className="bg-blue-600 rounded-2xl p-8">
                <p className="text-blue-100 text-sm font-semibold mb-2 uppercase tracking-wide">
                  Monthly Installment
                </p>
                <p className="text-5xl font-bold text-white mb-2">
                  {formatCurrency(monthlyPayment)}
                </p>
                <p className="text-blue-100 text-sm">For {loanTerm} months</p>
              </div>

              {/* Other Details */}
              <div className="border border-gray-200 rounded-2xl p-6 space-y-4 bg-white">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Car Price</span>
                  <span className="text-gray-900 font-semibold">
                    {formatCurrency(carPrice)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Down Payment (DP)</span>
                  <span className="text-gray-900 font-semibold">
                    {formatCurrency(downPayment)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="text-gray-900 font-semibold">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-orange-400 font-semibold">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-700 font-bold">Total Payment</span>
                  <span className="text-gray-900 font-bold text-xl">
                    {formatCurrency(totalPayment)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  Interested in this simulation? Contact us for more information
                  and the best offers!
                </p>
                <Link
                  href="/#request-demo"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request Test Drive
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
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
