"use client";
import { motion } from "framer-motion";

const InfiniteScrollText = ({ stringArray }: { stringArray: string[] }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary-orange py-2">
      <motion.div
        animate={{ x: [-400, -200] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="inline-block  text-white uppercase"
      >
        {stringArray.map((text: string, index: number) => (
          <span key={index} className="mx-8 font-bold">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;
