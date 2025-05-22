import React from "react";
import { Col, Row } from "antd";

const RecommendBanner: React.FC = () => {
  return (
    <section id="recommendBanner">
      <Row>
        <Col lg={24}>
          <Row gutter={[20, 20]}>
            <Col lg={8}>
              <div className="recommendBannerBox overlayPrimary">
                <div className="recommemdBannerContent">
                  <div className="recommendBannderBadge">HOT DEAL</div>
                  <div className="recommendBannerTitle">Sale 30% Off</div>
                  <div className="recommendBannerTitle">Top Computer Case</div>
                  <div className="recommendBannerTitle">Gaming</div>
                </div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_5a3ea302-4f97-4c32-8c86-aa92780eaa95_1080x.png?v=1636173541"
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={8}>
              <Row gutter={[0, 25]}>
                <Col lg={24}>
                  <div className="recommendBannerBox overlayPrimary">
                    <div className="recommemdBannerContent">
                      <div className="recommendBannerTitleMiddle">
                        Electronic Deals
                      </div>
                      <p className="recommendBannerTitleMiddleText">
                        Laptop, Computer, Smartphone, Gampad
                      </p>
                      <a className="recommendBannerLearnMoreBtn" href="_">
                        Learn More
                      </a>
                    </div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/2_d3777210-2587-4485-b9af-8627730bbd4e_720x.png?v=1636173751"
                      alt="img"
                    />
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="recommendBannerBox overlayPrimary">
                    <div
                      className="recommemdBannerContent"
                      style={{ textAlign: "start" }}
                    >
                      <div className="recommendBannerTitle">Hot Products</div>
                      <div className="recommendBannerTitle">
                        Laptop Ultra 4K 16”
                      </div>
                      <br />
                      <br />
                      <p className="recommendBannerTitleMiddleText">
                        Discount 20% On Products
                      </p>
                    </div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/3_2475ff90-bd67-49e7-99f9-c0d4e6a0e616_900x.png?v=1636174014"
                      alt="img"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={8}>
              <div className="recommendBannerBox overlayPrimary">
                <div className="recommemdBannerContent">
                  <div className="recommendBannderBadge">NEW ARIVALS</div>
                  <div className="recommendBannerTitle">Sport Edition</div>
                  <div className="recommendBannerTitle">
                    Best Choice Of The Year
                  </div>
                </div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/4_900x.png?v=1636174056"
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default RecommendBanner;
