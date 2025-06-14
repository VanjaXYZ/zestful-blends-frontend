// src/lib/mock/cartItems.ts
import twoJuices from "@/assets/two_juices.png";
import lushLychee from "@/assets/lush-lychee-dream.png";
import saladBowls from "@/assets/salad_bowls.png";
import { CartItemType } from "@/app/model/cartItemType";

export const cartItems: CartItemType[] = [
  {
    id: "1",
    name: "Apple juice",
    toppings: ["whipped cream"],
    imageSrc: twoJuices,
    price: 10,
    quantity: 2,
  },
  {
    id: "2",
    name: "Lush lychee dream",
    toppings: ["chia seeds", "vanilla", "almond milk"],
    imageSrc: lushLychee,
    price: 10,
    quantity: 2,
  },
  {
    id: "3",
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
  {
    id: "4",
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
  {
    id: "5",
    name: "Salad bowls",
    toppings: ["vanilla", "cocoa", "almond milk", "chia seeds"],
    imageSrc: saladBowls,
    price: 10,
    quantity: 2,
  },
];
