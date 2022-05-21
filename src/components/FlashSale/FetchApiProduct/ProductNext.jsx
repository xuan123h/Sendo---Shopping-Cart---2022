import React, { useState, useEffect } from "react";

const ProductNext = () => {
  return (
    <div className="lg:h-[206px] flex items-center justify-center opacity-0 lg:opacity-100">
      <div className="lg:w-[1308px] lg:h-[100%] bg-green-600 mt-20 w-[375px] h-[100px]">
        {/* Top */}
        <h2 className="text-white lg:text-[30px] lg:ml-[580px] lg:translate-y-14 text-[20px] ml-[150px] translate-y-6">
          {" "}
          Xả hàng{" "}
        </h2>
        {/* Bottom */}
        <div className="grid lg:grid-cols-3 lg:ml-16 grid-cols-1 ml-6">
          <img
            src="https://media3.scdn.vn/img4/2022/05_17/RJkVtSo4QngldadPAAHr.gif"
            alt=""
            className="w-[300px] h-[800px] object-contain"
          />
          <img
            src="https://media3.scdn.vn/img4/2022/05_09/ldhyPbeFHEZWfv6UOUxX.gif"
            alt=""
            className="w-[300px] h-[800px] object-contain"
          />
          <img
            src="https://media3.scdn.vn/img4/2022/05_18/FxLJGrdzvzr0wTahR9pw.jpg"
            alt=""
            className="w-[300px] h-[800px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductNext;
