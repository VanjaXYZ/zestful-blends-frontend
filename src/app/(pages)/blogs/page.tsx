import React from "react";
import BlogList from "./components/BlogList";
import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";

const page = () => {
  return (
    <main className="bg-primary-olive">
      <Breadcrumbs currentPageName="Blogs" />
      <section className="lg:mt-24">
        <BlogList />
      </section>
    </main>
  );
};

export default page;
