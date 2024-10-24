import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { HiMiniPencil } from "react-icons/hi2";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import AppliedJobs from "../component/AppliedJobs";
import UpdateProfile from "../component/UpdateProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const isresume = true;
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useSelector(store => store.auth)
  return (
    <div>
      <Navbar />
      <div className="flex flex-col  gap-5 mx-auto my-5 px-4 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl relative">
        {/* Profile */}
        <div className="flex flex-col gap-1 bg-mycolor shadow-xl rounded-md p-5">   
          {/* image and name desc and update profile icon */}
          <div className="flex justify-between">
            {/* image and name */}
            <div className="flex items-center gap-2 ">
              <div>
                <img
                  className="w-16 h-16 border-[3px] rounded-md border-y-black border-x-mecolor"
                  src={user?.profile?.profilePhoto}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-0">
                <h1 className="text-xl md:text-3xl font-bold font-font3">{user?.fullname}</h1>
                <span className="text-lg text-gray-500">{user?.profile?.bio}</span>
              </div>
            </div>

            {/* profile update */}
            <div onClick={() => setIsOpen(!isOpen)} className="bg-slate-100 w-10 h-10 flex items-center justify-center shadow-lg rounded-lg border border-black text-2xl cursor-pointer">
              <HiMiniPencil />
            </div>
          </div>

          {/* email and number */}
          <div className="mt-3">
            <div className="flex gap-1 items-center ">
              <SiGmail />
              <span className="text-slate-600">{user?.email}</span>
            </div>
            <div className="flex gap-1 items-center ">
              <FaPhoneAlt />
              <span className="text-slate-600">+91 {user?.phoneNumber}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col mt-3 gap-1">
            <h1 className="text-lg font-bold font-font4">
              Skill
            </h1>
            {user?.profile?.skills.length <= 0 ? (
              <span className="text-sm text-gray-500 ">Skills no added</span>
            ) : (
              <div className="flex gap-2 min-w-full flex-wrap">
                {user?.profile?.skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="px-2 py-1 text-xs bg-black text-mecolor rounded-full min-w-14 text-center font-medium shadow-xl font-font4"
                    >
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Resume */}
          <div className="flex flex-col">
            <label className="text-lg font-bold">Resume</label>
            {isresume ? (
              <a
                href={user?.profile?.resume}
                target="blank"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                {user?.profile?.resumeOriginalName}
              </a>
            ) : (
                <span className="text-sm text-gray-500 ">Resume not added</span>
            )}
          </div>


        </div>

        {/* Applied Jobs */}
        <AppliedJobs />
      </div>

      {/* update prfile component */}
      <UpdateProfile isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Profile;
