"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import DATA from "./../DUMMY-TEXT.json";
import BlogItem from "./BlogItem";
import CustomPagination from "@/app/custom_components/shared/CustomPagination";

export type BlogProps = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  excerpt: string;
  src: string;
};

const BlogList = () => {
  const blogData: BlogProps[] = DATA.articles;
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const paginatedBlogs = blogData.slice(startIndex, endIndex);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 py-4 gap-2 place-items-center">
        {paginatedBlogs?.map((blog: BlogProps, index: number) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </section>
      <section className="py-4">
        <CustomPagination
          rowsPerPage={rowsPerPage}
          data={blogData}
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
        />
      </section>
    </>
  );
};

export default BlogList;
