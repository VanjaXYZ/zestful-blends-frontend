"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogProps } from "./BlogList";

const BlogItem = ({ blog }: { blog: BlogProps }) => {
  return (
    <div className="flex justify-center flex-col items-center border border-dashed  p-6 rounded-xl gap-2">
      <Image
        src={blog.src}
        width={400}
        height={300}
        alt="Alt pic"
        className="h-[250px] object-cover"
      />
      <div className="flex justify-around w-full">
        <span className="font-semibold text-neutral-500">{blog.author}</span>
        <span className="font-semibold text-neutral-500">{blog.date}</span>
      </div>
      <h3 className="text-xl md:text-2xl text-white font-bold">{blog.title}</h3>
      <Link href={`/blogs/${blog.id}`}>
        <Button
          variant={"outline"}
          className="rounded-xl bg-button-brown border-none transition-colors hover:bg-transparent font-semibold text-white hover:outline-2 hover:outline-double outline-white"
        >
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default BlogItem;
