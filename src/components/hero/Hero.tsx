"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../../public/logo/Logo";

// Background options - choose one from these:
const backgroundOptions = [
  {
    id: 1,
    name: "Light Workspace",
    url: "./hero-bgs/light-workspace.jfif",
    description: "Bright modern workspace",
  },
  {
    id: 2,
    name: "Minimal Office",
    url: "./hero-bgs/minimal-office.jfif",
    description: "Clean, professional office space",
  },
  {
    id: 3,
    name: "Digital Connection",
    url: "./hero-bgs/digital-connection.jpg",
    description: "Abstract digital connections",
  },
  {
    id: 4,
    name: "Marketing Dashboard",
    url: "./hero-bgs/marketing-dashboard.jpg",
    description: "Modern gradient with tech elements",
  },
  {
    id: 5,
    name: "Dark Professional",
    url: "./hero-bgs/dark-professional.jfif",
    description: "Dark mode professional background",
  },
];

function Hero() {
  const [currentBg, setCurrentBg] = useState(backgroundOptions[0]);
  const [isChanging, setIsChanging] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef(null);

  const handleNextBg = () => {
    setIsChanging(true);
    const currentIndex = backgroundOptions.findIndex(
      (bg) => bg.id === currentBg.id
    );
    const nextIndex = (currentIndex + 1) % backgroundOptions.length;
    setTimeout(() => {
      setCurrentBg(backgroundOptions[nextIndex]);
      setIsChanging(false);
    }, 200);
  };

  const handlePrevBg = () => {
    setIsChanging(true);
    const currentIndex = backgroundOptions.findIndex(
      (bg) => bg.id === currentBg.id
    );
    const prevIndex =
      (currentIndex - 1 + backgroundOptions.length) % backgroundOptions.length;
    setTimeout(() => {
      setCurrentBg(backgroundOptions[prevIndex]);
      setIsChanging(false);
    }, 200);
  };

  // Floating animation for circle
  useEffect(() => {
    if (circleRef.current) {
      const circle = circleRef.current;
      let angle = 0;

      const animate = () => {
        const y = Math.sin(angle) * 30;
        circle.style.transform = `translateY(${y}px)`;
        angle += 0.02;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  // Automatic background rotation
  useEffect(() => {
    const changeBackground = () => {
      setIsChanging(true);
      const currentIndex = backgroundOptions.findIndex(
        (bg) => bg.id === currentBg.id
      );
      const nextIndex = (currentIndex + 1) % backgroundOptions.length;

      setTimeout(() => {
        setCurrentBg(backgroundOptions[nextIndex]);
        setIsChanging(false);
      }, 300);
    };

    // Change background every 8 seconds
    const interval = setInterval(changeBackground, 8000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentBg]);

  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-br from-calypso-900 via-calypso-800 to-calypso-950">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isChanging ? "opacity-0" : "opacity-30"
        }`}
        style={{ backgroundImage: `url('${currentBg.url}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-calypso-900/90 via-calypso-800/70 to-calypso-900/60"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div
        ref={circleRef}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-koromiko-400/60 to-calypso-500/80 blur-2xl opacity-40 z-10"
      ></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-calypso-600/20 to-koromiko-300/20 blur-3xl opacity-30 z-0"></div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-12 lg:py-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-right lg:pr-12"
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-2 rounded-full bg-calypso-700/30 border border-calypso-500/50 text-calypso-200 text-sm font-medium mb-4">
                الابتكار يلتقي بالإنجاز
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="block text-koromiko-300">هَــــلَا</span>
                <span className="block">
                  خـلـيـك <span className="text-koromiko-400">كــفــوَّ</span>
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              نحوّل البرمجة والتسويق إلى فن يُصنع بروح إيجابية ومتميّزة، ونقدّم
              حلولاً ذكية تسهّل رحلة النجاح لعملائنا، وتدعمهم بخطوات مدروسة من
              أول فكرة إلى النتيجة
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/201147617485"
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-koromiko-500 to-koromiko-600 hover:from-koromiko-600 hover:to-koromiko-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>ابدأ مشروعك الآن</span>
                <FaWhatsapp className="text-xl animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-koromiko-400/30 to-koromiko-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-calypso-400 hover:border-calypso-300 text-calypso-100 hover:text-white font-semibold px-8 py-4 rounded-xl hover:bg-calypso-700/30 transition-all duration-300"
              >
                <span>اكتشف خدماتنا</span>
                <FaArrowDown className="animate-bounce" />
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              <div className="text-center p-4 bg-calypso-800/30 rounded-xl border border-calypso-700/50">
                <div className="text-2xl font-bold text-koromiko-300">+50</div>
                <div className="text-sm text-gray-300">مشروع ناجح</div>
              </div>
              <div className="text-center p-4 bg-calypso-800/30 rounded-xl border border-calypso-700/50">
                <div className="text-2xl font-bold text-koromiko-300">+30</div>
                <div className="text-sm text-gray-300">عميل سعيد</div>
              </div>
              <div className="text-center p-4 bg-calypso-800/30 rounded-xl border border-calypso-700/50">
                <div className="text-2xl font-bold text-koromiko-300">100%</div>
                <div className="text-sm text-gray-300">رضا العملاء</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative w-full h-[350px] lg:h-[500px]">
              {/* Main Illustration Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-calypso-800/20 to-koromiko-500/10 rounded-3xl border border-calypso-600/30 backdrop-blur-sm p-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Floating Elements */}
                  <div className="absolute top-1 right-1 md:top-4 md:right-4 animate-bounce-too-slow delay-1000">
                    <div className="size-20 md:size-28 bg-gradient-to-br from-calypso-600 to-calypso-700 rounded-2xl rotate-12 shadow-xl "></div>
                  </div>
                  <div className="absolute -bottom-1 md:bottom-8 -left-4 md:left-8 animate-bounce-slow">
                    <div className="size-24 md:size-32 bg-gradient-to-br from-koromiko-500 to-koromiko-600 rounded-2xl -rotate-12 shadow-xl"></div>
                  </div>

                  {/* Central Graphic */}
                  <div className="size-48 md:size-56 bg-gradient-to-br from-calypso-500/20 to-koromiko-500/20 rounded-full border-2 border-dashed border-calypso-400/50 flex items-center justify-center animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-32 md:size-40 bg-gradient-to-br from-calypso-600 to-calypso-800 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white text-2xl font-bold">
                      <Logo className="w-20 md:w-28 fill-koromiko-400" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Background Switch Controls */}
              {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <button
                  onClick={handlePrevBg}
                  className="p-3 rounded-full bg-calypso-800/80 hover:bg-calypso-700 text-white border border-calypso-600/50 transition-all duration-300 hover:scale-110"
                >
                  <FiChevronRight className="text-lg" />
                </button>

                <div className="px-4 py-2 bg-calypso-900/80 backdrop-blur-sm rounded-xl border border-calypso-600/50">
                  <span className="text-sm text-gray-300">
                    الخلفية: {currentBg.name}
                  </span>
                </div>

                <button
                  onClick={handleNextBg}
                  className="p-3 rounded-full bg-calypso-800/80 hover:bg-calypso-700 text-white border border-calypso-600/50 transition-all duration-300 hover:scale-110"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-calypso-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-koromiko-400 rounded-full mt-2"></div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Hero;
