"use client";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCardAlt";
import { CategoryType } from "@/src/types/data-type";

// currently not in use

interface CategoryGridProps {
  categories: CategoryType[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-calypso-100/30 to-koromiko-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tr from-calypso-100/20 to-koromiko-100/10 rounded-full blur-3xl"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryCard category={category} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
