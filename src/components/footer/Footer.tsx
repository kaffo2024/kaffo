"use client";
import Link from "next/link";
import {
  MailOutlined,
  PhoneOutlined,
  InstagramOutlined,
  ArrowLeftOutlined,
  XOutlined,
} from "@ant-design/icons";
import { Button, Input, Form, message } from "antd";
import Logo from "../../../public/logo/Logo";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  const [form] = Form.useForm();

  const handleSubscribe = (values: any) => {
    console.log("Subscription:", values);
    message.success("تم الاشتراك بنجاح! شكراً لاهتمامك.");
    form.resetFields();
  };

  const footerLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "خدماتنا", href: "/services" },
    { label: "اتصل بنا", href: "/contact" },
  ];

  const servicesLinks = [
    { label: "تطوير الويب", href: "/services/web" },
    { label: "تطوير التطبيقات", href: "/services/apps" },
    { label: "التسويق الرقمي", href: "/services/marketing" },
    { label: "تصميم الهوية", href: "/services/branding" },
    { label: "الاستشارات التقنية", href: "/services/consulting" },
    { label: "الدعم الفني", href: "/services/support" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-calypso-100 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col h-full">
              <Link
                href="/"
                className="mb-6 flex justify-center items-center sm:justify-start"
              >
                <Logo className="size-36 md:size-28 fill-calypso-800 hover:fill-calypso-700 transition-all duration-300 hover:scale-[1.02] drop-shadow-sm hover:drop-shadow" />
              </Link>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-lg">
                تأسست{" "}
                <span className="font-semibold text-calypso-700">كـفـو</span>{" "}
                على رؤية تعليمية فريدة، واستراتيجيات تسويقية متطورة، وتقنيات
                برمجية مبتكرة، لنمنحكم رحلة متكاملة نحو التميز والنجاح في العالم
                الرقمي.
              </p>

              {/* Newsletter Subscription */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  اشترك في نشرتنا البريدية
                </h3>
                <Form form={form} onFinish={handleSubscribe}>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "الرجاء إدخال البريد الإلكتروني",
                        },
                      ]}
                      className="mb-0 flex-grow"
                    >
                      <Input
                        placeholder="بريدك الإلكتروني"
                        className="h-12 rounded-lg border-gray-300 text-right"
                        size="large"
                      />
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="h-12 bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700 hover:to-calypso-800 border-0 font-semibold rounded-lg"
                      size="large"
                    >
                      اشترك
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-calypso-700 transition-colors duration-300"
                  >
                    <ArrowLeftOutlined className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-right">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-600 hover:text-calypso-700 transition-colors duration-300"
                  >
                    <ArrowLeftOutlined className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-right">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                تواصل معنا
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-calypso-100 flex items-center justify-center">
                    <MailOutlined className="text-calypso-600" />
                  </div>
                  <div>
                    <div className="font-medium">البريد الإلكتروني</div>
                    <a
                      href="mailto:info@kaffo.co"
                      className="text-gray-600 hover:text-calypso-700 transition-colors"
                    >
                      info@kaffo.co
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-koromiko-100 flex items-center justify-center">
                    <PhoneOutlined className="text-koromiko-600" />
                  </div>
                  <div>
                    <div className="font-medium">الهاتف</div>
                    <a
                      href="tel:+201147617485"
                      className="text-gray-600 hover:text-calypso-700 transition-colors"
                      dir="rtl"
                    >
                      201147617485+
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">تابعنا</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/Kaffo.co/"
                  target="_blank"
                  className="group w-12 h-12 rounded-md bg-calypso-900 hover:bg-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl text-gray-100 group-hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/kaffo.co"
                  target="_blank"
                  className="group w-12 h-12 rounded-md bg-calypso-900 hover:bg-pink-100 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Instagram"
                >
                  <InstagramOutlined className="text-xl text-gray-100 group-hover:text-pink-600 transition-colors" />
                </a>
                <a
                  href="https://x.com/kaffo_co"
                  target="_blank"
                  className="group w-12 h-12 rounded-md bg-calypso-900 hover:bg-black hover:bg-opacity-10 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="X"
                >
                  <XOutlined className="text-xl text-gray-100 group-hover:text-gray-900 transition-colors" />
                </a>
                <a
                  href="mailto:info@kaffo.co"
                  className="group w-12 h-12 rounded-md bg-calypso-900 hover:bg-red-100 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Email"
                >
                  <MailOutlined className="text-xl text-gray-100 group-hover:text-red-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-calypso-900 to-calypso-800 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-calypso-200">
                © {new Date().getFullYear()} كـــفـــو. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
