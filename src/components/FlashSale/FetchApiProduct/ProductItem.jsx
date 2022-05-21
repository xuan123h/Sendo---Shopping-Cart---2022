import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  return (
    <div>
      <div className="w-[30px] h-[30px] flex items-center">
        <img
          src="https://thietbiyte24h.com/uploads/news/2081565972_icon-3.png"
          alt=""
          className="w-[100%] h-[100%] object-contain ml-1 hide-image-one"
        />
        <img
          src="https://kiemsoatvantay.vn/wp-content/uploads/2017/07/3-cach-de-cung-cap-mien-phi-van-chuyen-hieu-qua-hon-1.png"
          alt=""
          className="w-[100%] h-[100%] object-contain ml-20 hide-image-two"
        />
      </div>
      <Link to={`/product/${productItem.id}`}>
        <img
          src={productItem.image}
          alt={productItem.name}
          className="w-[204px] h-[204px] object-cover backGroundNone"
        />
      </Link>
      <span className="w-[188px] h-[36px] text-[#3F4B53] text-[14px] font-medium text-center flex items-center mt-5">
        <Link to={`/product/${productItem.id}`}> {productItem.name}</Link>
      </span>
      <br />
      <span className="w-[188px] h-[22px] text-[#0F1E29] text-[16px] font-bold flex ml-10">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "VND",
        }).format(productItem.price01)}
      </span>
      <div className="mt-1 ml-2">
        <span className="w-[46px] h-[12px] text-[#B7BBBF] text-[11px] line-through">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(productItem.price02)}
        </span>
        <span className="w-[23.5px] h-[12px] text-[#EE2624] text-[11px] ml-2">
          {" "}
          - {productItem.promotion}{" "}
        </span>
      </div>
      <div className="text-[#6F787E] text-[14px] ml-2 mt-3 flex items-center">
        <span className="w-[63px] h-[18px] font-semibold">
          {" "}
          {productItem.country}{" "}
        </span>
        <span className="w-[100px] h-[18px] ml-5 flex items-center mt-1 font-semibold">
          {" "}
          Đã bán :{" "}
          <p className="text-red-500 ml-1 font-bold">
            {productItem.count}{" "}
          </p>{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
