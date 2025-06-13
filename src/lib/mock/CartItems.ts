// src/lib/mock/cartItems.ts
import twoJuices from "@/assets/two_juices.png";
import lushLychee from "@/assets/lush-lychee-dream.png";
import saladBowls from "@/assets/salad_bowls.png";

export interface CartItemType {
  name: string;
  toppings: string[];
  imageSrc: any;
  price: number;
  quantity: number;
}

export const cartItems: CartItemType[] = [
  {
    name: "Apple juice",
    toppings: ["whipped cream"],
    imageSrc: twoJuices,
    price: 10,
    quantity: 2,
  },
  {
    name: "Lush lychee dream",
    toppings: ["chia seeds", "vanilla", "almond milk"],
    imageSrc: lushLychee,
    price: 10,
    quantity: 2,
  },
  {
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
  {
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
  {
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
];
