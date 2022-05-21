import React from "react";
//
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
//
// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const HandleInformation = yup
  .object()
  .shape({
    count: yup.string().required(),
    email: yup.string().required(),
  })
  .required();
//
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // width: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const HeaderTop = () => {
  const navigate = useNavigate();
  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(HandleInformation),
  });
  const onSubmit = (data) => {
    navigate("/success");
  };

  return (
    <div className="lg:h-[32px] bg-[#D52220] flex items-center justify-center text-[8px]">
      <div className="lg:w-[1356px] lg:h-[100%] flex items-center text-[#FFFFFF] lg:text-[12px] w-[300px]">
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[146px] h-[172px] bg-[#FFFFFF] p-2">
                <img
                  src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png"
                  alt="qr-code"
                  className="w-[130px] h-[130px]"
                />
                <span className="w-[112px] h-[16px] text-[#3F4B53] text-[12px]">
                  {" "}
                  Quét để tải ứng dụng{" "}
                </span>
              </div>
            </React.Fragment>
          }
        >
          <span className="pr-6 cursor-pointer"> Tải ứng dụng </span>
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[177px] h-[84px] bg-[#FFFFFF] p-2">
                <div className="w-[161px] h-[34px] p-2 absolute -translate-y-2">
                  <span className="w-[104px] h-[18px] text-[#3F4B53] text-[14px]">
                    {" "}
                    Trung tâm hỗ trợ{" "}
                  </span>
                </div>
                <div className="w-[161px] h-[34px] p-2 absolute translate-y-4">
                  <span className="w-[104px] h-[18px] text-[#3F4B53] text-[14px]">
                    {" "}
                    Trả hàng hoàn tiền{" "}
                  </span>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <span className="pr-6 cursor-pointer"> Chăm sóc khách hàng </span>
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <form
                className="w-[236px] h-[140px] bg-[#FFFFFF] p-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-[220px] h-[38px] bg-[#FFFFFF]">
                  <input
                    type="text"
                    placeholder="Nhập mã đơn hàng"
                    className="w-[216px] h-[34px] bg-[#FFFFFF] p-2 border-b border-b-green-600"
                    {...register("count")}
                  />
                  <p>{errors.count?.message}</p>
                </div>
                <div className="w-[220px] h-[38px] bg-[#FFFFFF]">
                  <input
                    type="text"
                    placeholder="Email / Số điện thoại"
                    className="w-[216px] h-[34px] bg-[#FFFFFF] p-2"
                    {...register("email")}
                  />
                  <p className="translate-y-6 translate-x-2 text-gray-600">
                    {errors.email?.message}
                  </p>
                </div>
                <button className="w-[220px] h-[32px] bg-[#EE2624] p-1 rounded-md flex items-center justify-center">
                  <span
                    className="w-[53px] h-[18px] text-[#FFFFFF] text-[14px]"
                    type="submit"
                  >
                    {" "}
                    Kiểm tra{" "}
                  </span>
                </button>
              </form>
            </React.Fragment>
          }
        >
          <span className="cursor-pointer"> Kiểm tra đơn hàng </span>
        </HtmlTooltip>
      </div>
    </div>
  );
};

export default HeaderTop;
