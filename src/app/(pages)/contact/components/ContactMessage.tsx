import React from "react";
import ImageSmoothie from "@/assets/Caribbean Bliss Smoothie-2 grunge egg shape.png";
import Image from "next/image";

const ContactMessage = () => {
  return (
    <section className="bg-[#FFC10C] pt-8 sm:pt-12 lg:pt-24 max-lg:px-[5%]">
      <h2 className="text-5xl text-white font-bold text-center pb-12">
        We Want You To Know!
      </h2>
      <div className="flex justify-center gap-12 max-lg:flex-col max-lg:justify-center">
        <article className="pt-6 pe-12 space-y-4 max-w-xl">
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            deserunt odio quae earum, quos, ab ipsa nostrum nesciunt dolor quasi
            provident ducimus maiores magnam, culpa autem facere? Fugit rem quo
            quam accusantium eaque saepe aperiam harum illum? Itaque, facere
            voluptates.
          </p>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil
            tenetur explicabo porro. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem, hic sequi! Quo atque porro repudiandae saepe
            numquam ullam?
          </p>
        </article>
        <div className="w-[300px] max-lg:w-full flex justify-center">
          <Image
            src={ImageSmoothie}
            alt="Smoothie"
            width={300}
            height={450}
            className="rounded-lg aspect-[2/3] object-fill w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;
