"use client";
import { motion } from "framer-motion";
import Logo from "../../public/logo/Logo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-calypso-50/30 flex flex-col items-center justify-center p-4">
      {/* Background Elements */}
      {/* they lead to horizontal overflow */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-calypso-100/20 to-koromiko-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-calypso-100/10 to-koromiko-100/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> */}

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto">
            {/* Outer Circle */}
            <motion.div
              className="absolute -inset-4 border-4 border-calypso-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle Circle */}
            <motion.div
              className="absolute inset-5 border-4 border-calypso-600 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Circle */}
            <motion.div
              className="absolute inset-16 border-4 border-calypso-700 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="size-24 rounded-xl bg-gradient-to-br from-calypso-600/90 to-calypso-800/95 flex items-center justify-center shadow-lg px-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Logo className="fill-koromiko" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            جارِ التحميل<span className="text-calypso-600">...</span>
          </h1>
          <p className="text-lg text-gray-600">
            يرجى الانتظار قليلاً، نحن نجهز المحتوى لك
          </p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-br from-calypso-500 to-calypso-600"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto mb-4"
        >
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-calypso-400 via-calypso-500 to-calypso-600"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Loading Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <div className="inline-block px-4 py-2 bg-calypso-50 rounded-full border border-calypso-200">
            <p className="text-sm text-calypso-700 font-medium">
              {/* <span className="animate-pulse">⚡</span> */}
              نعمل على تحميل أفضل تجربة لك
            </p>
          </div>
        </motion.div>

        {/* Random Tips */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm max-w-md mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-3">هل تعلم؟</h3>
            <p className="text-gray-600">
              فريق <span className="text-calypso-700 font-semibold">كفو</span>{" "}
              يعمل باستمرار على تحسين تجربتك وتقديم المحتوى الأمثل.
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
