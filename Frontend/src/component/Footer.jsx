import React from "react";
import { FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-mycolor px-6 py-2 md:py-6 md:px-20">
      {/* Container to hold all footer content */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">
            It <span className="text-mecolor">Jobs</span>{" "}
          </h1>
          <p className="text-xs md:text-sm text-gray-700 font-medium">
            Empowering developers to find the best tech jobs.
          </p>
        </div>

        {/* Navigation bar */}
        <ul className="flex gap-4 md:gap-7 font-font2 text-sm md:text-xl font-medium">
          <li className="hover:text-mecolor cursor-pointer">Home</li>
          <li className="hover:text-mecolor cursor-pointer">Jobs</li>
          <li className="hover:text-mecolor cursor-pointer">Browse</li>
        </ul>

        {/* Social media */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/arfat-sheru99136/" target="_blank" className="text-2xl hover:text-mecolor">
            <FaLinkedin />
          </a>
          <a href="https://github.com/arfajsheru" target="_blank" className="text-2xl hover:text-mecolor">
            <FaGithubSquare />
          </a>
          <a href="https://wa.me/9913690041" target="_blank" className="text-2xl hover:text-mecolor">
            <FaSquareWhatsapp />
          </a>
          <a href="https://www.instagram.com/arfaj.sheru" target="_blank" className="text-2xl hover:text-mecolor">
            <FaSquareInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
