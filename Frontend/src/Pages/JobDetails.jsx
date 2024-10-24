import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "../utils/constant";
import { setSingleJob } from "../redux/jobSlice"
import {toast} from "react-toastify"
const JobDetails = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const jobId = params.id;
  const { user } = useSelector(store => store.auth)
  const { singleJob } = useSelector((store) => store.job);
  const isInitialyApply = singleJob?.applications?.some(applications => applications.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitialyApply);




  const applyJobHandler = async() => {
    try {
      const res =await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials: true});
      if(res.data.success) {
        setIsApplied(true)
        const updateSingleJog = {...singleJob, applications: [...singleJob.applications, {applicant: user?._id}]}
        dispatch(setSingleJob(updateSingleJog)); // update single job with application
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    const fetchsingleJob = async() => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getjob/${jobId}`, {withCredentials: true});
        if(res.data.success){
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)) // Ensure the state is sync with fetch data
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchsingleJob();
  },[jobId,dispatch,user?._id])

  return (
    <div className="mx-auto my-10 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
      <div className="flex flex-col gap-5 p-6 rounded-lg">
        {/* Job Details Header */}
        <div className="flex justify-between items-center px-2 py-3 bg-mycolor rounded-t-lg text-white shadow-lg">
          <div className="flex items-center px-2 text-center font-medium bg-white text-blue-700 cursor-pointer rounded-full shadow-md hover:bg-gray-100">
            <IoMdArrowRoundBack className="text-xl" />
            <span onClick={() => navigate(-1)}>Back</span>
          </div>
          <h1 className="text-center text-2xl md:text-4xl font-bold flex-1">
            JOB DETAILS
          </h1>
        </div>

        {/* Job Title Section */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">
              {singleJob?.title}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs px-3 py-1 rounded-full bg-blue-200 text-blue-900 font-bold">
                {singleJob?.position} Positions
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-orange-200 text-orange-900 font-bold">
                {singleJob?.jobType}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-900 font-bold">
                {singleJob?.salary} LPA
              </span>
            </div>
          </div>
          <button
          onClick={isApplied ? null : applyJobHandler}
            className={`px-5 h-11 text-white font-medium rounded-lg transition duration-300 ${
              isApplied
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-mycolor hover:bg-blue-700"
            } shadow-md`}
            disabled={isApplied}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </button>
        </div>

        {/* Job Description Section */}
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="text-xl font-medium border-b-2 border-blue-500 pb-3">
            Job Description
          </h1>
          <div className="text-gray-800 space-y-3">
            <div className="flex items-center">
              <FaBriefcase className="mr-3 text-blue-600" />
              <h1 className="font-bold">
                Role:{" "}
                <span className="pl-3 font-normal">{singleJob?.title}</span>
              </h1>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-red-600" />
              <h1 className="font-bold">
                Location: <span className="pl-3 font-normal">{singleJob?.location}</span>
              </h1>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-green-600" />
              <h1 className="font-bold">
                Posted Date:{" "}
                <span className="pl-3 font-normal">{singleJob?.createdAt.split("T")[0]}</span>
              </h1>
            </div>
            <div className="flex items-center">
              <FaRupeeSign className="mr-3 text-purple-600" />
              <h1 className="font-bold">
                Salary: <span className="pl-3 font-normal">{singleJob?.salary} LPA</span>
              </h1>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="mr-3 text-blue-600" />
              <h1 className="font-bold">
                Experience: <span className="pl-3 font-normal">{singleJob?.experienseLevel} Years</span>
              </h1>
            </div>
            {/* <div>
              reaqu
            </div> */}
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-green-600" />
              <h1 className="font-bold">
                Total Applicants: <span className="pl-3 font-normal">{singleJob?.applications.length}</span>
              </h1>
            </div>
            <h1 className="font-bold">Description:</h1>
            <p className="text-gray-600">
              {singleJob?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
