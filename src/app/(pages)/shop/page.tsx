import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import ShopPage from "./components/ShopPage";

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Shop" />
      <section className="lg:mt-24 mb-8">
        <ShopPage />
      </section>
    </main>
  );
};

export default page;
