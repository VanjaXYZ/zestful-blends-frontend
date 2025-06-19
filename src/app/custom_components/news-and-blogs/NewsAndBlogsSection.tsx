import React from "react";
import Image1 from "@/assets/man_drinking update.png";
import Image2 from "@/assets/apples update.png";
import Image3 from "@/assets/man_making_juice update.png";
import BlogsList from "./BlogsList";
import styles from "./NewsAndBlogs.module.css";

const items = [
  {
    id: "1",
    imageSrc: Image1,
    author: "Sarah Williams",
    date: "October 2, 2024",
    title: "The Benefits of Freshly Squeezed Juices",
    description:
      "This article highlights the nutritional advantages of consuming freshly squeezed juices, explaining how they provide essential vitamins and antioxidants that boost immunity and overall health.",
  },
  {
    id: "2",
    imageSrc: Image2,
    author: "Mark Thompson",
    date: "September 18, 2024",
    title: "Superfoods in Juices: How to Power Your Day",
    description:
      "This piece explores the inclusion of superfoods like kale, spinach, and chia seeds in juices, focusing on how these ingredients can improve energy levels, digestion, and overall well-being.",
  },
  {
    id: "3",
    imageSrc: Image3,
    author: "Emily Carter",
    date: "August 27, 2024",
    title: "The Role of Juices in Detox Diets: Myths and Facts",
    description:
      "The article examines the role of juices in detox diets, dispelling common myths while providing scientific insights into how juice cleanses work and their potential health benefits.",
  },
];

const NewsAndBlogsSection = () => {
  return (
    <section
      className={`pt-8 bg-primary-orange flex flex-col gap-10`}
    >
      <h2 className="text-4xl font-bold text-black text-center">
        Our News & Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[5%] gap-20 lg:gap-16">
        {items?.map((blog: any) => (
          <BlogsList blog={blog} key={blog.id} />
        ))}
      </div>
      <div>
        <div className="relative -mb-[1px] bg-[length:100%_100%] bg-no-repeat z-10" 
        style={{backgroundImage: `linear-gradient(to bottom, #EC7904 25%, #6E8E2D 25%)`,}}>
          <div className="absolute w-full top-[-4px] h-4 max-sm:h-3 bg-[#EC7904] z-[-1]"></div>
          <div className="absolute w-full bottom-[-3px] h-1 bg-[#6E8E2D] z-[100]"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#EC7904" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,160C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlogsSection;
