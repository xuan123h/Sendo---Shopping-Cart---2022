import React, { Fragment } from "react";

const ProductHot = ({ productHot }) => {
  return (
    <Fragment>
      <div className="">
        <img
          src={productHot.image}
          alt={productHot.title}
          className="w-[130px] object-cover ml-2 cursor-pointer"
        />
        <span className="w-[104px] h-[16px] text-[#3F4B53] text-xs ml-3 font-semibold cursor-pointer">
          {" "}
          {productHot.title}{" "}
        </span>
        <p className="w-[250px] h-[32px] text-[#6F787E] text-xs mt-1 font-medium cursor-pointer">
          {" "}
          {productHot.description}{" "}
        </p>
      </div>
    </Fragment>
  );
};

export default ProductHot;
