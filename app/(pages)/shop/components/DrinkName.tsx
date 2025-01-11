"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const DrinkName = ({ productName }: { productName: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Button
        className="bg-primary-dark-orange font-semibold rounded-full 
      w-[150px] hover:bg-primary-orange transition-colors mb-6 text-white
      flex"
      >
        {productName}
      </Button>
    </motion.div>
  );
};

export default DrinkName;
