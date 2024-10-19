import React from "react";

const AppliedJobs = () => {
  const jobbsApplied = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1 className="text-center text-2xl font-medium font-font2 mb-5">
        Applied Jobs
      </h1>
      {/* Table container with overflow for mobile */}
      <div className="overflow-x-auto rounded-md shadow-xl border border-gray-300">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-4 text-left px-6 text-xl">Date</th>
              <th className="py-4 text-left px-6 text-xl">Job Role</th>
              <th className="py-4 text-left px-6 text-xl">Company</th>
              <th className="py-4 text-center px-6 text-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobbsApplied.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="text-left border-b py-3 px-6 text-gray-800 font-medium text-lg">17/07/2024</td>
                <td className="text-left border-b py-3 px-6 text-gray-800 font-medium text-lg">Frontend Developer</td>
                <td className="text-left border-b py-3 px-6 text-gray-800 font-medium text-lg">Google</td>
                <td className="text-center border-b py-3 px-6 text-gray-800 font-medium text-xs">
                  <span className="bg-black px-2 py-1 rounded-full text-white">
                    Selected
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
