import React from "react";
import Banner from "./Banner";
import Shipping from "./Shipping";
import SlideShow from "./SlideShow";

const Main: React.FC = () => {
  return (
    <section id="main">
      <Shipping />
      <Banner />
      <SlideShow />
    </section>
  );
};

export default Main;
