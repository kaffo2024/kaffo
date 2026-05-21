import Link from "next/link";
import { Button } from "antd";
import { ArrowLeftOutlined, CheckCircleOutlined } from "@ant-design/icons";
import TwoSideLayout from "./TwoSideLayout";

interface AboutSectionProps {
  img: string;
}

export function AboutSection({ img }: AboutSectionProps) {
  return (
    <TwoSideLayout withEffect img={img}>
      <div className="inline-flex items-center gap-2 max-md:mt-4 mb-2 md:mb-4">
        <div className="w-8 h-0.5 bg-gradient-to-r from-koromiko-500 to-calypso-500"></div>
        <span className="text-calypso-700 font-bold text-sm">
          تـعـرف عـلـي كــفــوَّ
        </span>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          نقدم خدمات برمجية متقنة على أعلى مستوى،
          <span className="text-calypso-600 block mt-2">
            ونطوّر حلولًا تقنية تلائم احتياجات عملك وتدعم نموه.
          </span>
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-koromiko-400 to-calypso-400 rounded-full ml-auto"></div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-6 bg-gradient-to-l from-calypso-50 to-white rounded-2xl border border-calypso-100">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-calypso-100 flex items-center justify-center">
              <CheckCircleOutlined className="text-calypso-600 text-xl" />
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            بمساعدة فريقنا المتميز، نضمن لك جودة عالمية بأسعار تنافسية وخبرة
            تساعدك على تحويل أفكارك إلى واقع ناجح.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {["تطوير مخصص", "حلول متكاملة", "دعم فني 24/7", "جودة عالمية"].map(
            (feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-calypso-500"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="pt-4">
        <Link href="/contact">
          <Button
            type="primary"
            size="large"
            className="h-14 px-8 rounded-xl bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700
              overflow-hidden
             hover:to-calypso-800 border-0 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-400 group"
          >
            <span className="group-hover:translate-x-1 transition-transform">
              تـواصـل مـعـنـا
            </span>
            <span>
              <ArrowLeftOutlined className="group-hover:translate-x-1 transition-transform md:-translate-x-40" />
            </span>
          </Button>
        </Link>
      </div>
    </TwoSideLayout>
  );
}
