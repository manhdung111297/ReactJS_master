import React, { useRef } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer";
import axios from "axios";

export default function PostVideo() {
  const formVideo = useRef("");

  //Call Video
  const postVideo = (event) => {
    event.preventDefault();
    const formPost = new FormData(formVideo.current);
    console.log(formPost.get("url"), "baonhiue");
    axios
      .post(
        "http://localhost:5001/api/videos",
        {
          url: formPost.get("url"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Đã post thành công");
      })
      .catch((error) => {
        console.error("Error posting video:", error);
      });
  };
  return (
    <div className="max-h-screen  bg-white">
      <div className="h-[20vh]">
        <Navbar />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-[765px] h-[427px] my-6 mx-auto border rounded-lg shadow-md shadow-all">
          <form
            action=""
            ref={formVideo}
            className="w-full h-full flex flex-col"
          >
            <div className="flex flex-col justify-between p-5  items-center">
              <h3 className="text-md font-semibold  no-underline">
                Share Youtube video by URL
              </h3>
            </div>
            <div className="p-5  items-center flex flex-col justify-between">
              <div className=" flex flex-row text-black w-[433px] items-center mb-[20px]">
                <label htmlFor="URL" className="font-weight-bold">
                  URL
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  className="w-full p-2 border border-gray-300 rounded ml-[12px]"
                />
              </div>

              <div className="mb-4 flex flex-row  justify-between ">
                <div>
                  <button
                    type="submit"
                    className=" h-12 flex-shrink-0 rounded-lg bg-blue-10 mt-10 cursor-pointer text-white w-[433px]"
                    onClick={postVideo}
                  >
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#7648F8] h-[120px] bottom-0 z-50 fixed w-full">
        <Footer />
      </div>
    </div>
  );
}
