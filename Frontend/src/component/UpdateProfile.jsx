import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/authSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { USE_API_END_POINT } from "../utils/constant";
const UpdateProfile = ({ isOpen, setIsOpen }) => {
    const[loading, setLoading ] = useState(false);
    const { user } = useSelector(store => store.auth);

    const dispatch = useDispatch();
    const [input , setInput] = useState({
      fullname: user?.fullname,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      bio: user?.profile?.bio,
      skills: user?.profile?.skills?.map(skill => skill),
      file: user?.profile?.resume
    })

    const changeEventHandler = (e) => {
      setInput({...input,[e.target.name]: e.target.value})
    }
    const fileChangeHandler = (e) => {
      const file  = e.target.files?.[0];
      setInput({...input, file})
    }

    const submiteHandler = async(e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("bio", input.bio);
      formData.append("skills", JSON.stringify(input.skills));
      if (input.file) {
        formData.append("file", input.file);
      } 

      setLoading(true)
      try {
        const res = await axios.post(`${USE_API_END_POINT}/profile/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          withCredentials: true
        });

        if(res.data.success){
          dispatch(setUser(res.data.user));
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally{
        setLoading(false)
      }

      setIsOpen(!isOpen);
      console.log(input)
    }



  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-80"
            onClick={() => setIsOpen(false)} // Close the modal when clicking on the overlay
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gray-200 p-5 rounded-lg shadow-lg z-50 w-11/12 sm:w-[30%]">
            <div className="flex justify-between">
                <h1 className="text-lg md:text-xl font-medium font-font3">Update Profile</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="bg-mycolor p-2 rounded-full shadow-lg">
                    <MdClose />
                </button>
            </div>

            <form onSubmit={submiteHandler} className="mt-5 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">UserName : </label>
                    <input className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2" onChange={changeEventHandler} name="fullname" value={input.fullname} type="text" placeholder="update name" />
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">Email : </label>
                    <input className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2" onChange={changeEventHandler} name="email" value={input.email} type="email" placeholder="update email" />
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">Number : </label>
                    <input className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2" onChange={changeEventHandler} name="phoneNumber" value={input.phoneNumber} type="number" placeholder="update Number" />
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">Bio : </label>
                    <input className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2" onChange={changeEventHandler} name="bio" value={input.bio} type="text" placeholder="update bio" />
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">Skills : </label>
                    <input className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2" onChange={changeEventHandler} name="skills" value={input.skills} placeholder="update skills" />
                </div>
                <div className="flex justify-between items-center">
                    <label className="w-[30%] font-font4 text-sm md:text-lg text-right">Resume:</label>
                    <input
                        className="w-[70%] flex-1 ml-3 border border-gray-400 py-1 rounded-sm px-2 file:border-none file:bg-mycolor file:rounded-md file:text-black file:font-medium file:py-1 file:px-4 file:cursor-pointer hover:file:bg-opacity-80 transition duration-200 ease-in-out"
                        type="file" // Changed to file input for uploading resumes
                        accept=".pdf,.doc,.docx" // This specifies the file types (PDF, DOC, DOCX) allowed
                        name="file"
                        onChange={fileChangeHandler}
                    />
                </div>
                {loading ? (
              <div className="w-full flex items-center justify-center">
                <span className="loader mt-3"></span>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <button
                  type="sumbit"
                  className="py-1 w-full sm:w-52 bg-mycolor border shadow-lg font-medium text-lg rounded-sm mt-3"
                >
                  Update Profile
                </button>
              </div>
            )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
