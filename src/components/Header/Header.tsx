import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderSlider from "./HeaderSlider";
import HeaderTop from "./HeaderTop";
import TopBar from "./TopBar";

const Header: React.FC = () => {
  return (
    <header id="header">
      <TopBar />
      <HeaderTop />
      <HeaderBottom />
      <HeaderSlider />
    </header>
  );
};

export default Header;
