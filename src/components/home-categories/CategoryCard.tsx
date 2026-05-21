import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { CategoryType } from "@/src/types/data-type";

interface CategoryCardProps {
  item: CategoryType;
}

export default function CategoryCard({ item }: CategoryCardProps) {
  // color schemes for each category
  const colorSchemes = {
    orange: {
      bgGradient: "from-orange-500/10 via-orange-400/5 to-transparent",
      borderColor: "border-orange-100",
      iconBg: "bg-gradient-to-br from-orange-50 to-amber-50",
      iconBorder: "border-orange-100",
      titleColor: "text-orange-800",
      accentColor: "bg-orange-500",
      accentText: "text-orange-600",
      lightAccent: "bg-orange-50",
      ctaBg: "bg-orange-50 hover:bg-orange-100",
      ctaBorder: "border-orange-200",
      ctaText: "text-orange-700 hover:text-orange-800",
      ctaArrow: "text-orange-600",
      featureColor: "text-orange-600",
      gradientBar: "from-orange-500 to-amber-500",
      badgeBg: "bg-orange-100 text-orange-800",
    },
    calypso: {
      bgGradient: "from-calypso-700/10 via-calypso-500/5 to-transparent",
      borderColor: "border-calypso-100",
      iconBg: "bg-gradient-to-br from-calypso-50 to-calypso-100",
      iconBorder: "border-calypso-100",
      titleColor: "text-calypso-900",
      accentColor: "bg-calypso-800",
      accentText: "text-calypso-700",
      lightAccent: "bg-calypso-50",
      ctaBg: "bg-calypso-50 hover:bg-calypso-100",
      ctaBorder: "border-calypso-200",
      ctaText: "text-calypso-800 hover:text-calypso-900",
      ctaArrow: "text-calypso-700",
      featureColor: "text-calypso-700",
      gradientBar: "from-calypso-700 to-calypso-800",
      badgeBg: "bg-calypso-100 text-calypso-800",
    },
  };

  const colors = colorSchemes[item.color as keyof typeof colorSchemes];

  return (
    <div className="group relative h-full">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.bgGradient} rounded-2xl`}
        />
      </div>

      {/* Main Card */}
      <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col justify-between">
        {/* Gradient accent bar */}
        <div
          className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${colors.gradientBar}`}
        ></div>

        {/* Icon badge */}
        <div className="absolute top-6 left-6 z-10">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-sm ${colors.iconBg} ${colors.iconBorder} border`}
          >
            {item.icon}
          </div>
        </div>

        {/* Image container */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent z-10"></div>
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          {/* Title section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${colors.badgeBg}`}
              >
                {item.color === "orange" ? "خدمات تسويقية" : "خدمات برمجية"}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${colors.accentColor}`}
                  ></div>
                ))}
              </div>
            </div>
            <h3
              className={`text-2xl font-bold text-right ${colors.titleColor} mb-3`}
            >
              {item.name}
            </h3>

            {/* Short description as subtitle */}
            {/* <p className={`text-sm font-medium ${colors.accentText} text-right mb-4 leading-relaxed`}>
              {item.shortDescription}
            </p> */}
          </div>

          {/* Description section - Enhanced design */}
          <div className="mb-8">
            {/* Description header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${colors.lightAccent}`}>
                <InfoCircleOutlined
                  className={`text-lg ${colors.accentText}`}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-right">
                  وصف الخدمة
                </h4>
                <div className={`w-12 h-0.5 ${colors.accentColor} mt-1`}></div>
              </div>
            </div>

            {/* Description content with beautiful styling */}
            <div className="relative">
              {/* Decorative quote marks */}
              <div className="absolute -top-8 -right-4 text-9xl opacity-15 font-serif">
                <span className={`${colors.accentText}`}>&quot;</span>
              </div>

              {/* Description text */}
              <div
                className={`p-4 rounded-xl ${colors.lightAccent} border border-gray-100`}
              >
                <p className="text-gray-700 text-sm leading-relaxed font-medium text-justify">
                  {item.description}
                </p>

                {/* Decorative line at bottom */}
                <div
                  className={`w-16 h-0.5 ${colors.accentColor} mt-4 opacity-60`}
                ></div>
              </div>

              {/* Feature count indicator */}
              <div className="absolute -bottom-3 right-4">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badgeBg} shadow-sm`}
                >
                  {item.features.length} ميزة أساسية
                </div>
              </div>
            </div>
          </div>

          {/* Key features preview */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 text-right mb-4">
              أبرز المميزات:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {item.features.slice(0, 2).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircleFilled
                      className={`text-sm ${colors.featureColor}`}
                    />
                  </div>
                  <span className="text-sm text-gray-700 text-right flex-1 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* View all features link */}
            <div className="mt-3 text-center">
              <span className="text-xs text-gray-500">
                +{item.features.length - 2} ميزات أخرى
              </span>
            </div>
          </div>

          {/* call to action */}
          <Link href={item.url} className="block">
            <div
              className={`
              flex items-center justify-between p-4 rounded-xl border transition-all duration-300
              ${colors.ctaBg} ${colors.ctaBorder} border
              group-hover:shadow-md group-hover:-translate-y-0.5
            `}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.accentColor}`}
                >
                  <ArrowLeftOutlined className="text-white text-sm" />
                </div>
                <div className="text-right">
                  <span
                    className={`block text-sm font-semibold ${colors.ctaText}`}
                  >
                    اكتشف كافة الخدمات
                  </span>
                  <span className="block text-xs text-gray-500 mt-1">
                    حلول متخصصة وخطط مخصصة
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-medium ${colors.ctaText} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  عرض المزيد
                </span>
                <div
                  className={`w-6 h-6 rounded-full ${colors.accentColor} flex items-center justify-center`}
                >
                  <LeftOutlined className="text-white text-sm" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Professional corner decoration */}
        <div
          className={`absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${colors.accentColor} rounded-full translate-x-[-40%] translate-y-[40%]`}
        ></div>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colors.bgGradient} blur-xl`}
        ></div>
      </div>
    </div>
  );
}
