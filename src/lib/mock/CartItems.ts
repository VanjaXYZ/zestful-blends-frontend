// src/lib/mock/cartItems.ts
import twoJuices from "@/assets/two_juices.png";
import lushLychee from "@/assets/lush-lychee-dream.png";
import saladBowls from "@/assets/salad_bowls.png";
import { CartItemType } from "@/app/model/cartItemType";

const mockItems: CartItemType[] = [
  // {
  //   id: "1",
  //   name: "Apple juice",
  //   toppings: "whipped cream",
  //   size: "Large",
  //   imageSrc: twoJuices,
  //   price: 10,
  //   quantity: 2,
  // },
  // {
  //   id: "2",
  //   name: "Lush lychee dream",
  //   toppings: "chia seeds, vanilla, almond milk",
  //   size: "Small",
  //   imageSrc: lushLychee,
  //   price: 10,
  //   quantity: 2,
  // },
];

export const loadCartItems = (): CartItemType[] => {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.warn("Couldn't parse cartItems from localStorage");
      }
    }
  }
  return mockItems;
};