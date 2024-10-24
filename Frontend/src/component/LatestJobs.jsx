import React from "react";
import LatestJobCards from "../component/LatestJobCards";
import { useSelector } from "react-redux";
const LatestJobs = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className="mx-auto my-10 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
      <h1 className="text-2xl md:text-5xl font-bold font-title text-center">
        Latest & Top <span className="text-mycolor">Job opening</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10 justify-center">
        {allJobs?.length <= 0 ? <span className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-lg font-medium">
            No jobs found
          </span>  : allJobs?.slice(0, 6).map((job) => (
          <LatestJobCards key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
