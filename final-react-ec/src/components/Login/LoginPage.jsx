import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function LoginPage() {
  const { setShowUser } = useContext(AppContext);
  // form login and register
  const formLoginRef = useRef("");

  const [showEmail, setShowEmail] = useState(false);

  // Move path
  const navigate = useNavigate();
  // Handle Login
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(formLoginRef.current);

    //Ojbect Login
    const formDataLogin = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //Call api login
    axios
      .post("http://localhost:5001/api/users/n-a/login", formDataLogin)
      .then((response) => {
        const dataAPI = response.data.data;
        if (response.data.success == true) {
          setShowUser(true);
          navigate("/");
        }
        localStorage.setItem("token", dataAPI.accessToken);
        localStorage.setItem("email", dataAPI.email);
        localStorage.setItem("userId", dataAPI.userId);
      })
      .catch(() => {
        alert("Ban dang nhap that bai");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white relative">
      
      <div className="w-[765px] h-[427px] my-6 mx-auto border rounded-lg shadow-md shadow-all">
        <form
          action=""
          ref={formLoginRef}
          className="w-full h-full flex flex-col"
        >
          <div className="flex flex-col justify-between p-5 items-center">
            <h3 className="text-3xl font-semibold text-blue-10 no-underline">
              LOGIN SYSTEM
            </h3>
          </div>
          <div className="p-5 flex-auto items-center flex flex-col justify-between">
            <div className="mb-4 flex flex-row text-black w-[480px] items-center">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded ml-[44px]"
                required
              />
            </div>
            <div className="mb-4 mt-[-40px] flex flex-row text-black w-[480px] items-center">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength={8}
                className="w-full p-2 border border-gray-300 rounded ml-4"
                required
              />
            </div>
            <div className="mb-4 flex flex-row w-[385px] mt-[-80px] justify-between ml-[90px]">
              <div>
                <button
                  type="submit"
                  value="LOGIN"
                  className=" h-12 flex-shrink-0 rounded-lg bg-blue-10 mt-10 cursor-pointer text-white w-[171px]"
                  onClick={handleLogin}
                >
                  LOGIN
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
              <Link to="/register">
                <button class="text-blue-500 cursor-pointer ">
                  You don’t have any account?
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
