import React from "react";
import Image1 from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image2 from "@/assets/Crimson Apple Zest-1.png";
import Image3 from "@/assets/mango-juice-splashing.png";
import Image4 from "@/assets/four-juices.png";
import DrinkOptionsProduct from "./DrinkOptionsProduct";

const drinks = [
  {
    id: "1",
    imageSrc: Image1,
    productName: "Strawberry Juice",
    isNewProduct: true,
  },
  {
    id: "2",
    imageSrc: Image2,
    productName: "Tomato Juice",
    isNewProduct: false,
  },
  {
    id: "3",
    imageSrc: Image3,
    productName: "Mango Juice",
    isNewProduct: false,
  },
  {
    id: "4",
    imageSrc: Image4,
    productName: "Pomegranate Juice",
    isNewProduct: true,
  },
  {
    id: "5",
    imageSrc: Image1,
    productName: "Bubble Milk Tea",
    isNewProduct: true,
  },
  {
    id: "6",
    imageSrc: Image2,
    productName: "Kiwi Juice",
    isNewProduct: false,
  },
  {
    id: "7",
    imageSrc: Image3,
    productName: "Pomegranate Juice",
    isNewProduct: false,
  },
  {
    id: "8",
    imageSrc: Image4,
    productName: "Bubble Milk Tea",
    isNewProduct: false,
  },
  {
    id: "9",
    imageSrc: Image1,
    productName: "Kiwi Juice",
    isNewProduct: false,
  },
];

const DrinkOptions = () => {
  return (
    <section className="bg-[#fdd79d] py-16">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        {drinks?.map((drink: any) => (
          <DrinkOptionsProduct drink={drink} key={drink.id} />
        ))}
      </div>
    </section>
  );
};

export default DrinkOptions;