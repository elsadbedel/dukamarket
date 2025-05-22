import { Col, Row } from "antd";
import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import TopSellingBanner from "./TopSellingBanner";
import TopSellingNav from "./TopSellingNav";

const TopSelling: React.FC = () => {
  return (
    <div>
      <TopSellingBanner />
      <Row style={{ marginTop: "50px" }}>
        <Col lg={24}>
          <div className="container">
            <Row>
              <Col lg={24}>
                <TopSellingNav />
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
    </div>
  );
};

export default TopSelling;
