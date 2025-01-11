import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const CustomPagination = ({
  rowsPerPage,
  data,
  startIndex,
  setStartIndex,
  endIndex,
  setEndIndex,
}: {
  rowsPerPage: number;
  data: any;
  startIndex: number;
  setStartIndex: any;
  endIndex: number;
  setEndIndex: any;
}) => {
  return (
    <Pagination className="flex justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              startIndex === 0
                ? "pointer-events-none opacity-50"
                : " text-black font-bold text-xl"
            }
            onClick={() => {
              setStartIndex(startIndex - rowsPerPage);
              setEndIndex(endIndex - rowsPerPage);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              endIndex >= data.length
                ? "pointer-events-none opacity-50"
                : " text-black font-bold text-xl"
            }
            onClick={() => {
              setStartIndex(startIndex + rowsPerPage);
              setEndIndex(endIndex + rowsPerPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
