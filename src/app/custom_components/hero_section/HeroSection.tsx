import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroJuiceInfo from "./HeroJuiceInfo";
const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="flex max-lg:flex-col justify-center w-full px-20 py-10">
        <HeroContent />
        <HeroImage />
      </div>
      <HeroJuiceInfo />
    </section>
  );
};

export default HeroSection;
