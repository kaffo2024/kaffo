"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RouteLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 95) return 95;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-full border-4 border-t-calypso-600 border-r-calypso-500 border-b-calypso-400 border-l-calypso-300"></div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-calypso-400 to-calypso-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <p className="text-sm text-gray-600">
          جاري التحميل... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
