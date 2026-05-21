import React from "react";
import {
  AimOutlined,
  CrownOutlined,
  LockOutlined,
  SwapOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const OurValuesData = [
  {
    name: "الـدقـة",
    desc: "نحرص على دراسة كل مشروع بعناية، وتحليل البيانات بدقّة لضمان قرارات تسويقية مبنية على أسس واضحة ونتائج قابلة للقياس.",
    Icon: AimOutlined,
    gradient: "from-blue-400 to-cyan-400",
    index: 1,
  },
  {
    name: "احـتـرافـيـة",
    desc: "نعمل وفق منهجية منظمة تشمل التخطيط، التنفيذ، والمتابعة، مع الالتزام بأعلى معايير الجودة في المحتوى، التصميم، والحملات الإعلانية.",
    Icon: CrownOutlined,
    gradient: "from-purple-400 to-pink-400",
    index: 2,
  },
  {
    name: "سـريـة",
    desc: "نلتزم بالحفاظ على خصوصية بيانات العملاء ومعلومات مشاريعهم، ونعتمد إجراءات واضحة لضمان السرية التامة في جميع مراحل العمل.",
    Icon: LockOutlined,
    gradient: "from-green-400 to-emerald-400",
    index: 3,
  },
  {
    name: "الـمـرونـة",
    desc: "نوفّر حلولاً قابلة للتعديل لتناسب حجم كل مشروع واحتياجاته، مع القدرة على التعامل السريع مع المتغيرات ومتطلبات العميل.",
    Icon: SwapOutlined,
    gradient: "from-orange-400 to-amber-400",
    index: 4,
  },
  {
    name: "باسعار منخفضة",
    desc: "نقدّم منظومة تسويق متكاملة تحقق نتائج ملموسة بتكلفة مدروسة، مما يمنح العميل أفضل قيمة ممكنة دون المساس بالجودة.",
    Icon: DollarOutlined,
    gradient: "from-calypso-400 to-calypso-500",
    index: 5,
  },
];

export default function OurValues() {
  return (
    <section className="py-18 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Creative Design */}
        <div className="text-center mb-20 relative">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-calypso-100/30 to-koromiko-100/30 rounded-full blur-3xl -z-10"></div>

          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-calypso-400 to-koromiko-400 rounded-full blur opacity-30"></div>
              <div className="relative px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm">
                <span className="text-gray-700 font-medium">ما يميزنا</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            قيمنا{" "}
            <span className="relative inline-block">
              <span className="text-calypso-600">الأساسية</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-calypso-400 to-koromiko-400 rounded-full"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            المبادئ التي توجه كل قرار نتخذه وكل خدمة نقدمها
          </p>
        </div>

        {/* Timeline-style Values */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-calypso-200 via-koromiko-200 to-calypso-200 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Values List */}
          <div className="space-y-3 md:space-y-12">
            {OurValuesData.map((value, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Left side content for even, right for odd */}
                <div className="lg:w-1/2">
                  <div
                    className={`bg-white p-5 md:p-8 rounded-xl md:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    {/* icon */}
                    <div className=" relative flex items-center gap-4 mb-4 md:mb-6">
                      {/* Value Number */}
                      <div
                        className={`absolute -top-9 -left-7 md:-top-12 md:-left-10 size-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-br ${value.gradient}`}
                      >
                        {value.index}
                      </div>

                      <div
                        className={`size-11 md:size-14 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br ${value.gradient} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {/* Render the Icon component */}
                        <value.Icon className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {value.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-right max-md:text-sm md:text-base lg:text-lg">
                      {value.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block bg-gradient-to-br ${value.gradient}`}
                ></div>

                {/* Empty side for alternating layout */}
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile alternative layout */}
        {/* no need cuz the above section became fully responsive */}
        {/* <div className="lg:hidden mt-12">
          <div className="space-y-3 md:space-y-6">
            {OurValuesData.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-1 md:mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br ${value.gradient}`}
                  >
                    <value.Icon className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        {value.name}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${value.gradient}`}
                      >
                        {value.index}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-right text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
