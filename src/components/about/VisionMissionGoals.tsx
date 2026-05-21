import React from "react";
import {
  EyeOutlined,
  AimOutlined,
  MessageOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";

export default function VisionMissionGoals() {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-calypso-900/10 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-koromiko-900/10 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Minimalist Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
            <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-calypso-400 to-koromiko-400 rounded-full"></div>
            <div className="w-1.5 sm:w-2 h-4 sm:h-6 bg-gradient-to-b from-calypso-400 to-koromiko-400 rounded-full opacity-60"></div>
            <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-gradient-to-b from-calypso-400 to-koromiko-400 rounded-full opacity-40"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-calypso-300 via-white to-koromiko-300 bg-clip-text text-transparent">
              جوهر كفو
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            الأساس الذي نبني عليه كل خطوة نحو التميز
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - only on larger screens */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-calypso-900 via-gray-700 to-koromiko-900 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Vision - First Item */}
            <div className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Main Card - Responsive for all screens */}
              <div className="w-full lg:w-1/2 lg:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-calypso-900/20 via-gray-800 to-transparent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-calypso-500/30 transition-all duration-300 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
                    {/* Number indicator - position based on screen size */}
                    <div className="absolute -left-2 sm:-left-3 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-calypso-600 to-calypso-700 flex items-center justify-center text-xs sm:text-sm font-bold shadow-md sm:shadow-lg">
                      01
                    </div>

                    {/* Icon & Title - Responsive layout */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-calypso-900/30 to-gray-800 border border-calypso-700/30 flex items-center justify-center flex-shrink-0">
                        <EyeOutlined className="text-lg sm:text-xl lg:text-2xl text-calypso-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 truncate">
                          الرؤية
                        </h3>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                          <ArrowRightOutlined className="text-[10px] sm:text-xs" />
                          <span className="truncate">ما نطمح إليه</span>
                        </div>
                      </div>
                    </div>

                    {/* Content - Responsive text and padding */}
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-900/30 border border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
                        أن تكون كفو الشريك التسويقي الأكثر موثوقية في الوطن
                        العربي، وصاحبة الأنظمة التي تحوّل خطط العملاء إلى نتائج
                        واقعية قابلة للقياس.
                      </p>
                    </div>

                    {/* Progress indicator - Responsive sizing */}
                    <div className="flex items-center justify-end gap-2 mt-4 sm:mt-6">
                      <span className="text-[10px] sm:text-xs text-gray-400">
                        طموح
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot - only on large screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-gray-800 bg-gradient-to-br from-calypso-500 to-calypso-600 shadow-lg z-10 hidden lg:flex items-center justify-center">
                <CheckCircleOutlined className="text-[8px] sm:text-xs text-white" />
              </div>

              {/* Empty side for alternating - only on large screens */}
              <div className="hidden lg:block lg:w-1/2 lg:pl-12"></div>
            </div>

            {/* Goal - Second Item */}
            <div className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Empty side for desktop */}
              <div className="hidden lg:block lg:w-1/2 lg:pr-12"></div>

              {/* Main Card */}
              <div className="w-full lg:w-1/2 lg:pl-12">
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-l from-koromiko-900/20 via-gray-800 to-transparent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-koromiko-500/30 transition-all duration-300 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
                    {/* Number indicator */}
                    <div className="absolute -right-2 sm:-right-3 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-koromiko-600 to-koromiko-700 flex items-center justify-center text-xs sm:text-sm font-bold shadow-md sm:shadow-lg">
                      02
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-koromiko-900/30 to-gray-800 border border-koromiko-700/30 flex items-center justify-center flex-shrink-0">
                        <AimOutlined className="text-lg sm:text-xl lg:text-2xl text-koromiko-300" />
                      </div>
                      <div className="flex-1 min-w-0 text-right">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 truncate">
                          الهدف
                        </h3>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 justify-end">
                          <span className="truncate">ما نسعى لتحقيقه</span>
                          <ArrowRightOutlined className="text-[10px] sm:text-xs rotate-180" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-900/30 border border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
                        تمكين الشركات وروّاد الأعمال من تحقيق نمو حقيقي ومستدام
                        عبر حلول تسويقية دقيقة، مدروسة، وقابلة للتنفيذ، تُصمَّم
                        لتناسب كل مشروع بحسب طبيعته واحتياجاته.
                      </p>
                    </div>

                    {/* Achievement indicators */}
                    <div className="flex items-center justify-between mt-4 sm:mt-6">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(3)].map((_, i) => (
                          <StarOutlined
                            key={i}
                            className="text-yellow-400 text-xs sm:text-sm"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-400">
                        محور التركيز
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-gray-800 bg-gradient-to-br from-koromiko-500 to-koromiko-600 shadow-lg z-10 hidden lg:flex items-center justify-center">
                <CheckCircleOutlined className="text-[8px] sm:text-xs text-white" />
              </div>
            </div>

            {/* Mission - Third Item */}
            <div className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Main Card */}
              <div className="w-full lg:w-1/2 lg:pr-12">
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-900/20 via-gray-800 to-transparent rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
                    {/* Number indicator */}
                    <div className="absolute -left-2 sm:-left-3 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-xs sm:text-sm font-bold shadow-md sm:shadow-lg">
                      03
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-900/30 to-gray-800 border border-blue-700/30 flex items-center justify-center flex-shrink-0">
                        <MessageOutlined className="text-lg sm:text-xl lg:text-2xl text-blue-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 truncate">
                          الرسالة
                        </h3>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                          <ArrowRightOutlined className="text-[10px] sm:text-xs" />
                          <span className="truncate">ما نلتزم به</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-900/30 border border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
                        نحن في كفو نعمل على تقديم منظومة متكاملة للتسويق—من
                        الفكرة إلى التنفيذ—نعتمد فيها على التحليل العميق، وصناعة
                        المحتوى المحترف، والتصميم الجاذب، وإدارة الإعلانات
                        بذكاء. رسالتنا أن نصنع حملات تُثمر، واستراتيجيات تعكس
                        شخصية العميل، وتجربة تسويقية قائمة على الدقة، السرعة،
                        والالتزام
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700/50">
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        منهاج العمل . .
                      </div>
                      <div className="text-[10px] sm:text-xs text-blue-400 font-medium">
                        كمو
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-gray-800 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg z-10 hidden lg:flex items-center justify-center">
                <CheckCircleOutlined className="text-[8px] sm:text-xs text-white" />
              </div>

              {/* Empty side for alternating */}
              <div className="hidden lg:block lg:w-1/2 lg:pl-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
