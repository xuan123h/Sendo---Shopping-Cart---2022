import React from "react";

const Contact = () => {
  return (
    <div className="lg:pt-6 lg:pb-6 lg:h-[249px] flex items-center justify-center bg-[#27343E] lg:mt-16 h-[300px]">
      <div className="lg:w-[1356px] lg:h-[201px] flex items-center w-[375px] lg:ml-0 ml-[20px] lg:mt-0 mt-[-50px]">
        <div className="lg:w-[545px] w-[200px] h-[201px] text-[#FFFFFF] text-[12px]">
          <span className="h-[16px] lg:mt-[12px] font-medium">
            Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
          </span>
          <br />
          <span className="h-[16px] mt-[16px] absolute">
            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 6,
            ngày 23/05/2016.
          </span>
          <br />
          <span className="h-[16px] mt-[32px] absolute">
            Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
          </span>
          <br />
          <span className="h-[16px] mt-[48px] absolute lg:w-[500px] w-[300px]">
            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
            Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
            Thành phố Hồ Chí Minh, Việt Nam.
          </span>
          <br />
          <div className="h-[16px] lg:mt-[68px] flex items-center absolute mt-[110px]">
            <span>Email : </span>
            <span className="ml-1"> lienhe@sendo.vn</span>
          </div>
          <br />
          <div className="flex items-center absolute lg:mt-[80px] mt-[120px]">
            {/* 2 hình ảnh */}
            <img
              src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
              alt=""
              className="w-[108px] h-[33px] object-cover"
            />
            <img
              src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
              alt=""
              className="w-[108px] h-[33px] object-cover ml-2"
            />
          </div>
        </div>
        <div className="absolute right-[500px] opacity-0 lg:opacity-100">
          <span className="w-[654px] h-[16px] text-[#FFFFFF] text-[12px]">
            Đăng ký nhận bản tin ưu đãi khủng từ Sendo
          </span>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Email của bạn là"
              className="w-[327px] h-[34px] bg-[#FFFFFF] p-2 text-[14px] rounded-sm"
            />
            <button className="w-[125px] h-[34px] text-[#FFFFFF] text-[14px] bg-[#EE2624] pt-[8px] pb-2 pl-4 pr-4 rounded-sm ml-1">
              <span className="w-[100px] h-[32px] text-[#FFFFFF] text-[14px] ">
                {" "}
                Đăng ký{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
