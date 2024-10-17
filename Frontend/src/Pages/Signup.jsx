import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { USE_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USE_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      navigate("/login");
      if (res.data.success) {
        toast.success("User registered successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      {/* Sign up page */}
      <div className="w-full max-w-7xl mx-auto flex justify-center mt-5 h-[80vh] items-center px-4">
        <form
          onSubmit={sumbitHandler}
          className="w-full sm:w-[41%] p-4 bg-gray-100 rounded-md shadow-lg"
        >
          <div className="w-full flex flex-col gap-5 justify-center">
            <h1 className="text-4xl text-mycolor font-bold text-center font-title">
              Sign Up
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="text-[16px] font-medium text-gray-800 ">
                  Username
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm"
                  type="text"
                  placeholder="Enter username"
                  value={input.fullname}
                  name="fullname"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-medium text-gray-800 ">
                  Email
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm"
                  type="email"
                  placeholder="Enter email"
                  value={input.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-medium text-gray-800 ">
                  Phone Number
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm"
                  type="number"
                  placeholder="Enter phone number"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-medium text-gray-800 ">
                  Password
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm"
                  type="password"
                  placeholder="Enter password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                    autoComplete="current-password"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between w-full gap-2 mt-3">
                <div className="w-full sm:w-auto flex items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center">
                      <input
                        type="radio"
                        onChange={handleInputChange}
                        value="student"
                        name="role"
                        checked={input.role === "student"}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <label className="font-medium">Student</label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <input
                        type="radio"
                        onChange={handleInputChange}
                        value="recruiter"
                        name="role"
                        checked={input.role === "recruiter"}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <label className="font-medium">Recruiter</label>
                    </div>
                  </div>
                </div>

                <div className=" w-full flex mt-2 md:mt-0 sm:flex-row md:items-center gap-2 sm:gap-1">
                  <label className="text-sm font-medium">Profile</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="cursor-pointer w-full sm:w-auto bg-transparent border-none outline-none file:border-none file:bg-mycolor file:rounded-md file:text-white file:py-1 file:px-4 file:cursor-pointer hover:file:bg-opacity-80 transition duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <span className="loader mt-3"></span>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="py-1 w-52 bg-mycolor border border-black text-lg rounded-sm mt-3"
                >
                  Signup
                </button>
              </div>
            )}
            <span className="text-sm text-gray-700 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
