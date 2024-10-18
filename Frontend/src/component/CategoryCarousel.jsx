import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CategoryCarousel = () => {
  const jobRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Cloud Engineer",
    "Database Administrator",
    "Product Manager",
    "Software Engineer",
    "Quality Assurance Engineer",
    "Cybersecurity Analyst",
    "Machine Learning Engineer",
    "Systems Architect",
    "Technical Support Engineer",
    "Blockchain Developer",
    "AI Research Scientist",
    "Game Developer",
    "Network Administrator",
  ];

  return (
    <div className="flex justify-center items-center ">
      <Swiper
        spaceBetween={5}
        autoplay={{ delay: 600, disableOnInteraction: true }} // Autoplay settings
        loop={true} // Loop to allow infinite scrolling
        className="w-full my-14 px-8"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3, // 2 slides on mobile
          },
          768: {
            slidesPerView: 3, // 3 slides on tablets
          },
          1024: {
            slidesPerView: 4, // 4 slides on larger screens
          },
          1200: {
            slidesPerView: 5, // 5 slides on even larger screens
          },
        }}
      >
        {jobRoles.map((role, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-full h-12 text-white text-xl"
          >
            <span className="py-2 px-4 w-[70%]  md:w-[65%] bg-black text-mycolor rounded-full text-sm font-semibold flex justify-center items-center whitespace-nowrap">
              {role}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
