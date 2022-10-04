import { Col, Row } from "antd";
import React from "react";

const TopSellingBanner: React.FC = () => {
    return (
        <section id='topSellingBanner'>
            <Row>
                <Col lg={24}>
                    <div className="container">
                        <Row>
                            <Col lg={12}>
                                <div className="topSellingbannerBox">
                                    <div className="topSellingbannerContent">
                                        <div className='topSellingbannerFirstTitle '>Bestseller Products</div>
                                        <div className='topSellingbannerSecondTitle'>PC & Docking Station</div>
                                        <p>Discount 20% Off, Top Quality Products</p>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_3b1cbd5d-3f57-498b-b6a9-ceb2dd76d544_720x.png?v=1636100986" alt="img" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="topSellingbannerBox">
                                    <div className="topSellingbannerContent">
                                        <div className='topSellingbannerFirstTitle '>Featured Products</div>
                                        <div className='topSellingbannerSecondTitle'>Accessories IPhone</div>
                                        <p>Free Shipping All Order Over $99s</p>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/2_46b31931-6e22-44e2-a58b-c175be9455fa_720x.png?v=1636101062" alt="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default TopSellingBanner;
