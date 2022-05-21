import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
// Modal
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="absolute top-[200px] h-[363px] w-full ml-[300px]">
        <div className="w-[1308px] h-[100%] flex items-center justify-center">
          <div>
            <img
              src="https://media3.scdn.vn/img4/2021/02_02/JikA6AqzCC55LcNmcHjZ.png"
              alt="giỏ hàng trống"
              className="w-[375px] h-[210px] object-cover"
            />
            <h2 className="w-[204px] h-[22px] text-[#0F1E29] text-[16px] mt-3 ml-14 font-medium">
              {" "}
              Giỏ hàng cảm thấy trống trải{" "}
            </h2>
            <h3 className="w-[384px] h-[22px] text-[#6F787E] text-[16px] mt-2 font-normal">
              {" "}
              Ai đó ơi, mua sắm để nhận khuyến mãi từ Sendo ngay!{" "}
            </h3>
            <button className="flex items-center justify-center w-[206px] h-[40px] bg-[#EE2624] p-2 mt-4 ml-14">
              <span className="w-[92px] h-[18px] text-[#FFFFFF] text-[14px]">
                <Link to="/">Mua sắm ngay</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="mt-[100px] ml-[331px] relative w-[1300px] h-[155px] border border-white bg-white rounded-lg">
          <div className="">
            <div className="flex items-center absolute top-7 left-[80px]">
              {/* <div className="absolute left-[100px]"> */}
              <img
                src={product.image}
                alt={product.name}
                height="100px"
                width="100px"
              />
              {/* </div> */}
              <div className="absolute left-[250px]">
                <h3 className="text-[18px] text-gray-500 w-[350px]">
                  {product.name}
                </h3>
                <button
                  className="text-black absolute mt-1"
                  onClick={() => handleDel(product)}
                >
                  <box-icon name="message-square-minus"></box-icon>
                </button>
                <span className="ml-7 text-[18px] text-orange-400 font-bold">
                  {product.qty} *{" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                  =
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.qty * product.price01)}
                </span>
                <button
                  className="text-black ml-[20px] absolute mt-1"
                  onClick={() => handleAdd(product)}
                >
                  <box-icon name="message-rounded-add"></box-icon>
                </button>
                <div className="absolute flex items-center left-[550px] top-[10px] list-none">
                  <li
                    className="w-[10px] h-[12px] text-blue-500"
                    onClick={() => handleDel(product)}
                  >
                    {" "}
                    <Link to="/cart">
                      {" "}
                      <box-icon name="trash"></box-icon>
                    </Link>{" "}
                  </li>
                  <li
                    className="w-[36px] h-[20px] text-[#939CA3] text-[12px] ml-[35px] mt-[20px] absolute cursor-pointer font-bold"
                    onClick={() => handleDel(product)}
                  >
                    <Link to="/cart"> Xóa</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="absolute top-[600px] left-[900px] w-[200px] h-[40px] bg-green-600 text-white flex items-center justify-center cursor-pointer text-[15px]">
            <button>
              {" "}
              <Link to="/checkout"> Tiến hành đặt hàng</Link>{" "}
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        {state.length === 0 && emptyCart()}
        <div>
          <Header />
          {state.length !== 0 && state.map(cartItems)}
        </div>
        {state.length !== 0 && buttons()}
      </div>
    </>
  );
};

export default Cart;
