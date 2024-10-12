import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BlogProps {
  id: string;
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
}

const BlogsList = ({ blog }: { blog: BlogProps }) => {
  return (
    <div className="flex flex-col gap-8 items-center min-h-screen">
      <Image
        src={blog.imageSrc}
        width={300}
        height={300}
        alt="Blog Image"
        className="rounded-3xl w-min"
      />
      <p className="font-semibold h-16">
        By {blog.author} | {blog.date}
      </p>
      <h3 className="font-bold text-xl antialiased h-12">{blog.title}</h3>
      <p className="text-neutral-700 h-24 overflow-hidden text-ellipsis">
        {blog.description}
      </p>
      <Button className="w-fit bg-primary-dark-teal mb-4 font-semibold rounded-full">
        Read More
      </Button>
    </div>
  );
};

export default BlogsList;
