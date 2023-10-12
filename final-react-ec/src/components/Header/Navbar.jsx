import { useContext, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { showUser, logout } = useContext(AppContext);
  const email = localStorage.getItem("email");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center pl-14 pr-10  top-0 z-50 fixed w-full h-[100px] bg-White-10 shadow-md ">
        <div className="flex gap-8 items-center text-2xl">
          <Link to="/">
            <div className="flex gap-1 items-center w-[448px] h-[56px]">
              <BsYoutube className="text-[4rem] text-white bg-red-600 rounded-full p-2 mr-5" />
              <span className=" font-bold text-[#FF1717]">
                Youtube Videos Sharing
              </span>
            </div>
          </Link>
        </div>
        {showUser ? (
          <div className="flex gap-5 items-center text-center">
            <Link to="/share">
              <button className="w-[100px] h-[40px] border rounded-lg bg-[#7648F8] text-white">
                SHARE
              </button>
            </Link>

            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="relative"
            >
              <h3 className="w-50 h-10 text-[#7648F8]  flex flex-col justify-center cursor-pointer ">
                Welcome {email}
              </h3>
              {isDropdownOpen && (
                <div className="absolute top-12 right-0  bg-white mt-[-20px] ">
                  <button
                    onClick={logout}
                    className="w-[114px] h-[32px] text-black text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <Link to="/login">
              <button className="w-[100px] h-[40px] border rounded-lg bg-[#7648F8] text-white">
                LOGIN
              </button>
            </Link>
            <Link to="/register">
              <button className="w-20 h-10 text-[#7648F8]">Register</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
