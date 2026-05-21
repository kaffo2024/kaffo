import Image from "next/image";
import Link from "next/link";
import { CheckCircleOutlined } from "@ant-design/icons";
import CategoryCardButton from "../category-card-button/CategoryCardButton";
import { CategoryType } from "@/src/types/data-type";

export default function ServiceCategoryCard({
  category,
}: {
  category: CategoryType;
}) {
  const colorSchemes = {
    orange: {
      bgGradient: "from-koromiko-50 to-koromiko-50",
      borderColor: "border-koromiko-100",
      textColor: "text-koromiko-600",
      accentColor: "bg-koromiko-500",
      lightAccent: "bg-koromiko-100",
      buttonColor: "bg-gradient-to-r from-koromiko-500 to-koromiko-600",
      hoverButtonColor: "hover:from-koromiko-600 hover:to-koromiko-700",
      gradient: "from-koromiko-500 via-koromiko-600 to-koromiko-700",
      cardGradient: "from-koromiko-50 to-white",
      badgeColor: "bg-koromiko-500",
      iconBg: "bg-koromiko-100 text-koromiko-600",
      hoverBg: "hover:bg-koromiko-50",
      ringColor: "ring-koromiko-500",
      darkText: "text-koromiko-900",
      mediumText: "text-koromiko-700",
    },
    calypso: {
      bgGradient: "from-calypso-50 to-calypso-50",
      borderColor: "border-calypso-100",
      textColor: "text-calypso-800",
      accentColor: "bg-calypso-500",
      lightAccent: "bg-calypso-100",
      buttonColor: "bg-gradient-to-r from-calypso-600 to-calypso-700",
      hoverButtonColor: "hover:from-calypso-700 hover:to-calypso-800",
      gradient: "from-calypso-600 via-calypso-700 to-calypso-800",
      cardGradient: "from-calypso-50 to-white",
      badgeColor: "bg-calypso-600",
      iconBg: "bg-calypso-100 text-calypso-600",
      hoverBg: "hover:bg-calypso-50",
      ringColor: "ring-calypso-500",
      darkText: "text-calypso-900",
      mediumText: "text-calypso-700",
    },
  };

  const colors = colorSchemes[category.color as "calypso" | "orange"];

  return (
    <div className="group relative">
      {/* Card Container */}
      <div
        className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border ${colors.borderColor}`}
      >
        {/* Gradient Accent Bar */}
        <div
          className={`absolute top-0 right-0 w-1 h-full ${colors.accentColor}`}
        ></div>

        {/* Image Section */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={category.id === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Icon Badge */}
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
              {category.icon}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8">
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bgGradient} ${colors.textColor}`}
            >
              {category.color === "orange" ? "خدمات تسويقية" : "خدمات برمجية"}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`text-2xl lg:text-3xl font-bold mb-4 ${colors.textColor}`}
          >
            {category.name}
          </h3>

          {/* Short Description */}
          <p className="text-gray-700 mb-6 text-right leading-relaxed">
            {category.shortDescription}
          </p>

          {/* Full Description */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-6 h-0.5 ${colors.accentColor}`}></div>
              <span className="text-base font-bold text-gray-600">
                نظرة عامة . .
              </span>
            </div>
            <p className="text-gray-600 text-right leading-relaxed text-sm">
              {category.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircleOutlined className={colors.textColor} />
              <span className="text-sm font-medium text-gray-600">
                أبرز المميزات
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {category.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${colors.accentColor}`}
                  ></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* call to action */}
          <div className="pt-2">
            <Link href={category.url}>
              <CategoryCardButton
                colors={colors}
                categoryName={category.name}
              />
            </Link>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${colors.accentColor} rounded-full translate-x-[-50%] translate-y-[50%]`}
          ></div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl ${
          category.color === "orange" ? "bg-orange-500/5" : "bg-calypso-500/5"
        }`}
      ></div>
    </div>
  );
}
