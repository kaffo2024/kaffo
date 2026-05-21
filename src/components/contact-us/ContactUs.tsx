"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneOutlined,
  MailOutlined,
  SendOutlined,
  UserOutlined,
  MailFilled,
  PhoneFilled,
  AppstoreOutlined,
  CheckOutlined,
  StarOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  LockOutlined,
  ThunderboltOutlined,
  CheckCircleFilled,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { Form, Input, Select, Button, message } from "antd";
import { services } from "@/src/data/data";
import { fetcher } from "@/src/utils/fetcher";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from "../../../public/logo/Logo";

const { Option } = Select;
const { TextArea } = Input;

interface ContactUsData {
  name: string;
  email: string;
  phone_number: string;
  service: string | null;
}

function ContactUs() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: ContactUsData) => {
    setIsSubmitting(true);
    try {
      const response = await fetcher("api/users/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const resData = await response.json();

      if (!response.ok) {
        message.error(resData.message || "حدث خطأ أثناء الإرسال");
      } else {
        message.success(
          resData.message || "تم إرسال طلبك بنجاح! سنتواصل معك قريبًا"
        );
        form.resetFields();
      }
    } catch (error) {
      message.error("حدث خطأ في الشبكة. يرجى المحاولة مرة أخرى");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <PhoneOutlined className="text-2xl" />,
      title: "الاتصال المباشر",
      value: "201147617485+",
      link: "tel:+201147617485",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "واتساب",
      value: "201147617485+",
      link: "https://api.whatsapp.com/send?phone=201147617485",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MailOutlined className="text-2xl" />,
      title: "البريد الإلكتروني",
      value: "info@kaffo.co",
      link: "mailto:info@kaffo.co",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="pb-20 lg:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-calypso-100 text-calypso-700 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            نحن هنا <span className="text-calypso-600">لخدمتك</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            أخبرنا عن احتياجاتك وسنساعدك في تحقيق أهدافك بكل احترافية وتميز
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            {/* Contact Cards with Enhanced Design */}
            <div className="relative space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={method.link}
                    target={method.link.includes("http") ? "_blank" : "_self"}
                    className="group block relative"
                  >
                    {/* Background Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-koromiko-400/30 to-calypso-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                    {/* Main Card */}
                    <div className="relative flex items-start gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm overflow-hidden group">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 20% 80%, ${
                              method.color.includes("blue")
                                ? "#3b82f6"
                                : method.color.includes("green")
                                ? "#10b981"
                                : "#ef4444"
                            } 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                          }}
                        ></div>
                      </div>

                      {/* Icon Container with Gradient */}
                      <div
                        className={`relative p-4 rounded-xl bg-gradient-to-br ${method.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {method.icon}
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-right">
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-calypso-700 transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-calypso-600 transition-colors duration-300 font-medium">
                          {method.value}
                        </p>

                        {/* Hover Arrow */}
                        <div className="mt-1 flex items-center justify-end">
                          <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-40 group-hover:translate-x-2">
                            اضغط للتواصل
                          </span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.5,
                              delay: index * 0.2,
                            }}
                            className="text-calypso-600 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            ←
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats Card with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-calypso-900/20 to-koromiko-500/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Main Stats Card */}
              <div className="relative bg-gradient-to-br from-calypso-900 via-calypso-800 to-calypso-900 rounded-2xl p-8 text-white overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <CheckOutlined className="w-6 h-6 text-white" />
                </div>

                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-koromiko-500/20 backdrop-blur-sm flex items-center justify-center">
                  <StarOutlined className="w-5 h-5 text-koromiko-300" />
                </div>

                <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-koromiko-400 to-koromiko-500 flex items-center justify-center">
                    <CheckCircleFilled className="w-5 h-5 text-white" />
                  </div>
                  <span>
                    لماذا تختار{" "}
                    <span className="text-koromiko-300">
                      <Logo className="fill-koromiko-500 hover:fill-koromiko w-10 h-auto inline-block transition-all duration-300" />
                    </span>
                    ؟
                  </span>
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    {
                      icon: <ClockCircleOutlined className="text-xl" />,
                      label: "سرعة الرد",
                      value: "دقائق",
                      color: "from-blue-400 to-blue-500",
                    },
                    {
                      icon: <RocketOutlined className="text-xl" />,
                      label: "مشاريع ناجحة",
                      value: "+50",
                      color: "from-green-400 to-green-500",
                    },
                    {
                      icon: <SafetyCertificateFilled className="text-xl" />,
                      label: "رضا العملاء",
                      value: "100%",
                      color: "from-koromiko-400 to-koromiko-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-calypso-200 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <motion.span
                        className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Dots */}
                <div className="absolute bottom-2 right-2 flex gap-x-1">
                  {[1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-1 h-1 bg-white/40 rounded-full"
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 h-full flex flex-col justify-between gap-6"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-calypso-600 to-calypso-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  أرسل طلبك الآن
                </h3>
                <p className="text-calypso-200">وسنتواصل معك في أقرب وقت</p>
              </div>

              {/* Form Body */}
              <div className="p-8">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onSubmit}
                  className="space-y-6"
                  dir="rtl"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="name"
                      label="الاسم الكامل"
                      rules={[{ required: true, message: "الرجاء إدخال اسمك" }]}
                      className="mb-0"
                    >
                      <Input
                        size="large"
                        placeholder="أدخل اسمك الكامل"
                        prefix={<UserOutlined className="text-gray-400" />}
                        className="rounded-lg border-gray-300 h-12"
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label="البريد الإلكتروني"
                      rules={[
                        {
                          required: true,
                          message: "الرجاء إدخال بريدك الإلكتروني",
                        },
                        {
                          type: "email",
                          message: "البريد الإلكتروني غير صحيح",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Input
                        size="large"
                        placeholder="example@email.com"
                        prefix={<MailFilled className="text-gray-400" />}
                        className="rounded-lg border-gray-300 h-12"
                      />
                    </Form.Item>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="phone_number"
                      label="رقم الهاتف"
                      rules={[
                        { required: true, message: "الرجاء إدخال رقم الهاتف" },
                        {
                          pattern: /^[\d\s\+\-\(\)]{10,}$/,
                          message: "رقم الهاتف غير صحيح",
                        },
                      ]}
                      className="mb-0"
                    >
                      <Input
                        size="large"
                        placeholder="01234567890"
                        prefix={<PhoneFilled className="text-gray-400" />}
                        className="rounded-lg border-gray-300 h-12"
                      />
                    </Form.Item>

                    <Form.Item
                      name="service"
                      label="الخدمة المطلوبة"
                      rules={[
                        { required: true, message: "الرجاء اختيار الخدمة" },
                      ]}
                      className="mb-0"
                    >
                      <Select
                        size="large"
                        placeholder="اختر الخدمة"
                        className="rounded-lg border-gray-300 h-12"
                        suffixIcon={<AppstoreOutlined />}
                      >
                        {services.map((item) => (
                          <Option key={item.id} value={item.name}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="message"
                    label="رسالتك (اختياري)"
                    className="mb-0"
                  >
                    <TextArea
                      rows={4}
                      placeholder="أخبرنا أكثر عن احتياجاتك ومتطلباتك..."
                      className="rounded-lg border-gray-300"
                      maxLength={500}
                      showCount
                    />
                  </Form.Item>

                  <div className="pt-4">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={isSubmitting}
                      className="group w-full h-14 bg-gradient-to-r from-calypso-600 to-calypso-700 hover:from-calypso-700 hover:to-calypso-800 border-0 font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        "جاري الإرسال..."
                      ) : (
                        <>
                          <span>إرسال الطلب</span>
                          <SendOutlined className="mr-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-gray-500 text-sm mt-4">
                      نضمن سرية معلوماتك ولا نشاركها مع أي طرف ثالث
                    </p>
                  </div>
                </Form>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <ClockCircleOutlined className="text-2xl text-calypso-700 mb-2" />
                <div className="text-sm font-bold text-calypso-700">24/7</div>
                <div className="text-xs text-gray-600">دعم متاح</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <LockOutlined className="text-2xl text-calypso-700 mb-2" />
                <div className="text-sm font-bold text-calypso-700">100%</div>
                <div className="text-xs text-gray-600">خصوصية</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <ThunderboltOutlined className="text-2xl text-calypso-700 mb-2" />
                <div className="text-sm font-bold text-calypso-700">سريع</div>
                <div className="text-xs text-gray-600">رد فوري</div>
              </div>
            </div>

            {/* Floating WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=201147617485"
                target="_blank"
                className="group block"
              >
                <div className="relative p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <FaWhatsapp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">
                          تواصل مباشر على واتساب
                        </div>
                        <div className="text-green-100 text-sm">
                          للرد السريع والمباشر
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl group-hover:translate-x-0 transition-transform translate-x-2 duration-300">
                      ←
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
