"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import api from "@/app/api";
import axios from "axios";

interface NewProductVisualProps {
  id: string;
  imageSrc: string;
  productName: string;
  isNewProduct: boolean;
}

const DrinkOptionsProduct = ({ drink }: { drink: NewProductVisualProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginTestUser = async () => {
    try {
      await api.post("/users/login",
        {
          email: "testuser@example.com",
          password: "Test@1234",
        }
      );
      setIsLoggedIn(true)
      
    } catch (error) {
      if (axios.isAxiosError(error) && error?.response?.data.message === "You are already logged in. You need to be a guest.") {
        setIsLoggedIn(true)
      } else {
        console.error("Login failed:", error);
      }
    }
  };

  const addToCart = async () => {
    try {
      // For now login before adding to cart
      // In the future this should be put in a login page
      if (!isLoggedIn) {
        await loginTestUser();
      }

      await api.post("/carts",
        {
          productId: drink.id,
          qty: 1,
        }
      );
      console.log(`${drink.productName} added to cart`);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer" onClick={addToCart}>
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
