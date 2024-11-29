import React from "react";
import { BlogProps } from "../../components/BlogList";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecentBlogs = ({ blogs }: { blogs: BlogProps[] }) => {
  const lastFourBlogs = blogs.slice(-4);
  return (
    <section className="py-4 bg-gradient-to-b from-cream-yellow to-primary-orange">
      <h2 className="font-bold text-4xl text-center">Recent Blogs</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 w-full py-8">
        {lastFourBlogs?.map((blog: BlogProps) => (
          <div
            className="w-full flex flex-col items-center gap-2"
            key={blog?.id}
          >
            <Image
              src={blog.src}
              width={320}
              height={480}
              alt={blog.title}
              className="w-64 h-72 rounded-full"
            />
            <h2 className="text-xl font-semibold text-white text-center">
              {blog?.title}
            </h2>
            <Link href={`/blogs/${blog.id}`}>
              <Button className="bg-primary-yellow rounded-full hover:bg-primary-yellow-dark-shade">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
