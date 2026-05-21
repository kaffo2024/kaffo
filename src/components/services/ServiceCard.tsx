"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { MdOutlineComputer } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    cover: string;
    slug: string;
    parent: string;
  };
  isActive: boolean;
}

export default function ServiceCard({ service, isActive }: ServiceCardProps) {
  // Service type specific icon
  const serviceIcon =
    service.parent === "market" ? (
      <TbTargetArrow className="text-sm" />
    ) : (
      <MdOutlineComputer className="text-sm" />
    );

  return (
    <motion.div
      // whileHover={{ y: isActive? -4 : 0 }}
      animate={{ scale: isActive ? 1.02 : 1 }}
      className="group relative"
    >
      {/* Subtle Active Indicator */}
      {/* {isActive && (
        <div className="absolute -inset-px bg-gradient-to-r from-calypso-600/10 via-transparent to-calypso-600/10 rounded-2xl"></div>
      )} */}

      {/* Main Card */}
      <div
        className={`relative bg-white rounded-xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-92 ${
          isActive
            ? "border-calypso-800"
            : "border-gray-100"
        }`}
      >
        {/* Image Container */}
        <div className="relative h-60 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${service.cover})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Minimal Badge */}
          <div className="absolute top-3 right-3">
            <div className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-xs font-medium text-gray-700">
                {serviceIcon}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-calypso-800 transition-colors line-clamp-2 pr-2">
              {service.title}
            </h3>
          </div>

          {/* Compact Description */}
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            خدمة متخصصة في مجال {service.parent} بأعلى معايير الجودة.
          </p>

          {/* Minimal Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              {
                icon: CheckCircleOutlined,
                text: "جودة عالية",
                color: "text-green-500",
              },
              {
                icon: ClockCircleOutlined,
                text: "تسليم سريع",
                color: "text-blue-500",
              },
              {
                icon: TeamOutlined,
                text: "فريق متخصص",
                color: "text-purple-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 text-gray-700"
              >
                <item.icon className={`text-sm ${item.color}`} />
                <span className="text-xs">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Clean CTA */}
          <Link href={`/services/${service.parent}/${service.slug}`}>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-50 hover:bg-gray-50 border border-gray-200 hover:border-calypso-800 transition-all duration-200 group/btn">
              <span className="text-sm font-medium text-gray-700 group-hover/btn:text-calypso-800">
                عرض المزيد
              </span>
              <span className="text-calypso opacity-0 translate-x-10 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 font-bold">
                ←
              </span>
            </button>
          </Link>
        </div>

        {/* Subtle Corner Accent */}
        <div
          className={`absolute top-0 left-0 w-8 h-8 overflow-hidden ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-300`}
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-calypso-500/20 rotate-45 rounded-sm"></div>
        </div>
      </div>
    </motion.div>
  );
}
