"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface CategoryCardButtonProps {
  colors: {
    buttonColor: string;
    hoverButtonColor: string;
    textColor: string;
  };
  categoryName: string;
}

export default function CategoryCardButton({
  colors,
  categoryName,
}: CategoryCardButtonProps) {
  return (
    <button
      className={`group/btn w-full flex items-center justify-between p-4 rounded-xl text-white font-medium transition-all duration-300 ${colors.buttonColor} ${colors.hoverButtonColor} shadow-md hover:shadow-lg`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
          <ArrowLeftOutlined className="text-white" />
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold">اكتشف الخدمات</div>
          <div className="text-xs opacity-90">تصفح {categoryName}</div>
        </div>
      </div>
      <div className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
        <span className="text-sm">ابدأ الآن</span>
      </div>
    </button>
  );
}
