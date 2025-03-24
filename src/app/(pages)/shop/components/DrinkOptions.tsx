"use client";
import React, { useState } from "react";
import Image1 from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image2 from "@/assets/Crimson Apple Zest-1.png";
import Image3 from "@/assets/mango-juice-splashing.png";
import Image4 from "@/assets/four-juices.png";
import DrinkOptionsProduct from "./DrinkOptionsProduct";
import CustomPagination from "@/app/custom_components/shared/CustomPagination";

const drinks = [
  {
    // IDs are like this for testing with backend (may need to be changed if database reseeded)
    // Testing should be made more maintainable in the future
    id: "67e1267744626ecf251c9290", 
    imageSrc: Image1,
    productName: "Strawberry Juice",
    isNewProduct: true,
  },
  {
    id: "67e1267744626ecf251c9291",
    imageSrc: Image2,
    productName: "Tomato Juice",
    isNewProduct: false,
  },
  {
    id: "67e1267744626ecf251c9292",
    imageSrc: Image3,
    productName: "Mango Juice",
    isNewProduct: false,
  },
  {
    id: "67e1267744626ecf251c9293",
    imageSrc: Image4,
    productName: "Pomegranate Juice",
    isNewProduct: true,
  },
  {
    id: "67e1267744626ecf251c9294",
    imageSrc: Image1,
    productName: "Bubble Milk Tea",
    isNewProduct: true,
  },
  {
    id: "67e1267744626ecf251c9295",
    imageSrc: Image2,
    productName: "Kiwi Juice",
    isNewProduct: false,
  },
  {
    id: "67e1267744626ecf251c9293",
    imageSrc: Image3,
    productName: "Pomegranate Juice",
    isNewProduct: false,
  },
  {
    id: "67e1267744626ecf251c9294",
    imageSrc: Image4,
    productName: "Bubble Milk Tea",
    isNewProduct: false,
  },
  {
    id: "67e1267744626ecf251c9295",
    imageSrc: Image1,
    productName: "Kiwi Juice",
    isNewProduct: false,
  },
];

const DrinkOptions = () => {
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const paginatedDrinksList = drinks.slice(startIndex, endIndex);
  return (
    <>
      <section className="bg-[#fdd79d] py-16">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          {paginatedDrinksList?.map((drink: any) => (
            <DrinkOptionsProduct drink={drink} key={drink.id} />
          ))}
        </div>
      </section>
      <section className="py-4 bg-[#fdd79d]">
        <CustomPagination
          rowsPerPage={rowsPerPage}
          data={drinks}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
        />
      </section>
    </>
  );
};

export default DrinkOptions;
