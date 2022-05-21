import React from "react";
import ProductHotFeature from "../../features/ProductHotFeature";
import Contact from "./Contact";
import Information from "./Information";

const Footer = () => {
  return (
    <div className="h-[747px] mt-[530px]">
      <ProductHotFeature />
      <Information />
      <Contact />
    </div>
  );
};

export default Footer;
