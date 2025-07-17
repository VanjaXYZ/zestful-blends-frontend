import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import ShopPage from "./components/ShopPage";
import DiscoverOurMenu from "./components/DiscoverOurMenu";

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Shop" />
      <section className="lg:mt-24">
        <DiscoverOurMenu/>
      </section>
      <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
      style={{backgroundImage: `linear-gradient(to bottom, #FFC10C 15%, #6E8E2D  25%)`,}}>
        <div className="absolute w-full top-[-4px] h-4 bg-primary-yellow z-[-1]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#FFC10C" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
    </main>
  );
};

export default page;
