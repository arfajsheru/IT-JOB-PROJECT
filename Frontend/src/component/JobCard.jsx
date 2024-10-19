import React from "react";
import { BiSolidSave } from "react-icons/bi";

const JobCard = () => {
  return (
    <div className="p-5 rounded-md bg-slate-200 shadow-xl border">
      <div className="flex flex-col gap-1">
      {/* first title */}
      <div className="flex items-center justify-between">
        <h1 className="text-xs text-gray-500">2 days ago</h1>
        <div className="w-8 h-8 text-center flex items-center border justify-center bg-mecolor rounded-full shadow-lg shadow-gray-500/50">
          <BiSolidSave className="text-xl" />
        </div>
      </div>


      {/* logo and name title */}

      <div className="flex items-center gap-2">
        <div>
          <img className="w-10 h-10 border-2 rounded-md border-y-mycolor border-x-mecolor" src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"  alt="" />
        </div>
        <div className="flex flex-col gap-0">
          <h1 className="text-xl font-bold font-font3">Company name</h1>
          <span className="text-xs text-gray-500">India</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-bold">Title</h1>
        <p className="text-xs font-font4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum veniam libero, quo aliquam sequi quam magnam assumenda totam quas. Rerum.</p>
      </div>

      <div className='flex items-center gap-2 mt-2'>
        <span className='text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-blue-900 '>12 Position</span>
        <span className='text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-orange-900 '>Part Time</span>
        <span className='text-xs px-2 py-1 rounded-full border bg-mycolor border-gray-300 shadow-lg cursor-pointer font-bold text-purple-900'>24 LPA</span>
      </div>


      <div className="flex gap-2 mt-3">
        <button className="px-2 py-1 border border-gray-400 rounded-md bg-mecolor text-sm font-medium font-font2">Details</button>
        <button className="px-2 py-1 border border-gray-400 rounded-md bg-mycolor text-sm font-medium font-font2">Save For Later</button>
      </div>
      </div>
    </div>
  );
};

export default JobCard;
