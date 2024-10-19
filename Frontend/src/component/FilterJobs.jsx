import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const FilterJobs = ({setFilterOpen, FilterOpen}) => {
  const filterData = [
    {
      filterType: "Location",
      array: ["Delhi NCR", "Banglore", "Hydrabad", "Pune", "Mumbai"],
    },
    {
      filterType: "Industry",
      array: [    "Frontend Developer",
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
        "Network Administrator",],
    },
    {
      filterType: "Location",
      array: ["0-40k", "42-lakhs", "lakh to 5lakh"],
    },
  ];
  return (
    <div className="bg-slate-200 rounded-md p-3">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between md:justify-center">
        <h1 className="text-xl md:text-2xl text-center font-medium font-font3  text-mecolor">Filter jobs</h1>
        <span onClick={() => setFilterOpen(!FilterOpen)} className="flex items-center justify-center bg-slate-300 cursor-pointer w-6 h-6 font-bold md:hidden rounded-full border border-gray-200 shadow-lg "><IoCloseSharp /></span>
        </div>

        { filterData.map((data,index) => {
          return (
            <div key={index}>
              <h1 className="text-lg text-black font-font2 font-medium ">{data.filterType}</h1>
              {
                data.array.map((item,index) => {
                  return (
                    <div key={index} className="flex gap-1">
                      <input type="radio" value={item} />
                      <label>{item}</label>
                    </div>
                  )
                })
              }
            </div>

          )
        })}
      </div>
    </div>
  );
};

export default FilterJobs;
