import Image from "next/image";
import { CheckCircleOutlined } from "@ant-design/icons";
import Logo from "../../../public/logo/Logo";

interface TwoSideLayoutProps {
  withEffect?: boolean;
  img: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export default function TwoSideLayout({
  withEffect = false,
  img,
  children,
  reverse = false,
}: TwoSideLayoutProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div className={`relative ${reverse ? "lg:col-start-2" : ""}`}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative h-80 lg:h-[500px]">
                <Image
                  src={img}
                  alt="Kaffo Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              {withEffect && (
                <div className="absolute inset-0 bg-gradient-to-tr from-calypso-900/70 via-calypso-800/40 to-koromiko-600/30"></div>
              )}

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                      <span className="text-sm font-medium">نحن كــفــو</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                      نبتكر المستقبل الرقمي
                    </h3>
                    <p className="text-white/90 max-w-md mx-auto">
                      حيث يلتقي الإبداع بالتكنولوجيا لصنع حلول استثنائية
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logo Stamp */}
            <div className="absolute top-6 right-6 z-20">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-sm opacity-50"></div>
                <div>
                  <div>
                    <Logo className="!w-20 h-fit md:w-24 fill-calypso-800/90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 z-20">
              <div className="relative group/stats">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-koromiko-400/30 to-calypso-400/30 rounded-3xl blur opacity-0 group-hover/stats:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-koromiko-400 to-koromiko-500 flex items-center justify-center shadow-lg">
                      <CheckCircleOutlined className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">مشروع مكتمل</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Badge */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="relative group/support">
                <div className="absolute -inset-1 bg-gradient-to-r from-calypso-400/20 to-koromiko-400/20 rounded-xl blur opacity-0 group-hover/support:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-gradient-to-br from-koromiko-500 to-koromiko-600 text-white px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-xs opacity-90">دعم فني</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-gradient-to-br from-calypso-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-koromiko-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
          {/* content section */}
          <div
            className={`text-right space-y-8 ${
              reverse ? "lg:col-start-1" : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
