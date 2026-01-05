"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    content:
      "The best car rental experience I've ever had. Properties were clean, service was impeccable, and the car was a dream to drive.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    role: "Travel Blogger",
    content:
      "Autodune made our road trip unforgettable. The booking process was smooth and simple, and the car was in perfect condition.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    content:
      "I rent from Autodune every time I'm in the city. Their fleet is unmatched and the prices are very competitive for the quality.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100 skew-x-12 pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 p-10 rounded-2xl h-full hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 overflow-hidden relative">
                    {/* Placeholder avatar */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold">{review.name}</h4>
                    <span className="text-xs text-primary-500 uppercase tracking-wider">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
