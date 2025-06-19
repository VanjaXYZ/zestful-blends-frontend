import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col gap-4 max-w-[500px]">
      <Image
        src={blog.imageSrc}
        alt="Blog Image"
        className="rounded-3xl w-full"
      />
      <p className="font-semibold text-white">
        By {blog.author} | {blog.date}
      </p>
      <h3 className="font-bold text-xl antialiased">{blog.title}</h3>
      <p className="text-neutral-700 text-white">
        {blog.description}
      </p>
      <Link href={`/blogs/${blog.id}`}>
        <Button className="bg-black w-[150px] font-semibold transition-colors hover:bg-white rounded-xl text-primary-orange">
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default BlogsList;
