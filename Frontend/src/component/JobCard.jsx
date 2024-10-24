import React from "react";
import { BiSolidSave } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const diffTime = currentTime - createdAt;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);

    return { days, years };
  };

  return (
    <div className="p-5 rounded-md bg-slate-200 shadow-xl border">
      <div className="flex flex-col gap-1">
        {/* first title */}
        <div className="flex items-center justify-between">
          <h1 className="text-xs text-gray-500">
            {(() => {
              const { days, years } = daysAgoFunction(job?.createdAt);

              if (years > 0) {
                return years === 1 ? "1 year ago" : `${years} years ago`;
              } else if (days === 0) {
                return "Today";
              } else {
                return days === 1 ? "1 day ago" : `${days} days ago`;
              }
            })()}
          </h1>
          <div className="w-8 h-8 text-center flex items-center border justify-center bg-mecolor rounded-full shadow-lg shadow-gray-500/50">
            <BiSolidSave className="text-xl" />
          </div>
        </div>

        {/* logo and name title */}

        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-10 h-10 border-2 rounded-md border-y-mycolor border-x-mecolor"
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="text-xl font-bold font-font3">
              {job?.company?.name}
            </h1>
            <span className="text-xs text-gray-500">{job?.location}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-bold">{job?.title}</h1>
          <p className="text-xs font-font4 text-justify">{job?.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-blue-900 ">
            {job?.position} Position
          </span>
          <span className="text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-orange-900 ">
            {job?.jobType}
          </span>
          <span className="text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-purple-900">
            {job?.salary} LPA
          </span>
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => navigate(`/jobdetails/${job?._id}`)}
            className="px-2 py-1 border border-gray-400 rounded-md bg-mecolor text-sm font-medium font-font2"
          >
            Details
          </button>
          <button className="px-2 py-1 border border-gray-400 rounded-md bg-mycolor text-sm font-medium font-font2">
            Save For Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
