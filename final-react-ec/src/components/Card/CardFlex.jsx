import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CardFlex({ video }) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <div className="flex gap-3 mb-4 ju">
      <div className="relative min-w-fit">
        <Link to={`/watch/${video.vid}`}>
          <img
            src={video.thumbnail}
            className="w-[491px] h-[227px] border rounded-[10px]"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="relative"></div>
      <div className="flex gap-2">
        <div>
          <div className="w-[726px]">
            <h1 className="text-justify font-inter text-20 font-semibold text-[#0E0E0E] ">
              {video.title}
            </h1>
          </div>
          <div className="w-[113px] h-[21px] border rounded-[4px] bg-[#ECEBEB] mt-2">
            <h1 className="text-[12px] font-normal leading-normal text-[#0E0E0E] text-center">
              DESCRIPTION
            </h1>
          </div>
          <div className="w-[726px] mt-2">
            <p
              className={`text-[#000] font-normal leading-normal ${
                showMore ? "" : "truncate"
              }`}
            >
              {video.description}
            </p>
          </div>
          <button
            onClick={toggleShowMore}
            className={`text-[12px] text-[#7648F8] cursor-pointer ${
              video.description.length > 100 ? "" : "hidden"
            }`}
          >
            {showMore ? "Less" : "More"}
          </button>
          <div className="flex">
            <div className="w-[113px] h-[21px] border rounded-[4px] bg-[#ECEBEB] mt-2">
              <h1 className="text-[12px] font-normal leading-normal text-[#0E0E0E] text-center">
                PUBLISHED AT
              </h1>
            </div>
            <h1 className="text-[#000] text-[16px] font-normal leading-normal ml-6 mt-2">
              {formatDate(video.createdAt)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
