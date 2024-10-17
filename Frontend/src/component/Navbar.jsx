import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white py-2">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xl sm:text-2xl font-bold">
          <h1>
            IT <span className="text-[#2cf5c3]">Jobs</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <ul className="flex items-center gap-2 sm:gap-5 font-medium text-sm sm:text-base">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {!user ? (
            <div className="flex gap-2 sm:gap-3">
              <Link to={"/login"}>
                <button className="px-3 py-1 text-sm sm:text-lg font-medium rounded-sm border border-black bg-transparent hover:bg-mycolor transition duration-200">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="px-3 py-1 text-sm sm:text-lg font-medium rounded-sm border border-black bg-mycolor hover:bg-transparent transition duration-200">
                  Sign up
                </button>
              </Link>
            </div>
          ) : (
            <div className="relative cursor-pointer group">
              <img
                className="w-12 sm:w-[60px] rounded-full"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                alt="User Avatar"
              />
              {/* Popover */}
              <div className="absolute flex gap-4 flex-col bg-gray-300 p-3 sm:p-4 w-64 sm:w-80 border border-gray-300 rounded-md right-0 top-[60px] sm:top-[70px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg z-10">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 sm:w-[50px] rounded-full"
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="User"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-sm text-gray-900">
                      Arfaj Mers Stack
                    </h1>
                    <p className="text-sm text-gray-600">
                      Keep calm and move on
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CgProfile className="text-2xl sm:text-3xl ml-2" />
                    <p className="text-sm sm:text-md font-medium hover:underline ml-2 sm:ml-3">
                      View Profile
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <TbLogout2 className="text-2xl sm:text-3xl ml-2" />
                    <p className="text-sm sm:text-md font-medium hover:underline ml-2 sm:ml-3">
                      LogOut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
