import { Col, Row } from "antd";
import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import Marquee from "./Marquee";
import RecommendBanner from "./RecommendBanner";
import RecommendBrand from "./RecommendBrand";
import RecommendNav from "./RecommendNav";

const Recommend: React.FC = () => {
    return (
        <div>
            <Marquee />

            <div className="container">
                <RecommendBanner />
                <RecommendNav />
                <Row >
                    <Col lg={24}>
                        <SingleProduct />
                    </Col>
                </Row>
                <Row id="recommendBrand">
                    <Col lg={24}>
                        <RecommendBrand />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Recommend;