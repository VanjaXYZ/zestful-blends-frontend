"use client";
import React, { useState } from "react";
import VarietyPacksItem from "./VarietyPacksItem";
import CustomPagination from "@/app/custom_components/shared/CustomPagination";

const listOfVarietyPacks = [
  {
    id: "1",
    title: "Citrus Boost Pack",
    priceContent: "3 Juices Start At $35.99 - Subscribe & Save 15%",
    description:
      "A refreshing mix of orange, lemon, and grapefruit juices, packed with vitamin C for an energizing start to your day.",
  },
  {
    id: "2",
    title: "Berry Bliss Pack",
    priceContent: "4 Juices Start At $42.99 - Subscribe & Save 15%",
    description:
      "A delicious blend of strawberries, blueberries, and raspberries, bursting with antioxidants and natural sweetness.",
  },
  {
    id: "3",
    title: "Tropical Delight Pack",
    priceContent: "4 Juices Start At $39.99 - Subscribe & Save 15%",
    description:
      "A vibrant mix of mango, pineapple, and passion fruit juices, bringing the taste of the tropics to your glass.",
  },
  {
    id: "4",
    title: "Green Vitality Pack",
    priceContent: "4 Juices Start At $50.99 - Subscribe & Save 15%",
    description:
      "A nutritious combination of apple, spinach, and cucumber juices, perfect for a refreshing and healthy detox.",
  },
  {
    id: "5",
    title: "Immunity Essentials Pack",
    priceContent: "4 Juices Start At $44.99 - Subscribe & Save 15%",
    description:
      "A powerful mix of ginger, turmeric, and citrus juices, designed to boost your immune system naturally.",
  },
  {
    id: "6",
    title: "Sweet & Smooth Pack",
    priceContent: "4 Juices Start At $37.99 - Subscribe & Save 15%",
    description:
      "A rich blend of banana, pear, and coconut water, offering a creamy and hydrating experience with every sip.",
  },
];

export interface VarietyPacksProps {
  id: string;
  title: string;
  priceContent: string;
  description: string;
}

const VarietyPacksList = () => {
  const rowsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const paginatedPackList = listOfVarietyPacks.slice(startIndex, endIndex);
  return (
    <>
      <section className="space-y-4">
        {paginatedPackList.map((pack: VarietyPacksProps, index: number) => (
          <VarietyPacksItem
            packItem={pack}
            key={pack.id}
            isReversed={index % 2 !== 0}
          />
        ))}
      </section>
      <section className="py-4">
        <CustomPagination
          rowsPerPage={rowsPerPage}
          data={listOfVarietyPacks}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
        />
      </section>
    </>
  );
};

export default VarietyPacksList;
