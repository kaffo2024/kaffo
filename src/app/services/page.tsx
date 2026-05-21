import { categories } from "@/src/data/data";
import CategoriesHeader from "@/src/components/categories-page/CategoriesHeader";
import ServiceCategoryCard from "@/src/components/categories-page/ServiceCategoryCard";

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <CategoriesHeader />

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {categories.map((category) => (
                <ServiceCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
