import { Col, Row } from "antd";
import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import CountDown from "./CountDown";

const SlideShow: React.FC = () => {
  return (
    <Row style={{ margin: "50px 0px" }}>
      <Col lg={24}>
        <div className="container">
          <Row>
            <Col lg={24}>
              <CountDown />
            </Col>
          </Row>
          <Row>
            <Col lg={24}>
              <SingleProduct />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default SlideShow;
