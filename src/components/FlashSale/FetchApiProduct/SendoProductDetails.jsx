import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addCart } from "../../../redux/action";

// Swiper
// import Swiper from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

//
import Header from "../../Header/Header";
import Footer from "../../ProductHot/Footer";

//

// React toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowTopScrollWeb from "../../Modal/ArrowTopScrollWeb";
import Modal from "../../Modal/Modal";
//

// React Toastify
const notify = () =>
  toast("🦄 Bạn đã thêm sản phẩm vào giỏ hàng thành công", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const SendoProductDetails = () => {
  // redux
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  //
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://6278f089d00bded55ae17142.mockapi.io/sendo/product/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  // Button - Cart
  const [quantity, setQuantity] = useState(1);
  const removeToCart = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  const addToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  //
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // Hàm xử lý thời gian Flash - Slase
    let time = new Date().toLocaleTimeString();
    const [timeNext, setTimeNext] = useState(time);
    const updateTime = () => {
      let time = new Date().toLocaleTimeString();
      setTimeNext(time);
    };
    setInterval(updateTime, 1000);
    //
    return (
      <>
        <Header />
        {/* <ProductDetail product={product} /> */}
        <div className="lg:h-[100vh] w-full flex items-center justify-center list-none">
          <div className="lg:w-[1356px] h-[100%] w-[375px]">
            <div className="h-[32px] lg:mt-1 lg:ml-0 ml-6 mt-1">
              <span className="text-[#0F62FE] text-[14px] h-[18px]">
                {" "}
                Sendo.vn / Các loại thực phẩm / {product.category}{" "}
              </span>
            </div>
            <div className="lg:flex lg:items-center justify-between mt-[20px] h-[649px] bg-[#FFFFFF]">
              {/* Left */}
              <div className="lg:w-[500px] lg:h-[500px] w-[200px]">
                {/* Slider con */}
                <div className="lg:mt-[-40px] lg:ml-7 translate-x-12 translate-y-2 lg:translate-x-0 lg:translate-y-0">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src={product.image} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image04} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image05} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image06} alt={product.name} />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={product.image} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image04} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image05} alt={product.name} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.image06} alt={product.name} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* Right */}
              <div className="lg:mr-10 lg:mt-0 mt-6">
                <div className="lg:w-[715px] h-[40px] backgroundUrl flex items-center w-[375px]">
                  <div>
                    <img
                      src="https://media3.scdn.vn/img4/2020/06_18/jaGsAfx1dzgHf82AyWSI.png"
                      alt=""
                      className="w-[138px] h-[40px]"
                    />
                  </div>
                  <div className="flex items-center absolute lg:ml-[500px] ml-[140px]">
                    <span className="w-[100px] h-[18px] text-[#FFFFFF] lg:text-[14px] font-bold text-[12px] translate-x-2">
                      {" "}
                      Kết thúc trong{" "}
                    </span>
                    <div className="w-[98px] h-[24px] bg-[#27343F] p-1 ml-1 rounded-md">
                      <span className="w-[81px] h-[16px] text-[#FFFFFF] text-[12px] flex items-center justify-center font-bold">
                        {timeNext}
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="lg:w-[700px] h-[22px] text-[#0F1E29] lg:text-[20px] font-medium mt-2 text-[14px]">
                  {" "}
                  {product.name}{" "}
                </h1>
                <span className="w-[92px] h-[32px] text-[#EE2624] text-[24px] mt-6 absolute">
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                </span>
                <div className="flex items-center mt-12 justify-between">
                  <span className="lg:w-[51px] h-[18px] text-[#B7BBBF] text-[14px] lining-nums:translate-x-0 translate-x-2 line-through">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price02)}
                  </span>
                  <span className="lg:w-[63px] h-[18px] text-[#EE2624] text-[14px] lg:translate-x-0 -translate-x-8">
                    {" "}
                    Giảm {product.promotion}{" "}
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <span className="w-[94px] h-[18px] text-[#6F787E] text-[14px]">
                    {" "}
                    Chọn số lượng:{" "}
                  </span>
                  <div className="flex items-center ml-6">
                    <button
                      className="w-[32px] h-[32px]"
                      onClick={removeToCart}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <button className="w-[40px] h-[32px] bg-[#FFFFFF]">
                      {quantity}
                    </button>
                    <button
                      className="w-[32px] h-[32px] text-[#B7BBBF] text-[13.5px] bg-[#F2F3F4] p-2 flex items-center justify-center"
                      onClick={addToCart}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <li className="w-[40px] h-[40px]">
                    <box-icon name="info-circle"></box-icon>
                  </li>
                  <span className="w-[258px] h-[18px] text-[#3F4B53] text-[14px]">
                    {" "}
                    Chỉ được tối đa 10 mã khuyến mãi{" "}
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-[353.5px] h-[48px] bg-[#E7E8EA] pt-[13px] pb-[13px] pl-[16px] pr-[16px] flex items-center justify-center rounded-md">
                    <span
                      onClick={() => addProduct(product)}
                      className="w-[97px] h-[22px] text-[#3F4B53] text-[16px] cursor-pointer"
                    >
                      <p onClick={notify}>Thêm vào giỏ</p>
                    </span>
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <div className="w-[353.5px] h-[48px] bg-[#EE2624] pt-[13px] pb-[13px] pl-[16px] pr-[16px] flex items-center justify-center ml-1 rounded-md">
                    <span className="w-[70px] h-[22px] text-[#FFFFFF] text-[16px] cursor-pointer">
                      <Link to="/cart">Mua ngay</Link>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 opacity-0 lg:opacity-100">
                  <span className="w-[154px] h-[20px] text-[#0F1E29] text-[16px]">
                    {" "}
                    Quyền lợi khách hàng{" "}
                  </span>
                  <li className="w-[24px] h-[24px]">
                    <box-icon name="info-circle"></box-icon>
                  </li>
                </div>
                <div className="flex items-center justify-between mt-2 opacity-0 lg:opacity-100">
                  <span className="w-[193px] h-[18px] text-[#3F4B53] text-[14px]">
                    {" "}
                    48 giờ hoàn trả{" "}
                  </span>
                  <li className="w-[24px] h-[24px]">
                    <box-icon name="color" type="solid"></box-icon>
                  </li>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:items-center lg:justify-between h-[269px] bg-[#FFFFFF] mt-4">
              {/* Left */}
              <div className="lg:translate-x-6">
                <div className="flex items-center ml-4">
                  <img
                    src={product.avatar}
                    alt={product.name}
                    className="w-[74px] h-[74px] object-cover rounded-full"
                  />
                  <div className="flex flex-col ml-2">
                    <span className="w-[391px] h-[22px] text-[#0F1E29] text-[16px]">
                      {" "}
                      {product.avatarname}{" "}
                    </span>
                    <span className="w-[391px] h-[16px] text-[#6F787E] text-[12px]">
                      {" "}
                      {product.country}{" "}
                    </span>
                  </div>
                </div>
                <div className="flex items-center ml-4 mt-2">
                  <div className="flex flex-col">
                    <span className="w-[85px] h-[22px] text-[#0F1E29] text-[16px]">
                      {" "}
                      1 tháng{" "}
                    </span>
                    <span className="w-[127px] h-[16px] text-[#3F4B53] text-[12px]">
                      {" "}
                      Bán ở Sendo{" "}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-[45px] h-[22px] text-[#0F1E29] text-[16px]">
                      {" "}
                      {product.count}{" "}
                    </span>
                    <span className="w-[67px] h-[16px] text-[#3F4B53] text-[12px]">
                      {" "}
                      Sản phẩm{" "}
                    </span>
                  </div>
                  <div className="flex flex-col ml-6">
                    <span className="w-[85px] h-[22px] text-[#0F1E29] text-[16px]">
                      {" "}
                      2 ngày{" "}
                    </span>
                    <span className="w-[117px] h-[16px] text-[#3F4B53] text-[12px]">
                      {" "}
                      Chuẩn bị hàng{" "}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-6 ml-4">
                  <div className="flex items-center">
                    <li className="w-[24px] h-[24px]">
                      <box-icon name="heart" color="red"></box-icon>
                    </li>
                    <span className="w-[89px] h-[18px] text-[#3F4B53] text-[14px] ml-1 mt-1">
                      {" "}
                      Theo dõi shop{" "}
                    </span>
                  </div>
                  <div className="flex items-center ml-4">
                    <li className="w-[24px] h-[24px]">
                      <box-icon name="store-alt" color="red"></box-icon>
                    </li>
                    <span className="w-[60px] h-[18px] text-[#3F4B53] text-[14px] ml-1 mt-1">
                      {" "}
                      Vào Shop{" "}
                    </span>
                  </div>
                  <div className="w-[60px] h-[40px] text-[#3F4B53] text-[13.5px] bg-[#E7E8EA] p-2 ml-4 flex items-center justify-center">
                    <box-icon name="phone" color="red"></box-icon>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="lg:-translate-x-10 translate-x-2 lg:translate-y-0 translate-y-2">
                <span className="w-[115px] h-[22px] text-[#0F1E29] text-[16px]">
                  {" "}
                  Mô tả sản phẩm{" "}
                </span>
                <div>
                  <span className="w-[109px] h-[17px] text-[#3F4B53] text-[14px]">
                    {" "}
                    Chi tiết sản phẩm{" "}
                  </span>
                  <p className="lg:w-[712px] w-[350px] h-[54px] text-[#3F4B53] text-[14px]">
                    {" "}
                    {product.description}{" "}
                  </p>
                </div>
                <div className="w-[715px] h-[40px] text-[#3F4B53] text-[13.5px] bg-[#E7E8EA] pt-[11px] pb-[11px] pl-[16px] pr-[16px] flex items-center justify-center mt-3 opacity-0 lg:opacity-100">
                  <button className="w-[152px] h-[18px] text-[#3F4B53] text-[14px]">
                    {" "}
                    Xem thêm{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:mt-4 h-[449px] bg-[#FFFFFF] mt-28">
              <div className="flex items-center lg:ml-10 ml-1">
                <h4 className="w-[296px] h-[18px] text-[#0F1E29] lg:text-[20px] text-[14px]">
                  {" "}
                  Đánh giá nhận xét về sản phẩm{" "}
                </h4>
                <span className="w-[121px] h-[18px] text-[#646464] text-[14px]">
                  {" "}
                  ( 36 lượt đánh giá ){" "}
                </span>
              </div>
              <div className="mt-4 lg:ml-10 ml-2">
                <div>
                  <div>
                    <div className="flex items-center">
                      <span className="w-[52px] h-[44px] text-[#0F1E29] text-[36px]">
                        {" "}
                        {product.starstar}{" "}
                      </span>
                      <span className="w-[10px] h-[28px] text-[#0F1E29]">
                        {" "}
                        /{" "}
                      </span>
                      <span className="w-[14px] h-[28px] text-[#EE2624] text-[24px]">
                        {" "}
                        5{" "}
                      </span>
                    </div>
                    <div className="w-[97px] h-[30px] flex items-center">
                      <span>
                        {" "}
                        <box-icon name="star" color="green"></box-icon>
                      </span>
                      <span>
                        {" "}
                        <box-icon name="star" color="green"></box-icon>
                      </span>
                      <span>
                        {" "}
                        <box-icon name="star" color="green"></box-icon>
                      </span>
                      <span>
                        {" "}
                        <box-icon name="star" color="green"></box-icon>
                      </span>
                      <span>
                        {" "}
                        <box-icon name="star" color="green"></box-icon>
                      </span>
                    </div>
                    <p className="w-[345.5px] h-[36px] text-[#828282] lg:text-[14px] mt-2 text-[10px]">
                      {" "}
                      Đây là thông tin người mua đánh giá shop bán sản phẩm này
                      có đúng mô tả không.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-[14px] mt-6 ml-4 opacity-0 lg:opacity-100">
                <div className="w-[55px] h-[26px] bg-[#E5101D] rounded-sm flex items-center justify-center">
                  <button className="w-[39px] h-[18px] text-[#FFFFFF]">
                    {" "}
                    Tất cả{" "}
                  </button>
                </div>
                <div className="w-[50px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000]"> 5 sao </button>
                </div>
                <div className="w-[50px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000]"> 4 sao </button>
                </div>
                <div className="w-[50px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000]"> 3 sao </button>
                </div>
                <div className="w-[50px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000]"> 2 sao </button>
                </div>
                <div className="w-[50px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000]"> 1 sao </button>
                </div>
                <div className="w-[200px] h-[26px] bg-[#F1F1F1] flex items-center justify-center ml-3">
                  <button className="text-[#000000] mt-[2px]">
                    {" "}
                    Đánh giá có hình{" "}
                  </button>
                </div>
              </div>
              <div className="mt-4 lg:ml-4">
                <div className="flex items-center">
                  {/* Left */}
                  <div>
                    <img
                      src="http://anhnendep.net/wp-content/uploads/2016/04/hinh-gai-dep-hot-gril-viet-nam-03.jpg"
                      alt={product.name}
                      className="w-[36px] h-[36px] rounded-full object-cover"
                    />
                  </div>
                  {/* Right */}
                  <div className="flex flex-col ml-2">
                    <strong className="w-[580px] h-[18px] text-[#000000] text-[14px]">
                      {" "}
                      {product.name01}{" "}
                    </strong>
                    <span className="w-[94px] h-[12px] text-[#828282] text-[11px]">
                      {" "}
                      {product.date01}{" "}
                    </span>
                  </div>
                  <div className="w-[51px] h-[19px] flex items-center lg:ml-[-160px] ml-[-400px]">
                    <span>
                      {" "}
                      <box-icon name="star" color="green"></box-icon>{" "}
                    </span>
                    <span>
                      {" "}
                      <box-icon name="star" color="green"></box-icon>{" "}
                    </span>
                    <span>
                      {" "}
                      <box-icon name="star" color="green"></box-icon>{" "}
                    </span>
                    <span>
                      {" "}
                      <box-icon name="star" color="green"></box-icon>{" "}
                    </span>
                    <span>
                      {" "}
                      <box-icon name="star" color="green"></box-icon>{" "}
                    </span>
                  </div>
                </div>
                <p className=" w-[350px] lg:w-[631px] h-[18px] text-[#0F1E29] text-[14px] mt-2 lg:ml-0 ml-2">
                  {" "}
                  {product.description01}{" "}
                </p>
                <div className="flex items-center mt-6">
                  <li className="w-[24px] h-[24px]">
                    <box-icon name="like"></box-icon>
                  </li>
                  <span className="w-[148px] h-[18px] text-[#646464] text-[14px] ml-2">
                    {" "}
                    Hữu ích{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ArrowTopScrollWeb />
        <Modal />
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default SendoProductDetails;
