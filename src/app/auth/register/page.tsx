"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Alert, Row, Col } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { fetcher } from "@/src/utils/fetcher";
import { ErrorSchema } from "@/src/types/data-type";
import toast from "react-hot-toast";

interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  repassword: string;
}

function Register() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [error, setError] = useState<ErrorSchema | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values: RegisterData) => {
    setLoading(true);
    setError(null);

    if (values.password !== values.repassword) {
      setError({
        extra: { fields: { repassword: ["كلمات المرور غير متطابقة"] } },
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetcher("api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          username: values.username,
          password: values.password,
        }),
      });

      const res = await response.json();

      if (response.ok) {
        toast.success("تم انشاء الحساب برجاء تسجيل الدخول");
        router.push("/auth/signin");
        form.resetFields();
      } else {
        setError(res);
      }
    } catch (error) {
      setError({
        message: "حدث خطأ أثناء انشاء الحساب",
        extra: { fields: { non_field_errors: ["يرجى المحاولة مرة أخرى"] } },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4">
      {/* Subtle background gradients */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-calypso-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-koromiko-400 to-koromiko-600 mb-4">
            <UserOutlined className="text-xl text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            إنـشـاء حـسـاب
          </h1>
          <p className="text-gray-600">
            هـل لـديـك حـسـاب بلفعل ؟{" "}
            <Link
              href="/auth/signin"
              className="text-calypso-700 hover:text-calypso-800 font-medium"
            >
              سجل دخول!
            </Link>
          </p>
        </div>

        {/* Error Alert */}
        {error?.message && (
          <Alert
            message={error.message}
            type="error"
            showIcon
            className="mb-6 rounded-lg border-red-200 bg-red-50"
          />
        )}

        {/* Form Card */}
        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-koromiko-400 to-calypso-400 rounded-b-full"></div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            className="space-y-4"
            dir="rtl"
          >
            <Row gutter={[16, 0]}>
              {/* First Name */}
              <Col xs={24} sm={12}>
                <Form.Item
                  name="first_name"
                  label="الاسـم الاول"
                  rules={[
                    { required: true, message: "الرجاء إدخال الاسم الاول" },
                  ]}
                  help={error?.extra?.fields?.first_name?.[0]}
                  validateStatus={
                    error?.extra?.fields?.first_name ? "error" : undefined
                  }
                >
                  <Input
                    size="large"
                    placeholder="الاسـم الاول"
                    prefix={<UserOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
                  />
                </Form.Item>
              </Col>

              {/* Last Name */}
              <Col xs={24} sm={12}>
                <Form.Item
                  name="last_name"
                  label="الاسـم الاخير"
                  rules={[
                    { required: true, message: "الرجاء إدخال الاسم الاخير" },
                  ]}
                  help={error?.extra?.fields?.last_name?.[0]}
                  validateStatus={
                    error?.extra?.fields?.last_name ? "error" : undefined
                  }
                >
                  <Input
                    size="large"
                    placeholder="الاسـم الاخير"
                    prefix={<UserOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Email */}
            <Form.Item
              name="email"
              label="الـبريد الالكتروني"
              rules={[
                { required: true, message: "الرجاء إدخال البريد الالكتروني" },
                { type: "email", message: "البريد الالكتروني غير صالح" },
              ]}
              help={error?.extra?.fields?.email?.[0]}
              validateStatus={error?.extra?.fields?.email ? "error" : undefined}
            >
              <Input
                size="large"
                placeholder="example@email.com"
                prefix={<MailOutlined className="text-gray-400" />}
                className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
              />
            </Form.Item>

            {/* Username */}
            <Form.Item
              name="username"
              label="اسـم المستخـدم"
              rules={[{ required: true, message: "الرجاء إدخال اسم المستخدم" }]}
              help={error?.extra?.fields?.username?.[0]}
              validateStatus={
                error?.extra?.fields?.username ? "error" : undefined
              }
            >
              <Input
                size="large"
                placeholder="اسـم المستخـدم"
                prefix={<UserOutlined className="text-gray-400" />}
                className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
              />
            </Form.Item>

            <Row gutter={[16, 0]}>
              {/* Password */}
              <Col xs={24} sm={12}>
                <Form.Item
                  name="password"
                  label="كلمة المرور"
                  rules={[
                    { required: true, message: "الرجاء إدخال كلمة المرور" },
                    {
                      min: 6,
                      message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
                    },
                  ]}
                  help={
                    error?.extra?.fields?.password?.[0] ||
                    error?.extra?.fields?.non_field_errors?.[0]
                  }
                  validateStatus={
                    error?.extra?.fields?.password ||
                    error?.extra?.fields?.non_field_errors
                      ? "error"
                      : undefined
                  }
                >
                  <Input.Password
                    size="large"
                    placeholder="********"
                    prefix={<LockOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeOutlined
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )
                    }
                  />
                </Form.Item>
              </Col>

              {/* Confirm Password */}
              <Col xs={24} sm={12}>
                <Form.Item
                  name="repassword"
                  label="إعادة كلمة المرور"
                  rules={[
                    {
                      required: true,
                      message: "الرجاء إعادة إدخال كلمة المرور",
                    },
                  ]}
                  help={error?.extra?.fields?.repassword?.[0]}
                  validateStatus={
                    error?.extra?.fields?.repassword ? "error" : undefined
                  }
                >
                  <Input.Password
                    size="large"
                    placeholder="********"
                    prefix={<LockOutlined className="text-gray-400" />}
                    className="rounded-lg border-gray-300 hover:border-koromiko-400 focus:border-koromiko-500"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeOutlined
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          className="text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )
                    }
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Submit Button */}
            <Form.Item className="mb-0 pt-2">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full h-12 rounded-lg bg-gradient-to-r from-koromiko-400 to-koromiko-500 hover:from-koromiko-500 hover:to-koromiko-600 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                icon={<ArrowLeftOutlined />}
              >
                إنشاء حساب
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Terms & Privacy */}
        {/* <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            بمتابعة انشاء الحساب، فإنك توافق على{" "}
            <Link href="/terms" className="text-gray-700 hover:text-gray-900">
              الشروط والأحكام
            </Link>{" "}
            و{" "}
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900">
              سياسة الخصوصية
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Register;
