import Logo from "@/assets/logo-with-outline.png";

import Image from "next/image";
import Section from "../Section";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroJuiceInfo from "./HeroJuiceInfo";
const HeroSection = () => {
  return (
    <section className="relative">
      <div className="flex  justify-center  w-[1200px]  m-auto">
        <HeroContent />
        <HeroImage />
      </div>
      <HeroJuiceInfo />
    </section>
  );
};

export default HeroSection;
