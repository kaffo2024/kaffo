"use client";
import React, { useState } from "react";
import {
  CheckCircleFilled,
  ArrowDownOutlined,
  AppstoreOutlined,
  CodeOutlined,
  SettingOutlined,
  FileTextOutlined,
  EditOutlined,
  LineChartOutlined,
  MobileOutlined,
  GlobalOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function ServicesCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "marketing"
  );

  const servicesData = [
    {
      id: "marketing",
      title: "الخدمات التسويقية",
      icon: <AppstoreOutlined />,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      textColor: "text-orange-700",
      overview:
        "تقدّم كفو حزمة متكاملة من الحلول التسويقية المصممة وفق احتياجات كل عميل، بهدف تعزيز الحضور الرقمي وتحقيق نتائج قابلة للقياس.",
      features: [
        {
          title: "الاستراتيجية والتخطيط",
          description:
            "تحليل السوق والجمهور، وبناء خطة تسويقية واضحة ترتكز على أهداف المشروع.",
          icon: <SettingOutlined />,
        },
        {
          title: "تطوير المحتوى",
          description:
            "إنتاج محتوى احترافي بمختلف أنواعه، يشمل النصوص، السكريبتات، والأفكار الإبداعية.",
          icon: <FileTextOutlined />,
        },
        {
          title: "التصميم الإبداعي",
          description:
            "تصميم مواد بصرية متسقة تعكس هوية العلامة وتعزّز تأثير الرسالة.",
          icon: <EditOutlined />,
        },
        {
          title: "إدارة الحملات الإعلانية",
          description:
            "إعداد وإدارة الحملات الرقمية، مع متابعة دقيقة للأداء وتحسين مستمر للنتائج.",
          icon: <LineChartOutlined />,
        },
        {
          title: "إدارة الحسابات الرقمية",
          description:
            "تنظيم المحتوى، الإشراف على النشر، وبناء تواصل فعّال مع الجمهور",
          icon: <GlobalOutlined />,
        },
      ],
    },
    {
      id: "coding",
      title: "الخدمات البرمجية",
      icon: <CodeOutlined />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      textColor: "text-blue-700",
      overview:
        "تقدّم كفو حلولاً برمجية متكاملة تُصمَّم لتلبية احتياجات الشركات بمختلف أحجامها، مع التركيز على الجودة، الدقّة، وسهولة الاستخدام.",
      features: [
        {
          title: "تطوير الأنظمة",
          description:
            "نقوم بتحليل احتياجات العمل بدقّة، ثم بناء أنظمة خاصة تساعد على تنظيم العمليات وإدارة البيانات.",
          icon: <SettingOutlined />,
        },
        {
          title: "تطوير تطبيقات الويب",
          description:
            "تطوّر كفو تطبيقات ويب احترافية متكاملة تعتمد على تقنيات حديثة، بواجهات متجاوبة وسهلة الاستخدام.",
          icon: <GlobalOutlined />,
        },
        {
          title: "تطوير تطبيقات الهواتف",
          description:
            "نطوّر تطبيقات موبايل احترافية تعمل على iOS وAndroid، بواجهات سهلة الاستخدام وتصميم متوافق مع هوية العلامة.",
          icon: <MobileOutlined />,
        },
        {
          title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
          description:
            "نقدّم تصميمات متقنة تساعد المستخدم على التنقل بسهولة داخل التطبيق أو النظام.",
          icon: <LayoutOutlined />,
        },
      ],
    },
  ];

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
            <CheckCircleFilled className="text-calypso-500" />
            <span>مجالات تخصصنا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            خدماتنا <span className="text-calypso-600">المتكاملة</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            اكتشف كيف يمكننا تحويل أفكارك إلى واقع ملموس عبر حلول تسويقية
            وبرمجية متخصصة
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {servicesData.map((category) => (
            <div
              key={category.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                expandedCategory === category.id
                  ? `shadow-xl ${category.borderColor} border-2`
                  : "border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 lg:p-8 text-right transition-all duration-300 gap-3 sm:gap-4 ${
                  expandedCategory === category.id
                    ? `${category.bgColor}`
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {/* Main content - stacked on mobile, row on desktop */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
                  {/* Icon container */}
                  <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white shadow-md sm:shadow-lg flex-shrink-0`}
                    >
                      {category.icon}
                    </div>

                    {/* Title - full width on mobile */}
                    <div className="text-right flex-1 min-w-0">
                      <div className="flex items-center justify-between sm:block">
                        <h3
                          className={`text-lg sm:text-xl lg:text-2xl font-bold ${category.textColor} mb-0 sm:mb-1 truncate`}
                        >
                          {category.title}
                        </h3>

                        {/* Arrow icon - visible on mobile, hidden on sm+ */}
                        <div className="sm:hidden">
                          <ArrowDownOutlined
                            className={`text-gray-500 transition-transform duration-300 ${
                              expandedCategory === category.id
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Overview - hidden on extra small, shown on sm+ */}
                      <p className="text-gray-600 text-xs sm:text-sm mt-1 hidden sm:block max-w-lg">
                        {category.overview}
                      </p>
                    </div>
                  </div>

                  {/* Short overview for mobile only */}
                  {!expandedCategory && (
                    <p className="text-gray-600 text-xs mt-1 sm:hidden line-clamp-2">
                      {category.overview}
                    </p>
                  )}
                </div>

                {/* Arrow icon - hidden on mobile, visible on sm+ */}
                <div className="hidden sm:block">
                  <ArrowDownOutlined
                    className={`text-gray-500 text-lg transition-transform duration-300 ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedCategory === category.id && (
                <div className="border-t border-gray-100">
                  <div className="p-6 lg:p-8 bg-white">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.features.map((feature, index) => (
                        <div key={index} className="group relative">
                          <div
                            className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                          ></div>

                          <div className="relative h-full p-6 rounded-xl overflow-hidden bg-gray-50/50 border border-gray-100 hover:border-gray-200 transition-all duration-300 group-hover:bg-white">
                            <div className="flex items-start gap-4 mb-4">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${category.color} text-white flex-shrink-0`}
                              >
                                {feature.icon}
                              </div>

                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                  {feature.title}
                                </h4>
                              </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-right text-sm">
                              {feature.description}
                            </p>

                            <div
                              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* call to action */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-right">
                          <h4 className="font-bold text-gray-900 mb-1">
                            اهتممت بهذه الخدمة؟
                          </h4>
                          <p className="text-gray-600 text-sm">
                            يمكننا تصميم حل مخصص تماماً لاحتياجاتك
                          </p>
                        </div>

                        <Link
                          href="/contact"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                        >
                          اطلب استشارة مجانية
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            {[
              { label: "تحليل مجاني", value: "✓", color: "text-green-600" },
              { label: "خطط مرنة", value: "✓", color: "text-blue-600" },
              { label: "دعم فني", value: "24/7", color: "text-calypso-600" },
              {
                label: "تعديلات",
                value: "غير محدودة",
                color: "text-orange-600",
              },
            ].map((item, index) => (
              <div key={index} className="text-center px-4 py-3">
                <div className={`text-xl font-bold ${item.color} mb-1`}>
                  {item.value}
                </div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
