import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/ProductHot/Footer";

const Success = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[400px] flex items-center justify-center ml-[300px] mt-[200px]">
        <div className="w-[1308px] h-[100%]">
          <img
            src="https://anhdep.tv/attachments/cb257d19d429191a6b63c7b314c69230-jpeg.22342/"
            alt=""
          />
          <h2 className="mt-4 text-green-600">
            {" "}
            Cảm ơn quý khách đã đặt đơn hàng #18379344 thành công.{" "}
          </h2>
          <h3 className="mt-1 text-gray-500 ml-2">
            {" "}
            Chúng tôi sẽ giao hàng cho bạn trong thời gian sớm nhất{" "}
          </h3>
          <button className="w-[200px] h-[50px] bg-purple-600 flex items-center justify-center rounded-md ml-[200px] mt-3">
            <span className="text-white">
              {" "}
              <Link to="/">Mua hàng tiếp</Link>{" "}
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
