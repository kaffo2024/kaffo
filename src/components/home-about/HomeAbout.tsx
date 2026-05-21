"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaHeart, FaRocket, FaUsers } from "react-icons/fa";
import Logo from "../../../public/logo/Logo";
import TextSlideAnimation from "../text-slide-animation/TextSlideAnimation";
import { Typography } from "antd";

function HomeAbout() {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-gray-100">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-calypso-100 to-koromiko-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-calypso-100 to-koromiko-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="mx-auto px-4 sm:px-6 lg:container lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="order-2 lg:order-1 text-right"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-calypso-50 border border-calypso-200 text-calypso-700 text-sm font-medium mb-6">
              <FaHeart className="text-koromiko-500" />
              <span>عــن كــفــو</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-calypso-800">مــن نــحــن؟</span>
              <br />
              <span className="text-koromiko-600 text-2xl sm:text-3xl lg:text-4xl">
                شركاؤك في رحلة النجاح الرقمي
              </span>
            </h2>

            {/* Description */}
            {/* <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              في عالم يدعو إلى التقنية والتطوير، تتألق شركة كفو بتقديم خدمات
              تسويقية متقدمة تعكس رؤيتك بأسلوب إبداعي وفعّال.
            </p> */}

            <Typography className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              <TextSlideAnimation text="في عالم يدعو إلى التقنية والتطوير، تتألق شركة كفو بتقديم خدمات تسويقية متقدمة تعكس رؤيتك بأسلوب إبداعي وفعّال." />
            </Typography>
            <Typography className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              <TextSlideAnimation text="نتميز بحلولنا البرمجية المتطورة والمخصصة، حيث نبتكر تقنيات تلائم احتياجات عملك وتدعم نموه." />
            </Typography>
            <Typography className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              <TextSlideAnimation text="كفو تجمع بين قوة التسويق وذكاء البرمجة لتقدّم لك تجربة فريدة ودعماً متكاملاً في رحلتك نحو النجاح" />
            </Typography>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-calypso-100 rounded-lg">
                  <FaRocket className="text-calypso-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">تسريع النمو</h4>
                  <p className="text-sm text-gray-600">
                    حلول مصممة لتنمية أعمالك
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2 bg-koromiko-100 rounded-lg">
                  <FaUsers className="text-koromiko-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">فريق متخصص</h4>
                  <p className="text-sm text-gray-600">
                    خبراء في التقنية والتسويق
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start w-full">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700 hover:to-calypso-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>اكتشف قصتنا الكاملة</span>
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-calypso-500/30 to-calypso-700/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              {/* Main Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url(./about/about2.jpg)",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-calypso-900/70 via-calypso-800/40 to-koromiko-600/30"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="mb-6">
                      <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                        <span className="text-sm font-medium">نحن كفو</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                        نبتكر المستقبل الرقمي
                      </h3>
                      <p className="text-white/90 max-w-md mx-auto">
                        حيث يلتقي الإبداع بالتكنولوجيا لصنع حلول استثنائية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-6 right-6">
                <div>
                  <Logo className="!w-20 h-fit md:w-28 fill-calypso-800/70" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6">
                <div className="bg-gradient-to-br from-koromiko-500 to-koromiko-600 text-white px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 opacity-70">
                  <div className="text-center">
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-xs opacity-90">دعم فني</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            {/* <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-calypso-700">+30</div>
                  <div className="text-sm text-gray-600">عميل سعيد</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-koromiko-600">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-calypso-700">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
