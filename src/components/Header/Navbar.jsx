import React from "react";

const Navbar = ({ navbar }) => {
  return (
    <div>
      <img
        src={navbar.image}
        alt={navbar.title}
        className="w-[44px] h-[44px] object-cover ml-1"
      />
      <span className="w-[75px] text-[#000000] text-[14px] font-medium">
        {" "}
        {navbar.title}{" "}
      </span>
    </div>
  );
};

export default Navbar;
