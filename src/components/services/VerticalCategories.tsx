"use client";
import React, { useRef, useEffect } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { categories } from "@/src/data/data";

// Parallax hook
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function VerticalCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useParallax(scrollYProgress, 120);
  const backgroundY2 = useParallax(scrollYProgress, -80);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const CategorySection = ({
    category,
    index,
  }: {
    category: any;
    index: number;
  }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (sectionRef.current) sectionRefs.current[index] = sectionRef.current;
    }, [index]);

    const { scrollYProgress: sectionProgress } = useScroll({
      target: sectionRef,
      offset: ["start center", "end center"],
    });

    const cardY = useParallax(sectionProgress, 80);
    const cardScale = useTransform(
      sectionProgress,
      [0, 0.5, 1],
      [0.97, 1, 0.97]
    );
    const cardOpacity = useTransform(
      sectionProgress,
      [0, 0.3, 0.7, 1],
      [0, 1, 1, 0]
    );

    return (
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center scroll-snap-align-start px-6 md:px-12"
      >
        <motion.div
          className="w-full max-w-4xl"
          style={{
            y: cardY,
            scale: cardScale,
            opacity: cardOpacity,
          }}
        >
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            {/* Header Gradient */}
            <div
              className={`p-8 md:p-10 bg-gradient-to-r ${category.gradient}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl md:text-5xl">{category.icon}</div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mt-1 md:mt-2 text-sm md:text-base">
                      {category.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="text-white text-xl md:text-2xl font-bold opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {category.description}
              </p>

              <div className="mb-6 md:mb-8">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircleOutlined className="text-green-500 text-lg md:text-xl" />{" "}
                  مميزات الخدمة
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {category.features.map((f: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 999,
                          background:
                            (category.color === "orange" && "#F97316") ||
                            (category.color === "blue" && "#3B82F6") ||
                            "#10B981",
                        }}
                      />
                      <span className="text-gray-700 text-sm md:text-base">
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 md:mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    30+
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    مشروع
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.1,
                    stiffness: 200,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm"
                >
                  <ClockCircleOutlined className="text-2xl md:text-3xl text-calypso-600 mx-auto mb-2" />
                  <div className="text-sm md:text-base text-gray-600">
                    تسليم سريع
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                    stiffness: 200,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm"
                >
                  <TeamOutlined className="text-2xl md:text-3xl text-calypso-600 mx-auto mb-2" />
                  <div className="text-sm md:text-base text-gray-600">
                    فريق متخصص
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-gray-200">
                <div className="text-sm md:text-base text-gray-500">
                  {index + 1} من {categories.length}
                </div>
                <a
                  href={category.url}
                  className="group inline-flex items-center gap-3 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700 hover:to-calypso-800 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>اكتشف المزيد</span>
                  <ArrowDownOutlined className="transform rotate-90 group-hover:translate-x-1 transition-transform font-bold" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-50 scroll-snap-y"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* Parallax background elements */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-calypso-100/30 to-koromiko-100/20 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-calypso-100/20 to-koromiko-100/10 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ y: backgroundY2 }}
      />

      {/* Main content */}
      <div ref={contentRef} className="relative">
        {categories.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>

      {/* Scroll snap helper */}
      <style jsx>{`
        section {
          scroll-snap-align: start;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1.5rem;
        }
        @media (max-width: 768px) {
          section {
            padding: 0 1rem;
            height: 90vh;
          }
        }
      `}</style>
    </div>
  );
}
