import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [apiVideos, setApiVideos] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    setShowUser(false);
  };

  // Get Token when login
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getData = () => {
    axios
      .get("http://localhost:5001/api/videos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          data: "application/json",
        },
        params: {
          limit: 10,
          currentPage: page,
          sortBy: "publishedAt",
        },
      })
      .then((response) => {
        setApiVideos([...apiVideos, ...response.data.data.body]);
        setTotalItems(response.data.data.totalItems);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getData(), []);

  const fetchProducts = async () => {
    if (apiVideos.length >= totalItems) {
      setHasMore(false);
      return;
    }
    getData();
  };

  // Truyền dữ liệu đi
  const contextValue = {
    apiVideos,
    showUser,
    totalItems,
    hasMore,
    fetchProducts,
    setShowUser,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
