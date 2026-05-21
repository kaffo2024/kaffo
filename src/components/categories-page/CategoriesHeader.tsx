import { RocketOutlined } from "@ant-design/icons";

export default function CategoriesHeader() {
  return (
    <section className="relative py-20 lg:py-28 text-white overflow-hidden">
      {/* background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${"/categories/header-1.jpg"})`,
        }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-bl from-black/90 to-black/80 z-10`}
      />

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-10" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <RocketOutlined className="text-white" />
            <span className="text-sm font-medium">خدمات متكاملة</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            خدمات{" "}
            <span className="bg-gradient-to-l from-koromiko-600 to-koromiko-300 bg-clip-text text-transparent">
              كــفــو
            </span>{" "}
            المتخصصة
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            اكتشف مجموعة واسعة من الخدمات التسويقية والبرمجية المصممة بعناية
            لتحقيق أهدافك ودفع أعمالك نحو النجاح في السوق الرقمي
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              {
                value: "50+",
                label: "مشروع مكتمل",
                textColor: "text-calypso-600",
              },
              { value: "100%", label: "رضا عملاء" },
              { value: "24/7", label: "دعم فني" },
              {
                value: "5+",
                label: "سنوات خبرة",
                textColor: "text-koromiko-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    stat.textColor ?? "text-white"
                  } mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
