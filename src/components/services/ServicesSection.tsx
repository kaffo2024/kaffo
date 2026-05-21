"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import CategoryGrid from "../home-categories/CategoryGrid";
import ServicesSlider from "./ServicesSlider";
import { CategoryType, ServicesType } from "@/src/types/data-type";
import VerticalCategories from "./VerticalCategories";
import CategoryCard from "../home-categories/CategoryCard";

interface ServicesSectionProps {
  categories: CategoryType[];
  services: ServicesType[];
}

export default function ServicesSection({
  categories,
  services,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="pt-10 lg:pt-20 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          title="خــدمــاتــنــا"
          subtitle="حلول متكاملة تلبي جميع احتياجاتك الرقمية"
          description="نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لدفع أعمالك نحو النجاح في العصر الرقمي"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Services Slider */}
        <div className="mt-20">
          <ServicesSlider services={services} />
        </div>
      </div>
    </section>
  );
}
