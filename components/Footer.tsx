"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="text-white sm:pt-16 md:pt-20 pt-8 pb-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo width={50} />
              <span className="text-2xl font-bold tracking-tighter block">
                BMW
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the ultimate driving pleasure with BMW Indonesia.
              Discover our range of luxury vehicles designed for performance and
              elegance.
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: FaFacebookF,
                  href: "https://facebook.com/bmwindonesia",
                },
                { Icon: FaTwitter, href: "https://twitter.com/bmwindonesia" },
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com/bmwindonesia",
                },
                {
                  Icon: FaLinkedinIn,
                  href: "https://linkedin.com/company/bmw",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Models */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Models</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Electric Vehicles", href: "/model?type=electric" },
                { name: "SUV Series", href: "/model?tag=suv" },
                { name: "Sedan Series", href: "/model?tag=sedan" },
                { name: "M Performance", href: "/model" },
                { name: "View All Models", href: "/model" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "About BMW", href: "/#about" },
                { name: "Test Drive", href: "/#contact-us" },
                { name: "Contact Us", href: "/#contact-us" },
                { name: "Find a Dealer", href: "/#contact-us" },
                { name: "Customer Service", href: "/#contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-relaxed">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@bmw.co.id"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@bmw.co.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+622150001234"
                  className="hover:text-blue-400 transition-colors"
                >
                  +62 21 5000 1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 BMW Indonesia. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
