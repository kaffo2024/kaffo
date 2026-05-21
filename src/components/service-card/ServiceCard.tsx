import { ServicesType } from "@/src/types/data-type";
import { Card, Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FiCode, FiTrendingUp } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdOutlineComputer } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

function ServiceCard({ item }: { item: ServicesType }) {
  const categoryIcon =
    item.parent === "market" ? (
      <TbTargetArrow className="text-sm" />
    ) : (
      <MdOutlineComputer className="text-sm" />
    );

  // Service type specific icon
  const serviceIcon =
    item.parent === "market" ? (
      <FiTrendingUp className="text-lg" />
    ) : (
      <FiCode className="text-lg" />
    );

  return (
    <Card
      hoverable
      className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 w-full"
      styles={{
        body: {
          padding: 0,
          margin: 0,
          background:
            item.parent === "market"
              ? "linear-gradient(135deg, #fff5f5 0%, #fff 50%, #fefce8 100%)"
              : "linear-gradient(135deg, #eff6ff 0%, #fff 50%, #ecfeff 100%)",
        },
      }}
      cover={
        <div className="relative h-64 overflow-hidden rounded-t-2xl rounded-b-[30px]">
          <div className="relative z-10 h-full">
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
          </div>

          {/* Category Badge - Positioned inside image */}
          <div className="absolute top-6 left-6 z-20">
            <Badge
              color={item.parent === "market" ? "orange" : "blue"}
              count={
                <div
                  className={`flex items-center gap-1 px-4 py-2 backdrop-blur-md rounded-full text-xs font-semibold border ${
                    item.parent === "market"
                      ? "bg-orange-50/80 border-orange-200 text-orange-700"
                      : "bg-calypso-50/80 border-calypso-200 text-calypso-700"
                  }`}
                >
                  {categoryIcon}
                  {/* <span>{item.parent === "market" ? "تسويق" : "برمجية"}</span> */}
                </div>
              }
            />
          </div>

          {/* Decorative corner element */}
          <div
            className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${
              item.parent === "market" ? "bg-koromiko-400" : "bg-calypso-400"
            }`}
          ></div>
        </div>
      }
    >
      {/* Content with shaped background */}
      <div className="relative pt-8 pb-6 px-3 md:px-6 -mt-6 rounded-t-2xl flex flex-col justify-between space-y-6 min-h-56">
        {/* Floating icon container */}
        <div
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center ${
            item.parent === "market"
              ? "bg-gradient-to-br from-koromiko-300 to-koromiko-500 text-white"
              : "bg-gradient-to-br from-calypso-600 to-cyan-500 text-white"
          }`}
        >
          <div className="text-2xl">{serviceIcon}</div>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-4 mt-2 leading-tight">
          {item.title}
        </h3>

        {/* Decorative divider */}
        <div
          className={`h-1 w-16 mx-auto rounded-full mb-6 ${
            item.parent === "market"
              ? "bg-gradient-to-r from-koromiko-300 to-koromiko-400"
              : "bg-gradient-to-r from-calypso-300 to-cyan-400"
          }`}
        ></div>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Link
            href={`/services/${item.parent}/${item.slug}`}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold group/link transition-all duration-300 shadow-md hover:shadow-lg ${
              item.parent === "market"
                ? "bg-gradient-to-r from-koromiko-300 to-koromiko-500 text-white hover:from-koromiko-400 hover:to-koromiko-600"
                : "bg-gradient-to-r from-calypso-600 to-cyan-500 text-white hover:from-calypso-700 hover:to-cyan-600"
            }`}
          >
            <span className="group-hover/link:pr-2 transition-all duration-300">
              اعرف أكثر
            </span>
            <HiOutlineArrowLeft className="transform group-hover/link:-translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ServiceCard;
