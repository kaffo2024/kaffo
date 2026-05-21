import { Breadcrumb, Row, Col, Badge } from "antd";
import {
  FiHome,
  FiChevronLeft,
  FiCheckCircle,
  FiClock,
  FiMessageSquare,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import {
  HiOutlineTemplate,
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import Link from "next/link";
import { CategoryType } from "@/src/types/data-type";
import { MdOutlineGridView } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

// Icon mapping
const categoryIcons: Record<string, React.ReactNode> = {
  market: <TbTargetArrow className="text-2xl" />,
  coding: <MdOutlineGridView className="text-2xl" />,
};

// feature icons
const featureIcons = [
  <HiOutlineLightningBolt key="lightning" />,
  <FiServer key="server" />,
  <HiOutlineShieldCheck key="shield" />,
  <FiUsers key="users" />,
  <HiOutlineSparkles key="sparkles" />,
];

const gradientClasses = {
  market: "from-orange-500 via-orange-600 to-amber-600",
  coding: "from-calypso-600 via-calypso-700 to-calypso-800",
};

const textColorClasses = {
  market: "text-koromiko",
  coding: "text-calypso-300",
};

const bgColorClasses = {
  market: "bg-orange-500",
  coding: "bg-calypso-600",
};

interface CategoryHeroProps {
  category: CategoryType;
  slug: "market" | "coding";
  servicesLength: number;
}
const CategoryHero = ({
  category,
  slug,
  servicesLength,
}: CategoryHeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute inset-0 bg-[radial-gradient(${
            category.color === "market" ? "#f97316" : "#0e6b81"
          }_1px,transparent_1px)] [background-size:32px_32px]`}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientClasses[slug]}`}
      ></div>

      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Breadcrumb */}
          <Breadcrumb
            className="mb-6 md:mb-8 text-sm md:text-base"
            separator={
              <div className="h-full flex items-center">
                <FiChevronLeft className="text-gray-300 text-sm md:text-base" />
              </div>
            }
            items={[
              {
                title: (
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 md:gap-2 transition-colors text-white/80 hover:text-white text-sm md:text-base"
                  >
                    <FiHome className="text-sm md:text-base" />
                    <span>الرئيسية</span>
                  </Link>
                ),
              },
              {
                title: (
                  <Link
                    href="/services"
                    className="flex items-center gap-1.5 md:gap-2 transition-colors text-white/80 hover:text-white text-sm md:text-base"
                  >
                    <HiOutlineTemplate className="text-sm md:text-base" />
                    <span>الخدمات</span>
                  </Link>
                ),
              },
              {
                title: (
                  <span className="text-white font-semibold flex items-center gap-1.5 md:gap-2 text-sm md:text-base">
                    <span className="text-lg md:text-xl">
                      {categoryIcons[slug]}
                    </span>
                    {category.name}
                  </span>
                ),
              },
            ]}
          />

          {/* Main Title Section */}
          <div className="text-right mb-12">
            <div className="flex justify-between flex-wrap">
              <div
                className={`inline-flex items-center justify-center size-12 md:size-16 rounded-xl bg-white/20 backdrop-blur-sm mb-5 md:mb-6 border border-white/30 ${textColorClasses[slug]} text-3xl md:text-4xl`}
              >
                {categoryIcons[slug]}
              </div>

              <div className="flex items-center gap-2 md:gap-3 mb-4 justify-end">
                <div
                  className={`h-1 w-12 md:w-16 ${bgColorClasses[slug]} rounded-full`}
                ></div>
                <Badge
                  count={
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white border border-white/30 whitespace-nowrap">
                      {servicesLength} خدمة
                    </span>
                  }
                />
              </div>
            </div>

            <h1 className="!text-white !mb-4 !text-4xl md:!text-5xl lg:!text-6xl font-bold leading-tight">
              خدماتنا {category.name}
            </h1>

            <p className="!text-white/90 !text-lg md:!text-xl max-w-3xl block mx-auto leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Features Grid */}
          {category.features && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-5xl mx-auto mb-10">
              <Row gutter={[16, 16]} justify="center">
                {category.features.map((feature, index) => (
                  <Col
                    xs={12}
                    md={8}
                    lg={4}
                    key={index}
                    className="text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="size-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/20 shadow-sm">
                        <span className="text-white text-xl">
                          {featureIcons[index % featureIcons.length]}
                        </span>
                      </div>
                      <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Stats Bar */}

          <div className="mt-12 text-center">
            <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md max-w-3xl mx-auto">
              {[
                {
                  label: "خدمة مخصصة",
                  value: `${servicesLength}+`,
                  color: "text-green-300",
                  icon: <FiCheckCircle className="text-lg" />,
                },
                {
                  label: "جودة وتفاني",
                  value: "100%",
                  color: "text-yellow-300",
                  icon: <HiOutlineSparkles className="text-lg" />,
                },
                {
                  label: "دعم فني",
                  value: "24/7",
                  color: "text-blue-300",
                  icon: <FiClock className="text-lg" />,
                },
                {
                  label: "استشارات مجانية",
                  value: "∞",
                  color: "text-orange-300",
                  icon: <FiMessageSquare className="text-lg" />,
                },
              ].map((item, index) => (
                <div key={index} className="text-center px-2 py-3 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-2 border border-white/20 group-hover:border-white/40 transition-colors ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div className={`text-xl font-semibold ${item.color} mb-1`}>
                      {item.value}
                    </div>
                    <div className="text-xs text-white/80 group-hover:text-white transition-colors">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider with Icon */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          className="w-full h-40 md:h-48 lg:h-56"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="
              M0,80
              L48,88
              C96,96,192,112,288,112
              C384,112,480,96,576,92
              C672,88,768,102,864,106
              C960,110,1056,104,1152,92
              C1248,80,1344,62,1392,54
              L1440,48
              L1440,120
              L0,120
              Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoryHero;
