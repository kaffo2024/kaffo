import React from "react";
import Link from "next/link";
import {
  StarOutlined,
  HeartOutlined,
  CoffeeOutlined,
  TeamOutlined,
  RocketOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

export default function Ending() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-calypso-100/30 to-koromiko-100/30 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-2xl -z-10"></div>

          {/* Floating icons */}
          <div className="absolute -top-5 -right-5 w-12 h-12 rounded-xl bg-gradient-to-br from-calypso-100 to-blue-100 border border-calypso-200 flex items-center justify-center shadow-lg z-10">
            <StarOutlined className="text-calypso-500 text-lg" />
          </div>

          <div className="absolute -bottom-5 -left-5 w-12 h-12 rounded-xl bg-gradient-to-br from-koromiko-100 to-amber-100 border border-koromiko-200 flex items-center justify-center shadow-lg z-10">
            <HeartOutlined className="text-koromiko-500 text-lg" />
          </div>

          {/* Main Content Card */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-12 overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230e6b81' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative z-10 text-center">
              {/* my AWESOMEEEEEEEEEEE gorgeous touch */}
              <div className="mt-6 sm:mt-8 text-center">
                <div
                  className="flex flex-col sm:flex-row sm:inline-flex justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6
                   py-3 rounded-xl bg-gradient-to-r from-calypso-50/95 to-koromiko-50/95 border border-gray-100"
                >
                  <span className="text-gray-500 text-sm">
                    كل قصة نجاح تبدأ بـ
                  </span>

                  <span className="text-lg sm:text-xl text-calypso-600 font-bold">
                    &quot;هلااا . .&quot;
                  </span>

                  <div className="hidden sm:block w-4 h-0.5 bg-gradient-to-l from-calypso-400 to-koromiko-400"></div>

                  <span className="text-gray-500 text-sm">وتنتهي بـ</span>

                  <span className="text-lg sm:text-xl text-koromiko-600 font-bold">
                    &quot;كفووو . .&quot;
                  </span>
                </div>
              </div>

              {/* Main heading */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 my-6">
                كوب قهوة، وفكرة رائعة،
                <span className="text-calypso-600 block mt-1">
                  ونبدأ الرحلة معًا
                </span>
              </h3>

              {/* Coffee cup icon (playing on "Kaffo") */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-calypso-50 to-koromiko-50 border border-calypso-100 mb-8">
                <CoffeeOutlined className="text-3xl text-calypso-600" />
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                نحب ما نفعله، ونؤمن بأن نجاحك هو نجاحنا. دعنا نجتمع على فنجان
                قهوة ونحول أفكارك إلى واقع ملموس يحقق نتائج استثنائية.
              </p>

              {/* Colorful stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-calypso-50/50 to-white border border-calypso-100">
                  <TeamOutlined className="text-2xl text-calypso-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">خبراء متخصصين</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-koromiko-50/50 to-white border border-koromiko-100">
                  <RocketOutlined className="text-2xl text-koromiko-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">مشروع ناجح</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50/50 to-white border border-purple-100">
                  <HeartOutlined className="text-2xl text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">رضا عملاء</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100">
                  <StarOutlined className="text-2xl text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">دعم مستمر</div>
                </div>
              </div>

              <Link href="/contact">
                <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-calypso-500 to-calypso-600 hover:from-calypso-600 hover:to-calypso-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>لنبدأ مشروعك معًا</span>
                  <span className="group-hover:-translate-x-1 transition-transform translate-x-1 duration-300">
                    <ArrowLeftOutlined />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
