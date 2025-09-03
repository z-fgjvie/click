import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] px-5 py-16">
      <div className="max-w-[75rem] mx-auto">
        <div className="flex md:justify-between items-center flex-col justify-center  md:flex-row">
          <div>
            <p className="mb-5 md:mb-3 text-white text-lg text-center">Logo</p>
            <div className="text-white flex items-center gap-3 text-2xl mb-14 md:mb-0">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
              <FaSpotify />
            </div>
          </div>
          <Image src="/fans-coca.png" alt="fans" width="140" height="140" />
        </div>

        <hr className="text-[#383838] my-8" />

        <div className="flex items-center justify-between ">
          <p className="text-white text-sm">© 2025 Click Boletos</p>
          <div>
            <Image
              src="/reclamos-coca.png"
              alt="libro reclamos"
              width="130"
              height="130"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
