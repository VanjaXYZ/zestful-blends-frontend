import React from "react";
import CategoryMenu from "./components/CategoryMenu";
import VarietyPacksList from "./components/VarietyPacksList";

const page = () => {
  return (
    <section>
      <CategoryMenu />
      <VarietyPacksList />
    </section>
  );
};

export default page;
