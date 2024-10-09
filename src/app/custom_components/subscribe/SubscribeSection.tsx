import React from "react";
import SubscribeInput from "./SubscribeInput";
import { Button } from "@/components/ui/button";
import Footer from "../footer/Footer";

const SubscribeSection = () => {
  return (
    <section className="bg-primary-sky-blue py-12 flex justify-center flex-col items-center">
      <div className="border border-dashed w-[70%] flex flex-col items-center p-8 gap-8 rounded-3xl">
        <h3 className="text-primary-yellow text-4xl font-semibold">
          Subscribe To Our Newsletter
        </h3>
        <p className="max-w-[70%] text-neutral-50 text-center text-sm">
          Get the latest updates on our delicious fruit blends, exclusive
          offers, and healthy living tips straight to your inbox. Be the first
          to know about new products and seasonal specials!
        </p>
        <div className="flex gap-4">
          <SubscribeInput />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SubscribeSection;
