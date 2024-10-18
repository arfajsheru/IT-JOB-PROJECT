import React from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="text-center px-4"> {/* Added padding for mobile responsiveness */}
      <div className="flex flex-col gap-3 md:gap-5 my-10">
        <span className="bg-gray-300 py-1 px-4 rounded-full text-center text-sm text-mecolor mx-auto transition-all duration-1000 hover:bg-gray-500 hover:text-white animate-pulse cursor-pointer">
          No.1 Job Hunt Website
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-snug font-title md:leading-tight"> {/* Adjust font size and line height for mobile */}
          Search, Apply & <br />
          Get Your<span className="text-mycolor"> Dream Jobs</span>
        </h1>

        <p className="text-xs md:text-xs mt-4 text-gray-600"> {/* Adjusted text size for mobile */}
          Discover thousands of opportunities at your fingertips. Let us help you take the next step in your career journey with ease and confidence.
        </p>

        <div className="flex items-center justify-between mx-auto pl-3 bg-gray-300 w-full md:w-[40%] rounded-full shadow-lg transition-all duration-300 ease-in-out">
          <input
            type="text"
            className="outline-none border-none bg-transparent flex-grow text-gray-700 placeholder-gray-500 px-2 text-sm"
            placeholder="Find your dream jobs"
          />
          <button className="bg-mycolor p-2 px-3 rounded-r-full hover:bg-opacity-80 transition-all duration-300 ease-in-out">
            <MdOutlineScreenSearchDesktop className="text-xl md:text-2xl text-black font-medium" /> {/* Adjusted icon size for mobile */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
