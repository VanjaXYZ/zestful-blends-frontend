import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroJuiceInfo from "./HeroJuiceInfo";
const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="flex justify-center max-w-[1200px] flex-col sm:flex-row m-auto">
        <HeroContent />
        <HeroImage />
      </div>
      {/* <HeroJuiceInfo /> */}
    </section>
  );
};

export default HeroSection;
