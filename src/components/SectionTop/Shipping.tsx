import { Col, Row } from "antd";
import React from "react";

const Shipping: React.FC = () => {
  return (
    <section id="shipping">
      <Row>
        <Col lg={24}>
          <div className="container">
            <Row justify="center">
              <Col lg={6}>
                <div className="shippingItem">
                  <div className="shippingIcon">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div className="shippingContent">
                    <h3 className="title">Free Delivery</h3>
                    <p>For all orders over $120</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="shippingItem">
                  <div className="shippingIcon">
                    <i className="fa-solid fa-credit-card"></i>
                  </div>
                  <div className="shippingContent">
                    <h3 className="title">SAFE PAYMENT</h3>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="shippingItem">
                  <div className="shippingIcon">
                    <i className="fa-solid fa-hospital"></i>
                  </div>
                  <div className="shippingContent">
                    <h3 className="title">24/7 HELP CENTER</h3>
                    <p>Dedicated 24/7 support</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="shippingItem" style={{ border: "none" }}>
                  <div className="shippingIcon">
                    <i className="fa fa-money-bill"></i>
                  </div>
                  <div className="shippingContent">
                    <h3 className="title">FRIENDLY SERVICES</h3>
                    <p>30 day satisfaction guarantee</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Shipping;
