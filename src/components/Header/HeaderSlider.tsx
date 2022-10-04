import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Row } from 'antd';
const HeaderSlider: React.FC = () => {
    SwiperCore.use([Autoplay]);
    return (
        <Row>
            <Col lg={24}>
                <div id='headerSlider'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Navigation, Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="container">
                                <div className='slide'>
                                    <div className="caption">
                                        <h4 className='badge'>New Arrivals</h4>
                                        <span>Sport Edition</span>
                                        <span>Best Choice of the Year</span>
                                        <p>Discount of 20% Products & Free Shipping</p>
                                        <a href="_" className='discover'>Discover Now</a>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/1_2700x.jpg?v=1635845602" alt="slide" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className='slide'>
                                    <div className="caption">
                                        <h4 className='badge'>Hot Deal</h4>
                                        <span>Sale 50% off</span>
                                        <span>Best Choice of the Year</span>
                                        <p>Discount of 50% Products & Free Shipping</p>
                                        <a href="_" className='discover'>Discover Now</a>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/3_2700x.jpg?v=1635846056" alt="slide" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className='slide'>
                                    <div className="caption">
                                        <h4 className='badge'>Hot Deal</h4>
                                        <span>Sale 30% Off</span>
                                        <span>Futured footbal boots</span>
                                        <p>Discount of 30% Products & Free Shipping</p>
                                        <a href="_" className='discover'>Discover Now</a>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/2_1512x.jpg?v=1635845964" alt="slide" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Col>
        </Row>

    )
}

export default HeaderSlider
