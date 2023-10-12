import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "../Header/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card/CardFlex";
import Footer from "../Footer";
import CardGrid from "../Card/CardGrid";

export default function Home() {
  //call useContext
  const { apiVideos, fetchProducts, hasMore } = useContext(AppContext);

  //handle show cardGrid
  const [cardGrid, setCardGrid] = useState(false);

  const handlCardGrid = () => {
    setCardGrid(true);
  };

  const handlCardFlex = () => {
    setCardGrid(false);
  };

  return (
    <div className="max-h-screen w-full  bg-white">
      <div className="h-[17vh]">
        <Navbar />
      </div>
      <div className="flex flex-row justify-end mr-[144px] mb-5">
        <span onClick={handlCardGrid}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="5"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="4"
              y="14"
              width="16"
              height="5"
              rx="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="ml-5" onClick={handlCardFlex}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L5 16"
              stroke="#33363F"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M5.20801 2.31202L8.17083 6.75624C8.52526 7.28788 8.14414 8 7.50519 8L2.49481 8C1.85586 8 1.47474 7.28788 1.82917 6.75624L4.79199 2.31202C4.89094 2.16359 5.10906 2.16359 5.20801 2.31202Z"
              fill="#33363F"
            />
            <path
              d="M5.20801 21.688L8.17083 17.2438C8.52526 16.7121 8.14414 16 7.50519 16L2.49481 16C1.85586 16 1.47474 16.7121 1.82917 17.2438L4.79199 21.688C4.89094 21.8364 5.10906 21.8364 5.20801 21.688Z"
              fill="#33363F"
            />
            <path
              d="M11 7H19"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M11 12H19"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M11 17H19"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
      <InfiniteScroll
        dataLength={apiVideos.length} // Độ dài hiện tại của danh sách sản phẩm
        next={fetchProducts} // Hàm được gọi khi scroll xuống cuối cùng
        hasMore={hasMore} // Tiếp tục load khi còn sản phẩm
        loader={<h4>Loading...</h4>} // Hiển thị thông báo loading
        endMessage={<p>No more videos</p>} // Thông báo hết sản phẩm
      >
        {cardGrid ? (
          <div className="flex flex-col justify-center items-center gap-8 ">
            {apiVideos.map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 p-8 ">
            {apiVideos.map((video) => (
              <CardGrid key={video.id} video={video} />
            ))}
          </div>
        )}
      </InfiniteScroll>
      <div className="bg-[#7648F8] h-[120px] bottom-0 z-50 fixed w-full">
        <Footer />
      </div>
    </div>
  );
}
