import React from "react";

const Information = () => {
  return (
    <div className="lg:h-[212px] pt-6 pb-6 flex items-center justify-center">
      <div className="lg:w-[1356px] lg:h-[164px]  flex items-center text-xs opacity-0 lg:opacity-100">
        <div className="text-[#3F4B53] ml-2">
          <h2 className="w-[327px] h-[16px] text-xs font-medium">
            {" "}
            VỀ CHÚNG TÔI{" "}
          </h2>
          <ul className="w-[200px] h-[16px] mt-2 font-normal">
            <li> Giới thiệu Sendo.vn </li>
            <li> Giới thiệu SenMall </li>
            <li> Quy chế hoạt động </li>
          </ul>
        </div>
        <div className="ml-[40px]">
          <h2 className="w-[327px] h-[16px] text-[#3F4B53] text-xs font-medium">
            {" "}
            DÀNH CHO NGƯỜI MUA{" "}
          </h2>
          <ul className="w-[200px] h-[16px] mt-2 font-normal">
            <li> Giải quyết khiếu nại </li>
            <li> Hướng dẫn mua hàng </li>
            <li> Chính sách đổi trả </li>
            <li> Chăm sóc khách hàng </li>
            <li> Nạp tiền điện thoại </li>
          </ul>
        </div>
        <div className="text-[#3F4B53] ml-[40px]">
          <h2 className="w-[327px] h-[16px] text-xs font-medium">
            {" "}
            DÀNH CHO NGƯỜI BÁN{" "}
          </h2>
          <ul className="w-[200px] h-[16px] mt-2 font-normal">
            <li> Quy định đối với người bán </li>
            <li> Chính sách bán hàng </li>
            <li> Hệ thống tiêu chí kiểm duyệt </li>
            <li> Mở shop trên Sendo </li>
          </ul>
        </div>
        <div className="text-[#3F4B53] ml-[40px] translate-y-1">
          <h2 className="w-[327px] h-[16px] text-xs font-medium">
            {" "}
            TẢI ỨNG DỤNG SENDO{" "}
          </h2>
          <p className="w-[200px] h-[32px] mt-2 font-normal">
            {" "}
            Mang thế giới mua sắm của Sendo trong tầm tay bạn{" "}
          </p>
          <div className="flex items-center flex-wrap absolute w-[300px] mt-9">
            {/* 3 hình ảnh  */}
            <img
              src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
              alt=""
              className="w-[120px] h-[40px] object-cover"
            />
            <img
              src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
              alt=""
              className="w-[120px] h-[40px] object-cover ml-1"
            />
            <img
              src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
              alt=""
              className="w-[120px] h-[40px] object-cover mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
