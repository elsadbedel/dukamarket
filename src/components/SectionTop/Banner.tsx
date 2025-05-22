import { Col, Row } from "antd";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section id="banner">
      <Row>
        <Col lg={24}>
          <div className="container">
            <Row>
              <Col lg={8}>
                <div className="bannerBox">
                  <div className="bannerContent">
                    <span className="bannerTitle">Intelligent</span>
                    <span className="bannerTitle">New Touch Control</span>
                    <p>Discount 20% On Products</p>
                  </div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_3750x.png?v=1635926613"
                    alt="img"
                  />
                </div>
              </Col>
              <Col lg={8}>
                <div className="bannerBox">
                  <div className="bannerContent">
                    <span className="bannerTitle">On-Sale</span>
                    <span className="bannerTitle">Best Prices Headphone</span>
                    <p>Limited Time: Online Only!</p>
                  </div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/2_2700x.png?v=1635926962"
                    alt="img"
                  />
                </div>
              </Col>
              <Col lg={8}>
                <div className="bannerBox">
                  <div className="bannerContent">
                    <span className="bannerTitle">Hot Sale</span>
                    <span className="bannerTitle">Super Laptops 2022</span>
                    <p>Free Shipping All Order</p>
                  </div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/3_3000x.png?v=1635926988"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
