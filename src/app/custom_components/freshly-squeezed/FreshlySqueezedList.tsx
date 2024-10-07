"use client";
import React from "react";

import FreshlySqueezedItem from "./FreshlySqueezedItem";
import { TbMilk } from "react-icons/tb";
import { GiStandingPotion } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { MdLocalDrink } from "react-icons/md";

import { Button } from "@/components/ui/button";
const items = [
  {
    id: "1",
    imageSrc: TbMilk,
    productName: "Sustainability",
  },
  {
    id: "2",
    imageSrc: GiStandingPotion,
    productName: "Our Roots",
  },
  {
    id: "3",
    imageSrc: GiFruitBowl,
    productName: "Variety Fruits",
  },
  {
    id: "4",
    imageSrc: LiaGlassMartiniAltSolid,
    productName: "Deliciousness",
  },
  {
    id: "5",
    imageSrc: MdLocalDrink,
    productName: "Quality",
  },
];

const FreshlySqueezedList = () => {
  return (
    <div className="flex flex-col items-center py-12 justify-center">
      <h2 className="text-4xl font-bold text-white text-center">
        Freshly Squeezed For You
      </h2>
      <div className="flex justify-around items-center py-24 w-full">
        {items?.map((item: any) => (
          <FreshlySqueezedItem
            icon={<item.imageSrc size={80} color={"white"} />}
            productName={item.productName}
            key={item.id}
          />
        ))}
      </div>
      <Button className="bg-primary-dark-teal rounded-md w-[200px] font-semibold">
        Our Story
      </Button>
    </div>
  );
};

export default FreshlySqueezedList;
