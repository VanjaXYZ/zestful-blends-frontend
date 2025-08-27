import coffee from "@/assets/coffee.png";
import twoJuices from "@/assets/two_juices.png";
import { StaticImageData } from "next/image";

interface mockWishListItems {
    id: string,
    name: string,
    toppings?: string,
    imageSrc: StaticImageData,
    priceBefore: number;
    price: number,
    quantity: number,
    collectionOption?: string, 
    size: string, 
    fruits?: string 
}

export const mockWishListItems: mockWishListItems[] = [
  // {
  //   id: "55",
  //   name: "Coffee",
  //   toppings: "whipped cream, cinnamon, vanilla",
  //   imageSrc: coffee,
  //   price: 12.99,
  //   quantity: 1,
  //   collectionOption: "Regular Blends", 
  //   size: "Medium", 
  //   fruits: "Apple, Banana", 
  // },
  // {
  //   id: "21",
  //   name: "Two juices",
  //   toppings: "chia seeds, vanilla, almond milk",
  //   imageSrc: twoJuices,
  //   price: 12.99,
  //   quantity: 1,
  //   size: "Small"
  // },
];