import React from "react";

const ImageShow = () => {
  return (
    <div className="h-[78px] flex items-center justify-center opacity-0 lg:opacity-100">
      <div className="w-[1356px] h-[100%] flex items-center mt-[20px]">
        <img
          src="https://media3.scdn.vn/img4/2022/05_07/54bVTCIx01aBSU2CRsCQ.png"
          alt=""
          className="w-[654px] h-[78px] object-cover"
        />
        <img
          src="https://media3.scdn.vn/img4/2022/05_09/drxaBnHGDb6lZn6S8JEz.png"
          alt=""
          className="w-[654px] h-[78px] object-cover"
        />
        <div className="absolute mt-2 -translate-y-4 -translate-x-3">
          <box-icon name="window-close"></box-icon>
        </div>
      </div>
    </div>
  );
};

export default ImageShow;
