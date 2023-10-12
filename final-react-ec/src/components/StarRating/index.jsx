import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    handleGetRating();
  }, []);

  useEffect(() => {
    if (rating !== 0) {
      handlePostRating();
    }
  }, [rating]);
  const handleGetRating = async () => {
    await axios
      .get(
        "http://localhost:5001/api/rating?videoId=fe134d76-6934-4d13-a087-d261721bfbd8",
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        setRating(res.data.data.star);
      });
  };
  const handleClickRating = (ratingValue) => {
    setRating(ratingValue);
  };
  const handlePostRating = async () => {
    const data = {
      videoId: "fe134d76-6934-4d13-a087-d261721bfbd8",
      star: rating,
    };
    await axios
      .post("http://localhost:5001/api/rating", data, { headers })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="flex justify-center align-middle">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={rating}
              onClick={() => {
                handleClickRating(ratingValue);
              }}
            />
            <FaStar
              className="transition  cursor-pointer"
              color={ratingValue <= (rating || hover) ? "gold" : "gray"}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => setHover(null)}
              size={50}
            />
          </label>
        );
      })}
    </div>
  );
}
