import React from "react";
import Image1 from "@/assets/man_drinking.png";
import Image2 from "@/assets/apples.png";
import Image3 from "@/assets/man_making_juice.png";
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
      className={`py-8 bg-primary-pink flex flex-col gap-20 ${styles.bottomWave} `}
    >
      <h2 className="text-4xl font-bold text-white text-center">
        Our News & Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-12 gap-8 place-items-center">
        {items?.map((blog: any) => (
          <BlogsList blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default NewsAndBlogsSection;
