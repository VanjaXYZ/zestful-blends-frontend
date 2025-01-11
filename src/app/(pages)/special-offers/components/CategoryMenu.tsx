"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const categoryItems = [
  {
    id: "1",
    name: "Combo 1",
  },
  {
    id: "2",
    name: "Combo 2",
  },
  {
    id: "3",
    name: "Combo 3",
  },
  {
    id: "4",
    name: "Combo 4",
  },
];

const CategoryMenu = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-8 mt-2 md:mt-8">
      {categoryItems.map((item) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
          key={item.id}
        >
          <Button
            id={item.id}
            className="bg-primary-dark-orange font-semibold rounded-full 
      w-[150px] hover:bg-primary-orange transition-colors mb-6 text-white
      flex"
          >
            {item.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryMenu;
