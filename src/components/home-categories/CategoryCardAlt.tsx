"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeftOutlined,
  RocketOutlined,
  CodeOutlined,
  ApiOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  CloudOutlined,
} from "@ant-design/icons";

// currently not in use

interface CategoryCardProps {
  category: {
    id: string | number;
    name: string;
    description: string;
    image: string;
    ref: string;
    url: string;
  };
  index: number;
}

const categoryIcons = [
  <RocketOutlined key="rocket" />,
  <CodeOutlined key="code" />,
  <ApiOutlined key="api" />,
  <AppstoreOutlined key="appstore" />,
  <DatabaseOutlined key="database" />,
  <CloudOutlined key="cloud" />,
];

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const icon = categoryIcons[index % categoryIcons.length];

  return (
    <Link href={category.url}>
      <motion.div
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-full"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-calypso-400/30 via-koromiko-400/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

        {/* Main Card */}
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-calypso-300">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            {/* Icon Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                <div className="text-2xl text-white">{icon}</div>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  {category.ref}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-calypso-700 transition-colors">
              {category.name}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {category.description}
            </p>

            {/* Stats/Features */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-500">متاح الآن</span>
              </div>
              <div className="text-xs px-3 py-1 bg-calypso-50 text-calypso-700 rounded-full font-medium">
                +{Math.floor(Math.random() * 20) + 10} مشروع
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 group-hover:text-calypso-600 transition-colors">
                اكتشف المزيد
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.3,
                }}
                className="text-calypso-600"
              >
                <ArrowLeftOutlined />
              </motion.div>
            </div>
          </div>

          {/* Hover Effect Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-calypso-500 to-koromiko-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </motion.div>
    </Link>
  );
}
