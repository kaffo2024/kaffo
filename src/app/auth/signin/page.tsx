"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  MailOutlined,
  LockOutlined,
  ArrowLeftOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Alert } from "antd";

function Login() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError("كلمة المرور او البريد الالكتروني غير صحيحة");
      }
    } catch (error) {
      setError("حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-calypso-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md">
        {/* Header with subtle gradient */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-koromiko-400 to-koromiko-600 mb-4">
            <UserOutlined className="text-xl text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            تسجيل الدخول
          </h1>
          <p className="text-gray-600">
            ليس لديك حساب؟{" "}
            <Link
              href="/auth/register"
              className="text-calypso-700 hover:text-calypso-800 font-medium"
            >
              انشاء حساب!
            </Link>
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            className="mb-6 rounded-lg border-red-200 bg-red-50"
          />
        )}

        {/* Login Form Card - Enhanced styling */}
        <div className="relative">
          {/* Glow effect around the form */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-koromiko-400/20 to-calypso-400/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

          {/* Decorative corner elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-koromiko-300 rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-calypso-300 rounded-bl-lg"></div>

          {/* Main form container */}
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-white/95">
            {/* Subtle gradient accent line at top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-koromiko-400 to-calypso-400 rounded-b-full"></div>

            {/* Decorative dots in corners */}
            <div className="absolute top-4 left-4 flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-koromiko-300/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-calypso-300/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-koromiko-300/60"></div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-calypso-300/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-koromiko-300/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-calypso-300/60"></div>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onSubmit}
              className="space-y-6"
              dir="rtl"
            >
              <Form.Item
                name="email"
                label={
                  <span className="font-medium text-gray-700">
                    البريد الالكتروني
                  </span>
                }
                rules={[
                  { required: true, message: "الرجاء إدخال البريد الالكتروني" },
                ]}
              >
                <div className="relative">
                  <Input
                    size="large"
                    placeholder="example@email.com"
                    prefix={<MailOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500 pl-2"
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <span className="font-medium text-gray-700">كلمة المرور</span>
                }
                rules={[
                  { required: true, message: "الرجاء إدخال كلمة المرور" },
                ]}
              >
                <div className="relative">
                  <Input.Password
                    size="large"
                    placeholder="********"
                    prefix={<LockOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500 pl-2"
                  />
                </div>
              </Form.Item>

              <div className="text-left pt-2">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-calypso-600 hover:text-calypso-800 transition-colors inline-flex items-center gap-1"
                >
                  هل نسيت كلمة المرور؟
                </Link>
              </div>

              <Form.Item className="mb-0 pt-4">
                {/* Button wrapper with gradient border */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-koromiko-400 to-calypso-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    className="relative w-full h-12 rounded-lg bg-gradient-to-r from-koromiko-400 to-koromiko-500 hover:from-koromiko-500 hover:to-koromiko-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    icon={<ArrowLeftOutlined />}
                  >
                    تسجيل الدخول
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
