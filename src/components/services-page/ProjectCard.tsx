import { ServicesProjectsType } from "@/src/types/data-type";
import { Card, Badge } from "antd";
import Image from "next/image";
import { FiEye, FiCalendar, FiArrowLeft, FiUsers } from "react-icons/fi";

interface ProjectCardProps {
  item: ServicesProjectsType;
  onOpen: (item: ServicesProjectsType) => void;
  viewMode?: "grid" | "list";
}

export default function ProjectCard({
  item,
  onOpen,
  viewMode = "grid",
}: ProjectCardProps) {
  // default grid view
  if (viewMode === "grid") {
    return (
      <Card
        hoverable
        className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col group/card"
        styles={{
          body: {
            padding: 0,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {item?.cover && (
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          )}

          {/* Gradient Overlay */}

          {/* Partner Badge - Top Right */}
          {/* the one in content is enough */}
          {/* {item.partner && (
            <div className="absolute top-4 right-4 z-10">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm ${getPartnerColor(
                  item.partner
                )} shadow-lg transition-all duration-300 group-hover/card:scale-105`}
              >
                <FiUsers className="text-xs" />
                <span className="text-xs font-semibold whitespace-nowrap">
                  {item.partner}
                </span>
              </div>
            </div>
          )} */}

          {/* Gallery Count Badge */}
          {item.gallery && item.gallery.length > 0 && (
            <div className="absolute top-4 left-4 z-10">
              <Badge
                count={
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1 shadow-lg">
                    <FiEye className="text-xs" />
                    {item.gallery.length}
                  </span>
                }
              />
            </div>
          )}

          {/* Bottom Gradient for Text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title with Partner */}
          <div className="mb-3">
            <h3
              className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 hover:text-calypso-600 transition-colors duration-300 cursor-pointer"
              onClick={() => onOpen(item)}
            >
              {item.title}
            </h3>

            {/* Alternative Partner Display Below Title */}
            {item.partner && (
              <div className="flex items-center gap-2 mb-2">
                <FiUsers className="text-calypso-600 text-sm" />
                <span className="text-sm font-medium text-gray-600">
                  الشريك:
                </span>
                <span
                  className={`text-sm font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border-amber-200`}
                >
                  {item.partner}
                </span>
              </div>
            )}
          </div>

          {/* Overview */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {item.overview}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-4">
              {item.year_completed && (
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                  <FiCalendar className="text-calypso-600" />
                  <span className="font-medium">{item.year_completed}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => onOpen(item)}
              className="flex items-center gap-2 text-calypso-600 hover:text-calypso-700 text-sm font-semibold group/link"
            >
              <span>عرض التفاصيل</span>
              <FiArrowLeft className="transform group-hover/link:-translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  // List View
  return (
    <Card
      hoverable
      className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 mb-4 last:mb-0 group/card"
      styles={{ body: { padding: 0 } }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative md:w-64 lg:w-80 h-48 md:h-auto overflow-hidden">
          {item?.cover && (
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

          {/* Gallery Count */}
          {item.gallery && item.gallery.length > 0 && (
            <div className="absolute bottom-3 right-3 z-10">
              <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                <FiEye />
                <span>{item.gallery.length} صورة</span>
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 md:p-6">
          <div className="flex flex-col h-full">
            {/* Header with Title and Partner */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3
                      className="text-xl font-bold text-gray-800 hover:text-calypso-600 transition-colors duration-300 cursor-pointer"
                      onClick={() => onOpen(item)}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Partner Badge - Mobile/Tablet */}
                  {/* replaced with another in footer */}
                  {/* {item.partner && (
                    <div className="flex md:hidden mb-3">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getPartnerColor(
                          item.partner
                        )}`}
                      >
                        <FiUsers className="text-xs" />
                        <span className="text-sm font-semibold">
                          {item.partner}
                        </span>
                      </div>
                    </div>
                  )} */}

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.overview}
                  </p>
                </div>

                <button
                  onClick={() => onOpen(item)}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-calypso-600 to-calypso-700 text-white rounded-lg hover:from-calypso-700 hover:to-calypso-800 transition-all duration-300 shadow-md hover:shadow-lg self-start sm:self-center min-w-[140px]"
                >
                  <FiEye />
                  <span className="text-sm font-semibold">عرض المشروع</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-100 gap-4">
              <div className="flex gap-3 flex-wrap">
                {item.partner && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                    <FiUsers className="text-calypso-600 text-lg" />
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">بشراكة مع:</span>
                      <span className="text-sm font-bold text-gray-800 text-center">
                        {item.partner}
                      </span>
                    </div>
                  </div>
                )}

                {item.year_completed && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                    <FiCalendar className="text-calypso-600 text-lg" />
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-gray-800 text-center">
                        {item.year_completed}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery Count */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <FiEye className="text-calypso-600 text-lg" />
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">عدد الصور:</span>
                  <span className="text-sm font-bold text-gray-800 text-center">
                    {item.gallery?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
