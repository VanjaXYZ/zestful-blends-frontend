import React from "react";
import CategoryMenu from "./components/CategoryMenu";
import VarietyPacksList from "./components/VarietyPacksList";

const page = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-5xl py-12">Special offers</h1>
      {/* <CategoryMenu /> */}
      <VarietyPacksList />
    </section>
  );
};

export default page;
