import React from "react";
import SendoProductFather from "./FetchApiProduct/SendoProductFather";
import Time from "./FetchApiProduct/Time";

const FlashSale = () => {
  return (
    <div className="lg:h-[2040px] flex items-center justify-center">
      <div className="lg:w-[1308px] h-[100%] bg-[#FFFFFF] mt-[60px] w-[375px]">
        <div className="flex items-center lg:ml-[10px] lg:mt-4 mt-4 ml-2">
          <div>
            <img
              src="https://web-static.scdn.vn/sendo-buyers-flash-sale-widget/1880e204/w3front/static/images/6d0b98fffda3d7d5.svg"
              alt=""
              className="w-[119px] h-[28px] object-cover"
            />
          </div>
          <div className="ml-2 mt-[-5px] w-[200px] border border-green-500 bg-gray-400 rounded-md">
            <Time />
          </div>
        </div>
        <a
          href=""
          className="w-[67px] h-[18px] text-[#0F62FE] text-[14px] absolute top-[680px] right-[320px] opacity-0 lg:opacity-100"
        >
          {" "}
          Xem tất cả{" "}
        </a>
        <div>
          <SendoProductFather />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
