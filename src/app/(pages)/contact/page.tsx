import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfoText from "./components/ContactInfoText";
import ContactOpeningHoursInfo from "./components/ContactOpeningHoursInfo";
import ContactMoreInfo from "./components/ContactMoreInfo";
import ContactMap from "./components/ContactMap";
import ContactMessage from "./components/ContactMessage";

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Contact Us" />
      <div className="relative lg:pt-20 -mb-[1px] bg-[length:100%_100%] bg-no-repeat z-10" 
      style={{backgroundImage: `linear-gradient(to bottom, #93BE3B 25%, #75AEE2 25%)`,}}>
        <div className="absolute w-full top-[-4px] h-4 bg-[#93BE3B] z-[-1]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#93BE3B" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
      <section className="lg:p-24 bg-primary-smooth-blue grid grid-cols-2 max-lg:grid-cols-1 max-lg:p-[5%] gap-y-8 gap-x-8 -mb-[1px]">
        <ContactInfoText />
        <ContactForm />
        <ContactOpeningHoursInfo />
        <ContactMoreInfo />
      </section>
      <div className="relative bg-[length:100%_100%] bg-no-repeat -mt-[1px]"
      style={{backgroundImage: `linear-gradient(to bottom, #75AEE2 15%, #D1D5DB  25%)`,}}>
        <div className="absolute w-full top-[-4px] h-4 bg-primary-smooth-blue z-[-1]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#75AEE2" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
      <ContactMap />
      <div className="relative bg-[length:100%_100%] bg-no-repeat"
      style={{backgroundImage: `linear-gradient(to bottom, #D1D5DB 25%, #FFC10C  15%)`,}}>
        <div className="absolute w-full bottom-[-4px] h-4 bg-[#FFC10C] z-[-1]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#D1D5DB" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
      <ContactMessage />
      <div className="relative bg-[length:100%_100%] bg-no-repeat"
      style={{backgroundImage: `linear-gradient(to bottom, #FFC10C 25%, #6E8E2D  15%)`,}}>
        <div className="absolute w-full top-[-4px] h-4 bg-[#FFC10C] z-[-1]"></div>
        <div className="absolute w-full bottom-[-4px] h-4 bg-[#6E8E2D] z-[-1]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#FFC10C" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
    </main>
  );
};

export default page;
