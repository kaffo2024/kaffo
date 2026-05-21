"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HomeOutlined,
  FrownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/90 to-calypso-50/50 flex flex-col items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-calypso-100/20 to-koromiko-100/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-calypso-100/10 to-koromiko-100/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-calypso-50 rounded-full border border-calypso-200 mb-6">
          <FrownOutlined className="text-2xl text-calypso-600" />
          <span className="text-lg font-medium text-calypso-700">
            الصفحة غير موجودة
          </span>
        </div>
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="text-9xl font-black text-calypso-900/10 tracking-wider">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-calypso-600 via-calypso-700 to-calypso-800 bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            عذراً، لم نتمكن من العثور على الصفحة المطلوبة
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            ربما تكون الصفحة قد تم نقلها أو حذفها، أو ربما أخطأت في كتابة
            العنوان. نحن هنا لمساعدتك في العودة إلى المسار الصحيح.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-calypso-500/10 to-koromiko-400/10 rounded-full blur-xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-dashed border-calypso animate-spin-slow flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-calypso-100 to-white border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-calypso-800">!</div>
                    <div className="text-sm text-gray-600 mt-2">غير موجود</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700 hover:to-calypso-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <HomeOutlined className="text-lg" />
              <span>العودة للرئيسية</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-calypso-500/30 to-calypso-700/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 border-2 border-calypso-400 hover:border-calypso-500 text-calypso-700 hover:text-calypso-800 font-semibold px-8 py-4 rounded-xl hover:bg-calypso-50 transition-all duration-300"
          >
            <ArrowLeftOutlined className="text-lg" />
            <span>العودة للخلف</span>
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-4">
            إذا كنت تعتقد أن هذا خطأ، يمكنك التواصل مع فريق الدعم
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:info@kaffo.co"
              className="inline-flex items-center gap-2 text-calypso-600 hover:text-calypso-700 font-medium"
            >
              <span>info@kaffo.co</span>
            </a>
            <a
              href="tel:+201147617485"
              className="inline-flex items-center gap-2 text-calypso-600 hover:text-calypso-700 font-medium"
            >
              <span>201147617485+</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
