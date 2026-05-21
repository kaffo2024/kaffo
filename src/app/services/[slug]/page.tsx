import { getServices } from "@/src/actions/actions";
import ServiceCard from "@/src/components/service-card/ServiceCard";
import { categories } from "@/src/data/data";
import { Row, Col, Card, Badge } from "antd";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineTemplate } from "react-icons/hi";
import Link from "next/link";
import CategoryHero from "@/src/components/category-page/CategoryHero";
import { CategoryType } from "@/src/types/data-type";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: "coding" | "market" }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = decodeURIComponent(slug).replaceAll("-", " ");

  return {
    title: `الخدمات ${title === "coding" ? "البرمجية" : "التسويقية"} | Kaffo`,
    description: categories.find((cat) => cat.ref === title)?.description,
  };
}

const allServices = async () => {
  try {
    const services = await getServices();
    return services;
  } catch {
    return [];
  }
};

async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: "coding" | "market" }>;
}) {
  const { slug } = await params;
  const services = await allServices();

  const category = categories.find((cat) => cat.ref === slug)!;

  const filteredServices = services.filter(
    (service) => service.parent === slug
  );

  const textColorClasses = {
    market: "text-orange-500",
    coding: "text-calypso-600",
  };

  const bgColorClasses = {
    market: "bg-orange-500",
    coding: "bg-calypso-600",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <CategoryHero
        category={category as CategoryType}
        slug={slug}
        servicesLength={filteredServices.length}
      />

      {/* Services Grid Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 -mt-2">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className={`h-1 w-12 ${bgColorClasses[slug]} rounded-full`}
            ></div>
            <Badge
              count={
                <span
                  className={`px-3 py-1 ${bgColorClasses[slug]} text-white rounded-full text-sm font-semibold`}
                >
                  الخدمات {category.name}
                </span>
              }
            />
            <div
              className={`h-1 w-12 ${bgColorClasses[slug]} rounded-full`}
            ></div>
          </div>

          <h2 className="!text-gray-800 !mb-4">
            استكشف <span className={textColorClasses[slug]}>خدماتنا</span>{" "}
            المتخصصة
          </h2>
          <p className="!text-gray-600 !text-lg max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من الحلول المصممة خصيصًا لتلبية احتياجات عملك
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <Row gutter={[32, 32]} className="mb-16">
            {filteredServices.map((item, index) => (
              <Col
                key={item.id}
                xs={24}
                sm={12}
                md={12}
                lg={8}
                className="flex justify-center"
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
              >
                <ServiceCard item={item} />
              </Col>
            ))}
          </Row>
        ) : (
          <Card className="text-center py-16 border-dashed border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
            <div className="text-6xl mb-6 text-gray-300 flex justify-center">
              <HiOutlineTemplate />
            </div>
            <h3 className="!text-gray-600 !mb-3">لا توجد خدمات متاحة حالياً</h3>
            <p className="!text-gray-500 mb-6">
              سنقوم بإضافة خدمات جديدة قريباً
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <FiChevronLeft />
              العودة إلى الخدمات
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
