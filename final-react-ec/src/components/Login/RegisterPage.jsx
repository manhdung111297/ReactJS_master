import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const formRegisterRef = useRef("");
  const [showEmail, setShowEmail] = useState(false);

  const close = (event) => {
    event.preventDefault();
  };

  //Handle Register
  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(formRegisterRef.current);
    //Ojbect Register
    const formDataRegister = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: "Dung",
      lastName: "Manh",
    };
    //Call api Register
    axios
      .post("http://localhost:5001/api/users/n-a/register", formDataRegister)
      .then((response) => {
        if (response.data.success == true) {
          Swal.fire({
            icon: "success",
            title: "Đăng ký",
            text: "Đăng nhập thành công",
          });
        } else {
          // Swal.fire({
          //   icon: "error",
          //   title: "Đăng ký",
          //   text: "Đăng ký thất bại, email đã tồn tại",
          // });
          setShowEmail(true);
        }
      })
      .catch(() => {
        alert("Ban dang nhap that bai");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {showEmail ? (
        <div className="absolute w-[252px] h-[46px] bg-red-500 text-white top-[0] right-[0] z-index-10">
          <button
            className="w-8 h-8 text-white flex items-center justify-center hover:bg-white hover:text-red-500 rounded-full transition-colors duration-300 right-0"
            onClick={() => setShowEmail(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white">Your email collect</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-[765px] h-[427px] my-6 mx-auto border rounded-lg shadow bg-white">
        <form
          action=""
          ref={formRegisterRef}
          className="w-full h-full flex flex-col"
        >
          <div className="flex flex-col justify-between p-5  items-center">
            <h3 className="text-3xl font-semibold text-blue-10 no-underline">
              REGISTER SYSTEM
            </h3>
          </div>
          <div className="p-5 flex-auto items-center flex flex-col justify-between">
            <div className="mb-4 flex flex-row text-black w-[480px] items-center">
              <label htmlFor="email" className="Thay">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded ml-[44px]"
              />
            </div>
            <div className="mb-4 flex flex-row text-black w-[480px] items-center">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded ml-4"
              />
            </div>
            <div className="mb-4 flex flex-row w-[385px] mt-[-60px] justify-between ml-[90px]">
              <div>
                <button
                  type="submit"
                  value="LOGIN"
                  className=" h-12 flex-shrink-0 rounded-lg bg-blue-10 mt-10 cursor-pointer text-white w-[171px]"
                  onClick={handleRegister}
                >
                  SIGN UP
                </button>
              </div>
              <div>
                <button
                  type="reset"
                  value="RESET"
                  className="w-[171px] h-12 flex-shrink-0 rounded-lg bg-white mt-10 cursor-pointer text-white-30 border border-gray-300"
                >
                  RESET
                </button>
              </div>
            </div>
            <div class="mb-4 text-right ml-[272px]">
              <Link to="/login">
                <button class="text-blue-500 cursor-pointer ">
                  You have account already?
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
