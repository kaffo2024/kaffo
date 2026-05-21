import { Breadcrumb } from "antd";
import Link from "next/link";
import { FiHome, FiChevronLeft } from "react-icons/fi";
import { HiOutlineTemplate } from "react-icons/hi";

interface ServiceHeaderProps {
  background: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    title: string;
    href?: string;
    icon?: React.ReactNode;
  }>;
}

function ServiceHeader({
  background,
  title,
  subtitle,
  breadcrumbs,
}: ServiceHeaderProps) {
  // Default breadcrumb items
  const defaultBreadcrumbs = [
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
          {title}
        </span>
      ),
    },
  ];

  const breadcrumbItems = breadcrumbs
    ? breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return {
          title:
            item.href && !isLast ? (
              <Link
                href={item.href}
                className="flex items-center gap-1.5 md:gap-2 transition-colors text-white/80 hover:text-white text-sm md:text-base"
              >
                {item.icon && (
                  <span className="text-sm md:text-base">{item.icon}</span>
                )}
                <span>{item.title}</span>
              </Link>
            ) : (
              <span
                className={`flex items-center gap-1.5 md:gap-2 text-sm md:text-base ${
                  isLast ? "text-white font-semibold" : "text-white/80"
                }`}
              >
                {item.icon && (
                  <span className="text-sm md:text-base">{item.icon}</span>
                )}
                <span>{item.title}</span>
              </span>
            ),
        };
      })
    : defaultBreadcrumbs;

  return (
    <div className="relative h-[40vh] md:h-[50vh] py-12 md:py-20 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 mx-auto container">
        {/* Breadcrumbs */}
        {breadcrumbItems.length > 0 && (
          <div className="mb-6 md:mb-8 w-full flex justify-center">
            <div className="w-full">
              <Breadcrumb
                className="text-sm md:text-base"
                separator={
                  <div className="h-full flex items-center">
                    <FiChevronLeft className="text-white/60 text-sm md:text-base" />
                  </div>
                }
                items={breadcrumbItems}
              />
            </div>
          </div>
        )}

        {/* Title and Subtitle */}
        <div className="max-w-4xl mx-auto mt-16">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            data-seo="true"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Pulsating Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
}

export default ServiceHeader;
