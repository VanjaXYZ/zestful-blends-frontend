import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import DrinkList from "./DrinkList";
import DrinkOptions from "./DrinkOptions";

const ShopList = () => {
  return (
    <section>
      <DrinkList />
      <DrinkOptions />
    </section>
  );
};

export default ShopList;
