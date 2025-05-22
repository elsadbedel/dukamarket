import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
