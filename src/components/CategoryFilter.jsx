
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", name: "All Products" },
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "dairy", name: "Dairy" },
  { id: "grains", name: "Grains" },
  { id: "meat", name: "Meat" },
  { id: "organic", name: "Organic" }
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <Tabs defaultValue={activeCategory} onValueChange={onCategoryChange} className="w-full">
        <TabsList className="h-12 p-1 bg-muted/50 w-full flex justify-start">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="relative h-10 px-4 data-[state=active]:bg-white"
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CategoryFilter;
