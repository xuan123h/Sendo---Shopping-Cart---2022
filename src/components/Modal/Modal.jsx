import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  return (
    <div>
      <div
        className={`w-[94px] h-[40px] bg-[#3F81FE] flex items-center absolute right-20 rounded-sm opacity-0 ${
          showModal ? "lg:opacity-0 lg:invisible" : "lg:opacity-100 lg:visible"
        }`}
        onClick={handleModal}
      >
        <button className="ml-1 mt-2">
          <box-icon name="message-dots" color="#FFFFFF"></box-icon>
        </button>
        <span className="w-[29px] h-[18px] text-[#FFFFFF] text-sm flex items-center justify-center ml-3 cursor-pointer">
          {" "}
          Chat{" "}
        </span>
      </div>
      <div
        className={`w-[690px] h-[506px] ml-[1150px] list-none bg-[rgba(0,0,0,0)] ${
          showModal ? "show" : "hide"
        }`}
      >
        <div
          className={`flex items-center justify-center w-[690px] h-[36px] bg-[#4A90E2] ${
            showModal ? "mt-[50px]" : "mt-[200px]"
          }`}
        >
          <div className="flex items-center absolute -translate-x-40">
            <li className="w-[24px] h-[24px]">
              <box-icon name="chat" color="#FFFFFF"></box-icon>
            </li>
            <span className="w-[153px] h-[20px] text-[#FFFFFF] text-[16px] ml-2">
              {" "}
              Chat cùng shop{" "}
            </span>
          </div>
          <li
            className="w-[24px] h-[24px] translate-x-52 z-100"
            onClick={() => setShowModal(false)}
          >
            <box-icon name="x" color="#FFFFFF"></box-icon>
          </li>
        </div>
        <div className="flex items-center">
          {/* Left */}
          <div className="w-[259px] h-[529px] bg-[#F1F1F1]">
            <div className="flex items-center">
              <div className="flex items-center mt-1 ml-2">
                {/* <li className="w-[20px] h-[20px]">
                  {" "}
                  <box-icon name="checkbox"></box-icon>{" "}
                </li> */}
                <input
                  type="checkbox"
                  className="w-[12px] h-[12px] translate-y-1"
                />
                <span className="w-[181px] h-[17px] text-[#000000] text-[14px] translate-y-1 ml-1">
                  {" "}
                  Chưa đọc (0){" "}
                </span>
              </div>
              <li className="w-[24px] h-[24px] translate-y-1">
                {" "}
                <box-icon name="search"></box-icon>{" "}
              </li>
            </div>
            <div className="flex items-center ml-2 mt-3">
              <img
                src="https://media3.scdn.vn/img3/2019/3_13/NFY7Sr.png"
                alt=""
                className="w-[32px] h-[32px] object-cover rounded-xl"
              />
              <div className="ml-1">
                <span className="w-[199px] h-[20px] text-[#E5101D] text-[14px]">
                  {" "}
                  Trợ lý ảo Sendo{" "}
                </span>
                <p className="w-[211px] h-[16px] text-[#646464] text-[12px] -translate-y-1">
                  {" "}
                  Bạn cần hỗ trợ gì không?{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-[429px] h-[471px] bg-[#FFFFFF]">
            <li className="w-[500px] flex items-center justify-center mt-20">
              {" "}
              <li className="w-[96px] h-[96px]">
                <box-icon name="chat"></box-icon>
              </li>{" "}
            </li>
            <div className="w-[500px]">
              <div className="flex items-center justify-center">
                <span className="w-[64px] h-[18px] text-[#828282] text-[14px]">
                  {" "}
                  Bấm vào{" "}
                </span>
                <li>
                  {" "}
                  <li className="w-[24px] h-[24px]">
                    <box-icon name="chat"></box-icon>
                  </li>{" "}
                </li>
                <span className="w-[130px] h-[18px] text-[#E5101D] text-[14px] ml-1">
                  {" "}
                  Chat ngay ở trang{" "}
                </span>
              </div>
              <p className="w-[312px] h-[18px] text-[#828282] text-[14px] ml-[130px] mt-1">
                {" "}
                chi tiết sản phẩm để chat với shop{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
