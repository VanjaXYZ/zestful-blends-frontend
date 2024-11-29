import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import DrinkList from "./DrinkList";
import DrinkOptions from "./DrinkOptions";

const ShopList = () => {
  return (
    <section className="">
      <div>
        <DrinkList />
        <DrinkOptions />
      </div>
    </section>
  );
};

export default ShopList;
