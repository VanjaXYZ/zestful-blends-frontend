import Footer from "../footer/Footer";
import SubscribeInput from "./SubscribeInput";

const SubscribeSection = () => {
  return (
    <section className="bg-primary-sky-blue py-12 flex justify-center flex-col items-center md:gap-8">
      <div className="md:border md:border-dashed md:w-[70%] flex flex-col items-center p-8 gap-4 rounded-3xl">
        <h3 className="text-primary-yellow text-2xl md:text-4xl text-center font-semibold">
          Subscribe To Our Newsletter
        </h3>
        <p className="max-w-[100%] md:max-width-[70%] text-neutral-50 md:text-center text-xs md:text-sm">
          Get the latest updates on our delicious fruit blends, exclusive
          offers, and healthy living tips straight to your inbox. Be the first
          to know about new products and seasonal specials!
        </p>
        <div className="flex gap-4 py-4">
          <SubscribeInput />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SubscribeSection;
