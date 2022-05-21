import React, { Fragment } from "react";
import ProductNext from "../components/FlashSale/FetchApiProduct/ProductNext";
import FlashSale from "../components/FlashSale/FlashSale";
import Header from "../components/Header/Header";
import Navbars from "../components/Header/Navbars";
import ImageShow from "../components/ImageShow/ImageShow";
import ArrowTopScrollWeb from "../components/Modal/ArrowTopScrollWeb";
import Modal from "../components/Modal/Modal";
import Footer from "../components/ProductHot/Footer";
import Slider from "../components/Slider/Slider";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Navbars />
      <Slider />
      <FlashSale />
      <ProductNext />
      <Footer />
      <ImageShow />
      <Modal />
      <ArrowTopScrollWeb />
    </Fragment>
  );
};

export default Home;
