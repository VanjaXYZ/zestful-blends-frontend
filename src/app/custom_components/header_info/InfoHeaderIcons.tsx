import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const InfoHeaderIcons = () => {
  return (
    <div className="flex gap-6">
      <Link href={"https://www.instagram.com/zestful.blends/"} target="_blank">
        <FaInstagram />
      </Link>
      <Link href={"https://web.facebook.com/zestfulblends"} target="_blank">
        <FaFacebook />
      </Link>
      <Link href={""}>
        <FaYoutube />
      </Link>
      <Link href={"https://x.com/zestfulblends"} target="_blank">
        <FaTwitter />
      </Link>
    </div>
  );
};

export default InfoHeaderIcons;
