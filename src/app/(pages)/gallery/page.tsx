import Breadcrumbs from "@/app/custom_components/shared/Breadcrumbs";
import React from "react";
import ImageCell from './components/ImageCell'
import FourJuicesImg from "@/assets/four-juices.png";
import JuiceSplashImg from "@/assets/mango-juice-splashing.png";
import CitrusBowlImg from "@/assets/Citrus & Honeydew Melody-1.png";
import SaladBowlsImg from "@/assets/salad_bowls.png"
import CherryBoxImg from '@/assets/cherry_box.png'
import ThreeJuicesImg from "@/assets/three_juices.png";
import MelonCitrusImg from '@/assets/melon_citrus_cooler_1.png'
import ApplesImg from '@/assets/apples_2.png'

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Gallery" />
      <section className="lg:mt-24 lg:p-24 bg-[#b5e58c]">
        <div className="grid grid-cols-3 grid-rows-3 max-w-6xl mx-auto">
          <ImageCell src={FourJuicesImg} alt="Four colorful glasses of fruit juice" />
          <ImageCell src={JuiceSplashImg} alt="Juice splashing in a glass" />
          <ImageCell src={MelonCitrusImg} alt="Melon citrus juice" />
          <ImageCell src={ApplesImg} alt="Boxes of Apples" />

          <div className="col-span-1 row-span-1 bg-teal-500 flex flex-col items-center justify-center text-center p-4">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-8 rounded-lg mb-2">
              Order Now
            </button>
            <p className="text-white text-sm">Get The Flavor You Enjoy!</p>
          </div>

          <ImageCell src={SaladBowlsImg} alt="Bowls of salad" />
          <ImageCell src={CitrusBowlImg} alt="Citrus & honeydew melody" />
          <ImageCell src={ThreeJuicesImg} alt="Three colorful glasses of fruit juice" />
          <ImageCell src={CherryBoxImg} alt="Box of cherries" />
        </div>
      </section>
    </main>
  );
};

export default page;