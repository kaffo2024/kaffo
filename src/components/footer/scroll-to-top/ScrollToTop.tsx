"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`group fixed bottom-8 left-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-calypso-700 to-calypso-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 
      ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } 
      hidden md:flex items-center justify-center`}
      aria-label="العودة للأعلى"
    >
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold group-hover:-translate-y-1 transition-transform duration-300">
            <FaArrowUp />
          </span>
        </div>

        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-koromiko-400 border-r-calypso-400 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow"></div>
      </div>

      <div className="absolute -inset-1 bg-gradient-to-br from-calypso-600/40 to-koromiko-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </button>
  );
};

export default ScrollToTop;
