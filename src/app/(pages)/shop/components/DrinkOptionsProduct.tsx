"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface NewProductVisualProps {
  id: string;
  imageSrc: string;
  productName: string;
  isNewProduct: boolean;
}

const DrinkOptionsProduct = ({ drink }: { drink: NewProductVisualProps }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
      <Image
        src={drink.imageSrc}
        width={300}
        height={300}
        alt="Product Image"
        className="rounded-full m-auto overflow-hidden"
      />
      <h2 className="pt-12 text-center font-bold">
        {drink.productName}{" "}
        {drink.isNewProduct && (
          <span className="text-pink-500 ms-2 tracking-widest">NEW</span>
        )}
      </h2>
    </motion.div>
  );
};

export default DrinkOptionsProduct;
