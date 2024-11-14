import React from "react";
import Image1 from "@/assets/girl-in-the-garden.png";
import Image2 from "@/assets/mango-juice-splashing.png";
import Image3 from "@/assets/juice-sorting-agora.png";
import Image from "next/image";

const StoryList = () => {
  return (
    <div className="flex flex-col items-center">
      {/* 1 */}
      <div className="flex flex-col lg:flex-row">
        <Image src={Image1} width={500} height={500} alt="Girl in the garden" />
        <div className="p-8 flex flex-col justify-center gap-2">
          <h4 className="text-2xl text-primary-yellow font-bold">
            Story of Our Juice Shop
          </h4>
          <p className="max-w-md text-neutral-800">
            To deliver the finest fruit-based delights, revolutionizing fruit
            consumption with diverse, delicious options that promote health,
            delight the senses, and sustain the planet.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col lg:hidden">
        <Image src={Image2} width={500} height={500} alt="Girl in the garden" />
        <div className="p-8 flex flex-col justify-center gap-2">
          <h4 className="text-2xl text-primary-yellow font-bold">Our Juice</h4>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            reiciendis eveniet vitae iusto reprehenderit vel consequatur fugit
            eligendi, accusantium libero velit nemo maxime perferendis
            exercitationem. Unde iusto aspernatur ea asperiores.
          </p>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            minus alias molestiae? Facere quas id fugit?
          </p>
        </div>
      </div>
      <div className=" flex-col lg:flex-row lg:flex hidden">
        <div className="p-8 flex flex-col justify-center gap-2">
          <h4 className="text-2xl text-primary-yellow font-bold">Our Juice</h4>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            reiciendis eveniet vitae iusto reprehenderit vel consequatur fugit
            eligendi, accusantium libero velit nemo maxime perferendis
            exercitationem. Unde iusto aspernatur ea asperiores.
          </p>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            minus alias molestiae? Facere quas id fugit?
          </p>
        </div>
        <Image
          src={Image2}
          width={500}
          height={500}
          alt="Mango juice splashing"
        />
      </div>

      {/* 3 */}
      <div className="flex flex-col lg:flex-row">
        <Image
          src={Image3}
          width={500}
          height={500}
          alt="Sorting juices in agora"
        />
        <div className="p-8 flex flex-col justify-center gap-2">
          <h4 className="text-2xl text-primary-yellow font-bold">Our Shop</h4>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            sit! Quibusdam, alias quidem nemo quod numquam nulla corporis iure
            voluptates veniam maxime soluta ab vel, adipisci consectetur beatae
            a doloribus aperiam! Nobis minus maiores molestias perspiciatis
            velit aliquam. Corporis, voluptas nisi. Animi.
          </p>
          <p className="max-w-md text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            totam deserunt! Cupiditate vel ut nesciunt assumenda perferendis
            eius fugiat modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryList;
