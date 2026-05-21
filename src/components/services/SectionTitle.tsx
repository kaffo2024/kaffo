"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-calypso-50 to-koromiko-50 rounded-full border border-calypso-200">
          <div className="w-2 h-2 rounded-full bg-calypso-600 animate-pulse"></div>
          <span className="text-sm font-medium text-calypso-700">
            خدمات متكاملة
          </span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-calypso-600 via-calypso-700 to-calypso-800 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
        >
          {subtitle}
        </motion.h3>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Animated Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-transparent via-calypso-500 to-transparent mx-auto mt-8 rounded-full"
      />
    </div>
  );
}
