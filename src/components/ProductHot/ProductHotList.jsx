import React, { Fragment } from "react";
import ProductHot from "./ProductHot";

const ProductHotList = ({ productHotList }) => {
  return (
    <ul className="lg:w-[1356px] lg:h-[200px] pt-2 pb-2 flex items-center w-[375px] flex-wrap">
      {productHotList.map((productHot) => (
        <li key={productHot.id} className="lg:pl-12 pl-[100px] lg:mt-0 mt-4">
          <ProductHot productHot={productHot} />
        </li>
      ))}
    </ul>
  );
};

export default ProductHotList;
