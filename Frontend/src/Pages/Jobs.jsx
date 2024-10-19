import React, { useState } from "react";
import Navbar from "../component/Navbar";
import FilterJobs from "../component/FilterJobs";
import JobCard from "../component/JobCard";
import { RiFilter3Line } from "react-icons/ri";

const Jobs = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example job IDs or data

  const [FilterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="mx-auto my-10 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl relative">
        <div className="flex gap-5">
          {/* Filter Section */}
          <div className="w-[20%] hidden md:block ">
            <FilterJobs />
          </div>
          <div
            className={`md:hidden fixed top-0 left-0 h-full w-[80%] bg-white p-5 border-r border-gray-300 transform transition-transform duration-300 ease-in-out overflow-y-scroll ${
              FilterOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <FilterJobs setFilterOpen={setFilterOpen} FilterOpen={FilterOpen} />
          </div>

          <div className="flex-1 pb-5">
            <div
              onClick={() => setFilterOpen(!FilterOpen)}
              className="inline-block items-center gap-2 bg-slate-300 md:hidden rounded-md border border-slate-600 px-3 mb-2 py-1 cursor-pointer"
            >
              <h1 className="flex items-center gap-2 font-bold font-font4">
                Filter
                <RiFilter3Line />
              </h1>
            </div>

            {jobs.length <= 0 ? (
              <div className="flex items-center justify-center h-[70vh] text-3xl md:text-5xl font-bold text-gray-200 ">
                Jobs Not Found
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                {jobs.map((job, index) => (
                  <JobCard key={index} jobData={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
