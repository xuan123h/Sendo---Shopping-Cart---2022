import React, { Fragment } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <Fragment>
      <HeaderTop />
      <HeaderSearch />
    </Fragment>
  );
};

export default Header;
