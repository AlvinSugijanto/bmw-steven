"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on homepage
      if (isHomepage) {
        const sections = ["home", "request-demo", "contact-us"];
        const scrollPosition = window.scrollY + 200; // Offset for header

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // Show background if scrolled OR not on homepage
  const showBackground = isScrolled || !isHomepage;

  // Check if a link is active
  const isLinkActive = (link: (typeof navLinks)[0]) => {
    const linkPath = link.href.split("#")[0] || "/";
    const linkHash = link.href.split("#")[1];

    // For page routes (not hash links)
    if (!linkHash) {
      return linkPath === "/"
        ? pathname === "/"
        : pathname.startsWith(linkPath) && linkPath !== "/";
    }

    // For hash links on homepage
    if (isHomepage && linkHash) {
      return activeSection === linkHash;
    }

    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        showBackground ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between px-6 border-b border-gray-200 transition-all duration-300 ",
          showBackground ? "py-2" : "py-3"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="BMW Logo"
            width={50}
            height={50}
            className="w-10 h-10 md:w-[50px] md:h-[50px]"
          />
          {/* <p className="text-2xl font-serif flex justify-center gap-2.5">
            BMW
            <span className="">Tunas</span>
          </p> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);

            // Regular nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1 font-normal transition-colors group",
                  showBackground
                    ? isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                    : isActive
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <FaChevronDown className="text-xs opacity-70" />
                )}
                {/* Underline effect */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                    showBackground ? "bg-blue-600" : "bg-blue-400"
                  )}
                ></span>
              </Link>
            );
          })}
        </nav>
        <Link
          key={"simulate-installment"}
          href={"/simulasi-cicilan"}
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg items-center gap-2 text-sm"
        >
          Simulate Installment
          <FaArrowRight className="transform -rotate-45" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden text-xl transition-colors",
            showBackground
              ? "text-gray-800 hover:text-gray-600"
              : "text-white hover:text-gray-300"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);

            // Regular mobile nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "py-2 block text-center font-medium transition-colors",
                  isActive
                    ? "text-blue-400 font-bold"
                    : "text-white hover:text-gray-300"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            key={"simulate-installment"}
            href={"/simulasi-cicilan"}
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
