"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaUser,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/#home", hasDropdown: false },
  { name: "Models", href: "/model" },
  { name: "Test Drive", href: "/#request-demo", hasDropdown: false },

  { name: "Contact Us", href: "/#contact-us" },

  // {
  //   name: "Simulate Installment",
  //   href: "/simulasi-cicilan",
  // },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-900",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="BMW Logo" width={50} height={50} />
          {/* <p className="text-2xl font-serif flex justify-center gap-2.5">
            BMW
            <span className="">Tunas</span>
          </p> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Special styling for Simulate Installment button

            // Regular nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center gap-1 text-gray-800 hover:text-blue-600 font-normal transition-colors group"
              >
                {link.name}
                {link.hasDropdown && (
                  <FaChevronDown className="text-xs opacity-70" />
                )}
                {/* Underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>
        <Link
          key={"simulate-installment"}
          href={"#simulate-installment"}
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg items-center gap-2 text-sm"
        >
          Simulate Installment
          <FaArrowRight className="transform -rotate-45" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl transition-colors hover:text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            // Special styling for Simulate Installment button in mobile

            // Regular mobile nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300 py-2 block text-center font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            key={"simulate-installment"}
            href={"#simulate-installment"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Simulate Installment
            <FaArrowRight className="text-sm transform -rotate-45" />
          </Link>
        </div>
      )}
    </header>
  );
}
