"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import ServiceCard from "./ServiceCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ServicesType } from "@/src/types/data-type";

interface ServicesSliderProps {
  services: ServicesType[];
}

export default function ServicesSlider({ services }: ServicesSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  if (!services.length) return null;

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-calypso-100/20 to-koromiko-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-calypso-100/10 to-koromiko-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="p-3 rounded-xl bg-gradient-to-r from-calypso-600 to-calypso-700">
                <RiseOutlined className="text-lg text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              خدماتنا <span className="text-calypso-600">التفصيلية</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            اكتشف مجموعة واسعة من الخدمات المتخصصة المصممة بعناية لتحقيق أهدافك
            ودفع أعمالك نحو النجاح
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex justify-between pointer-events-none lg:px-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 size-12 rounded-full bg-white shadow-lg border border-gray-200 hover:border-calypso hover:bg-calypso-50 transition-all duration-200 pointer-events-auto group"
              aria-label="السابق"
            >
              <ArrowRightOutlined className="text-lg text-gray-700 group-hover:text-calypso-600" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 size-12 rounded-full bg-white shadow-lg border border-gray-200 hover:border-calypso hover:bg-calypso-50 transition-all duration-200 pointer-events-auto group"
              aria-label="التالي"
            >
              <ArrowLeftOutlined className="text-lg text-gray-700 group-hover:text-calypso-600" />
            </button>
          </div>

          {/* Swiper Slider */}
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
                scale: 0.85,
              }}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 32,
                  centeredSlides: true,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                  centeredSlides: true,
                },
              }}
              className="!overflow-visible pb-16"
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.id} className="!h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <ServiceCard
                      service={service}
                      isActive={index === activeIndex}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
