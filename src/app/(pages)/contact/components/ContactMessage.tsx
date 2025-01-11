import React from "react";
import ImageSmoothie from "@/assets/Caribbean Bliss Smoothie-1.png";
import Image from "next/image";

const ContactMessage = () => {
  return (
    <section className="bg-primary-yellow-dark-shade md:p-24 space-y-12">
      <h2 className="text-5xl text-white font-bold text-center">
        We Want You To Know!
      </h2>
      <div className="flex justify-center gap-12">
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
        <div className="w-[300px]">
          <Image
            src={ImageSmoothie}
            alt="Smoothie"
            width={250}
            height={500}
            className="rounded-lg aspect-[2/3] object-cover w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;
