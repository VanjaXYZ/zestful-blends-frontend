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
import TwoJuices from '@/assets/two_juices.png'

const page = () => {
  return (
    <main>
      <Breadcrumbs currentPageName="Gallery" />
      <section className="lg:mt-24 lg:p-24 bg-primary-olive">
        <div className="grid grid-cols-3 grid-rows-3 max-w-6xl mx-auto">
          <ImageCell src={FourJuicesImg} alt="Four colorful glasses of fruit juice" />
          <ImageCell src={JuiceSplashImg} alt="Juice splashing in a glass" />
          <ImageCell src={MelonCitrusImg} alt="Melon citrus juice" />
          <ImageCell src={CitrusBowlImg} alt="Citrus & honeydew melody" />

          <div className="col-span-1 row-span-1 bg-primary-green flex flex-col items-center justify-center text-center p-1 sm:p-3">
            <button className="w-11/12 sm:w-4/5 bg-primary-yellow hover:bg-primary-yellow-dark-shade text-black font-bold py-2 sm:py-5 px-2 sm:px-0 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-xl mb-2">
              Order Now
            </button>
            <p className="text-white mx-1 sm:mx-3 text-xs sm:text-base">Get The Flavor You Enjoy!</p>
          </div>

          <ImageCell src={TwoJuices} alt="Two glasses of juice" />
          <ImageCell src={SaladBowlsImg} alt="Bowls of salad" />
          <ImageCell src={ThreeJuicesImg} alt="Three colorful glasses of fruit juice" />
          <ImageCell src={CherryBoxImg} alt="Box of cherries" />
        </div>
      </section>
    </main>
  );
};

export default page;