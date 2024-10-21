import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"
const JobDetails = () => {
const navigate = useNavigate()
  const isApplied = false;

  return (
    <div className="mx-auto my-10 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
      <div className="flex flex-col gap-5 p-6 rounded-lg">
        {/* Job Details Header */}
        <div className="flex justify-between items-center px-2 py-3 bg-mycolor rounded-t-lg text-white shadow-lg">
          <div className="flex items-center px-2 text-center font-medium bg-white text-blue-700 cursor-pointer rounded-full shadow-md hover:bg-gray-100">
            <IoMdArrowRoundBack className="text-xl" />
            <span onClick={() => navigate(-1)}>Back</span>
          </div>
          <h1 className="text-center text-2xl md:text-4xl font-bold flex-1">JOB DETAILS</h1>
        </div>

        {/* Job Title Section */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">Frontend Developer</h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-200 text-blue-900 font-bold">12 Positions</span>
              <span className="text-xs px-3 py-1 rounded-full bg-orange-200 text-orange-900 font-bold">Part-Time</span>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-900 font-bold">24 LPA</span>
            </div>
          </div>
          <button
            className={`px-5 h-11 text-white font-medium rounded-lg transition duration-300 ${
              isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-mycolor hover:bg-blue-700'
            } shadow-md`}
            disabled={isApplied}
          >
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </button>
        </div>

        {/* Job Description Section */}
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="text-xl font-medium border-b-2 border-blue-500 pb-3">Job Description</h1>
          <div className="text-gray-800 space-y-3">
            <div className="flex items-center">
              <FaBriefcase className="mr-3 text-blue-600" />
              <h1 className="font-bold">Role: <span className="pl-3 font-normal">Frontend Developer</span></h1>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-red-600" />
              <h1 className="font-bold">Location: <span className="pl-3 font-normal">Mumbai</span></h1>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-green-600" />
              <h1 className="font-bold">Posted Date: <span className="pl-3 font-normal">17/07/2024</span></h1>
            </div>
            <div className="flex items-center">
              <FaRupeeSign className="mr-3 text-purple-600" />
              <h1 className="font-bold">Salary: <span className="pl-3 font-normal">45 LPA</span></h1>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="mr-3 text-blue-600" />
              <h1 className="font-bold">Experience: <span className="pl-3 font-normal">2 Years</span></h1>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-green-600" />
              <h1 className="font-bold">Total Applicants: <span className="pl-3 font-normal">80</span></h1>
            </div>
            <h1 className="font-bold">Description:</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolore illo eveniet sapiente ratione in
              quod dignissimos nam necessitatibus quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
