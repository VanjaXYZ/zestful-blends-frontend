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
