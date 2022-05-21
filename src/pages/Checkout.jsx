import React from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  var total = 0;
  const itemList = (item) => {
    total = total + item.price01 * item.qty;
    return (
      <div>
        <table>
          <thead>
            <tr className="">
              <th> Sản Phẩm </th>
              <th> Tên </th>
              <th> Giá </th>
              <th> Số Lượng </th>
              <th className="ml-20 absolute"> Chọn </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[120px] h-[80px] object-contain"
                />
              </td>
              <td className="text-orange-600 font-medium w-[220px]">
                {" "}
                <h6>{item.name}</h6>
              </td>
              <td>
                <span>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price01 * item.qty)}{" "}
                </span>
              </td>
              <td className="w-[130px] ml-7 absolute mt-7">{item.qty}</td>
              <td className="absolute mt-7 ml-[160px]"> Xóa </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const CartSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter your username")
      .max(15, "Must be 15 characters or less"),
    mobilephone: yup
      .string()
      .required("Please enter your mobilephone")
      .max(20, "Must be 20 characters or less"),
    email: yup.string().required("Please enter your email"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CartSchema),
  });
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/success");
  };
  return (
    <>
      <Header />
      <div className="w-[1300px] h-[800px] border border-white bg-white ml-[323px] mt-[150px] shadow-sm">
        <form className="list-none relative" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="w-[776px] h-[52px] text-[#212529] text-[24px] p-2 font-bold mt-[10px] ml-[20px]">
            Có {state.length} sản phẩm trong giỏ hàng
          </h2>
          <div className="mt-[30px] ml-6">
            {state.length !== 0 && state.map(itemList)}
          </div>
          <div className="top-[400px] flex items-center absolute left-[900px]">
            <div>
              <h4 className="w-[444px] h-[24px] text-[#32373D] text-[16px] font-semibold">
                {" "}
                Mã giảm giá{" "}
              </h4>
              <div className="mt-[15px] flex items-center">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="w-[200px] h-[30px] bg-[#FFFFFF] p-1 outline-none border border-orange-400 text-[19px]"
                />
                <button className="w-[77px] h-[28px] text-[#FFFFFF] bg-[#CB1C22] text-[14px] p-2 ml-[10px] flex items-center justify-center">
                  {" "}
                  Áp dụng{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-[10px] absolute top-[100px] left-[20px] font-bold">
                <li className="w-[91px] h-[20px] text-[#444B52] text-[14px]">
                  {" "}
                  Tổng tiền :{" "}
                </li>
                <li className="w-[89px] h-[20px] text-[#444B52] text-[14px]">
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(total)}
                </li>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[40px] absolute top-[100px] ml-[900px]">
            <div className="flex items-center">
              <input
                type="radio"
                name="one"
                id=""
                className="w-[16px] h-[16px] bg-[#FFFFFF]"
              />
              <li className="w-[25px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                {" "}
                Anh{" "}
              </li>
            </div>
            <div className="flex items-center ml-[35px]">
              <input
                type="radio"
                name="one"
                id=""
                className="w-[16px] h-[16px] bg-[#FFFFFF]"
              />
              <li className="w-[25px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                {" "}
                Chị{" "}
              </li>
            </div>
          </div>
          <div className="flex items-center absolute top-[200px] ml-[800px]">
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-[237px] h-[34px] bg-[#FFFFFF] p-1 outline-none border border-orange-300 text-[19px]"
              {...register("username")}
            />
            {errors.username && (
              <p className="absolute top-[50px] text-[16px]">
                {errors.username.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-[237px] h-[34px] bg-[#FFFFFF] p-1 ml-[10px] outline-none border border-orange-300 text-[19px]"
              {...register("mobilephone")}
            />
            {errors.mobilephone && (
              <p className="absolute top-[50px] ml-[250px] w-[400px] text-[16px]">
                {errors.mobilephone.message}
              </p>
            )}
          </div>
          <div className=" top-[290px] absolute ml-[800px]">
            <input
              type="text"
              placeholder="Nhập email (Không bắt buộc)"
              className="w-[490px] h-[34px] bg-[#FFFFFF] p-1 outline-none border border-orange-300 text-[19px]"
              {...register("email")}
            />
            {errors.email && (
              <p className="absolute top-[50px] text-[16px]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="top-[550px] left-[690px] absolute ">
            <button
              className="w-[259px] h-[54px] text-[#FFFFFF] text-[20px] bg-[#CB1C22] p-4 absolute left-[220px] flex items-center justify-center"
              type="submit"
            >
              HOÀN TẤT ĐẶT HÀNG
            </button>
            <p className="w-[776px] h-[20px] text-[#939CA3] text-[14px] absolute top-[98px] left-[100px] font-semibold">
              {" "}
              Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của Sendo
              chúng tôi{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
