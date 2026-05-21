export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      {/* Additional Info */}
      <div className="mt-16 sm:mt-20 text-center w-full pb-20 lg:pb-24 px-6">
        <div
          className="inline-flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8
          bg-white rounded-2xl border border-gray-100 shadow-lg max-w-xl sm:max-w-4xl mx-auto"
        >
          <div className="text-center sm:text-right flex-1 px-2">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              تحتاج إلى حل مخصص؟
            </h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              يمكننا تصميم خدمة خاصة تناسب احتياجات مشروعك الفريدة
            </p>
          </div>

          <a
            href="/contact"
            className="
            px-5 py-3 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-calypso-600 to-calypso-700
            text-white font-semibold hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </>
  );
}
