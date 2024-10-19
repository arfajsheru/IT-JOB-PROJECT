import React, { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { USE_API_END_POINT } from "../utils/constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/authSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USE_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message);
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
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[41%] p-4 bg-gray-100 rounded-md shadow-lg"
        >
          <div className="w-full flex flex-col gap-5 justify-center">
            <h1 className="text-3xl sm:text-4xl text-mycolor font-bold text-center font-title">
              Login
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="text-[14px] sm:text-[16px] font-medium text-gray-800">
                  Email
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm "
                  type="email"
                  placeholder="Enter email"
                  value={input.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] sm:text-[16px] font-medium text-gray-800">
                  Password
                </label>
                <input
                  className="py-2 bg-gray-200 rounded pl-3 border-none outline-none text-sm "
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
                  type="sumbit"
                  className="py-1 w-full sm:w-52 bg-mycolor border border-black text-lg rounded-sm mt-3"
                >
                  Login
                </button>
              </div>
            )}

            <span className="text-sm text-gray-700 text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium hover:text-blue-700 hover:underline"
              >
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
