"use client";
import { motion } from "framer-motion";
import { FiRefreshCw, FiHome, FiAlertTriangle } from "react-icons/fi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Logo from "../../public/logo/Logo";

interface ErrorComponentProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorComponentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-calypso-50/30 flex flex-col items-center justify-center p-4">
      {/* Error Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="relative w-40 h-40 mx-auto">
          {/* Pulsing Alert Circle */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Error Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="size-32 rounded-xl bg-gradient-to-br from-red-500/90 to-red-600/95 flex items-center justify-center shadow-lg"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative">
                <HiOutlineExclamationCircle className="text-white text-5xl" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Error Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          حدث خطأ غير متوقع
          <span className="text-red-600">!</span>
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          عذراً، حدث خطأ ما أثناء تحميل الصفحة
        </p>

        {/* Error Details (Collapsible */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="text-red-500 mt-1 flex-shrink-0" />
            <div className="text-right">
              <p className="text-red-700 font-medium mb-2">تفاصيل الخطأ:</p>
              <code className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded-lg block text-right overflow-x-auto">
                {error.message || "خطأ غير معروف"}
              </code>
              {error.digest && (
                <p className="text-xs text-red-500 mt-2 text-left">
                  كود الخطأ: {error.digest}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Suggested Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-calypso-600 to-calypso-700 text-white rounded-xl font-semibold hover:from-calypso-700 hover:to-calypso-800 transition-all shadow-lg hover:shadow-xl"
          >
            <FiRefreshCw className="text-lg" />
            <span>إعادة المحاولة</span>
          </motion.button>

          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
          >
            <FiHome className="text-lg" />
            <span>العودة للرئيسية</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Error Status Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { label: "الاتصال", status: "online", color: "bg-green-500" },
            { label: "الخادم", status: "error", color: "bg-red-500" },
            { label: "الذاكرة", status: "ok", color: "bg-green-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <div
                  className={`w-2 h-2 rounded-full ${item.color} animate-pulse`}
                />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
              <span className="text-xs text-gray-500">{item.status}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Help Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-calypso-50 rounded-full border border-calypso-200">
          <p className="text-sm text-calypso-700 font-medium">
            {/* <span className="animate-pulse">💡</span> */}
            إذا استمر الخطأ، يرجى التواصل مع الدعم الفني
          </p>
        </div>
      </motion.div>

      {/* Logo/Brand */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Logo className="fill-gray-400 w-24 h-24" />
      </motion.div>
    </div>
  );
}
