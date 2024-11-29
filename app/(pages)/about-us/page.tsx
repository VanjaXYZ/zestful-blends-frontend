import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import VideoSection from "./components/VideoSection";
import StorySection from "./components/StorySection";
import StoryList from "./components/StoryList";
import OurValues from "./components/OurValues";

const page = () => {
  return (
    <main className="py-4">
      <Breadcrumbs />
      <section className="w-full flex justify-center lg:relative flex-col items-center">
        <VideoSection />
        <StorySection />
      </section>
      <section className="lg:mt-52">
        <StoryList />
        <OurValues />
      </section>
    </main>
  );
};

export default page;
