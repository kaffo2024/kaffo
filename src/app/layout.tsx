import type { Metadata } from "next";
import "./globals.css";
import "./cairo.css";
import "../styles/swiper.css";
import "../styles/scroll-hijacking.css";
import Navbar from "../components/navbar/Navbar";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";
import Footer from "../components/footer/Footer";
import SessionWrapper from "./SessionWrapper";
import { Toaster } from "react-hot-toast";
import { ConfigProvider } from "antd";
import ScrollToTop from "../components/footer/scroll-to-top/ScrollToTop";
import { Suspense } from "react";
import Loading from "./loading";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "كــفــوَّ",
  description:
    "كفو، حيث يلتقي الإبداع بالتعلم بطريقة ملهمة! نحن نتخذ من التعليم، البرمجة، والتسويق فنًا، نقدم خدماتنا بروح إيجابية و متميزة لتسهيل رحلة النجاح لعملائنا.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Suspense fallback={<Loading />}>
          <SessionWrapper>
            <ThemeRegistry>
              <AntdRegistry>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#0e6b81",
                      fontSize: 16,
                      fontFamily: "Cairo, ui-sans-serif, system-ui",
                    },
                  }}
                  direction="rtl"
                >
                  <Toaster position="top-center" />
                  <Navbar />
                  {children}
                  <ScrollToTop />
                  <Footer />
                </ConfigProvider>
              </AntdRegistry>
            </ThemeRegistry>
          </SessionWrapper>
        </Suspense>
      </body>
    </html>
  );
}
