"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <section className=" text-white pt-20 pb-10 bg-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo width={50} />
              <span className="text-2xl font-bold tracking-tighter  block">
                BMW
              </span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              We provide the highest quality luxury vehicles for your journey.
              Experience the comfort and class with Autodune.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary-500 transition-colors"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100">
              {["About Us", "Our Fleet", "Services", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-blue-100">
              {[
                "Corporate Rental",
                "Wedding Service",
                "Airport Transfer",
                "Intercity Service",
                "Event Transport",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-blue-100 mb-6">
              Subscribe to get the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-white text-white placeholder:text-blue-200 transition-colors"
              />
              <button className="bg-white text-primary-500 px-4 py-3 rounded-r-lg hover:bg-blue-50 transition-colors font-bold">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>© 2025 Autodune Clone. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
