import { Col, Row } from "antd";
import React from "react";
import { showAddToCart, showWishList } from "../../features/ModalSlice";
import { addCart, addWish, deleteWish } from "../../features/UserSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import TopFeaturedNav from "./TopFeaturedNav";

const TopFeatured: React.FC = () => {
    const topFeaturedProduct = useAppSelector(state => state.users.products[3]);
    const fourFeaturedProducts = useAppSelector(state => state.users.products.slice(0, 4));
    const dispatch = useAppDispatch();
    const addWishHandle = () => {
        !topFeaturedProduct.wish ? dispatch(addWish(topFeaturedProduct)) : dispatch(deleteWish(topFeaturedProduct));
        dispatch(showWishList(true));
    }
    return (
        <div id="topFeatured">
            <Row>
                <Col lg={24}>
                    <div className="container">
                        <Row>
                            <Col lg={24}>
                                <TopFeaturedNav />
                            </Col>
                        </Row>
                        <Row gutter={18}>
                            <Col lg={12}>
                                <div className="topFeaturedContent overlay">
                                    <div className="imgContent">
                                        <img src={topFeaturedProduct.image} alt="img" />
                                        <div className="badgeSale">-35%</div>
                                    </div>

                                    <div className="topFeaturedLeftContent">
                                        <h4 className="contentTitle">
                                            <a href="_">{topFeaturedProduct.title}</a>
                                        </h4>

                                        <div className="ratingStar">
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>

                                        <div className="money">
                                            <span className="current">${topFeaturedProduct.price}</span>
                                            <span className="compare">${topFeaturedProduct.discountedPrice}</span>
                                        </div>

                                        <div className="contentAbout">
                                            <p>{topFeaturedProduct.description}</p>
                                        </div>
                                        <div className="btnProducts">
                                            <span className="btnAddToCart" onClick={() => { dispatch(showAddToCart(true)); dispatch(addCart(topFeaturedProduct)) }}>
                                                Add to cart
                                            </span>
                                            <span className="btnAddToWishList" style={topFeaturedProduct.wish ? { backgroundColor: '#fdc801' } : { backgroundColor: '#f5f5f5' }} onClick={addWishHandle}>
                                                <i className="fa-regular fa-heart"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Row gutter={[18, 18]}>
                                    {fourFeaturedProducts.map((item, index) =>
                                        <Col lg={12} key={index}>
                                            <div className="topFeaturedContent overlay">
                                                <div className="topFeaturedRightImg">
                                                    <img src={item.image} alt="img" />
                                                    <div className="badgeSale">new</div>
                                                </div>

                                                <div className="topFeaturedRightContent">
                                                    <div className="contentTitle">
                                                        <a href="_">{item.title}</a>
                                                    </div>
                                                    <div className="ratingStar">
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <div className="money">
                                                        <span className="current">${item.price}</span>
                                                        <span className="compare">${item.discountedPrice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                    {/* <Col lg={12}>
                                        <div className="topFeaturedContent overlay">
                                            <div className="topFeaturedRightImg">
                                                <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/products/34_3cacccb8-503d-493b-b962-6a34ec6e52e6_360x.jpg?v=1636009384" alt="" />
                                                <div className="badgeSale">new</div>
                                            </div>

                                            <div className="topFeaturedRightContent">
                                                <div className="contentTitle">
                                                    <a href="_">LG Unlocked Smartphone Platinum</a>
                                                </div>
                                                <div className="ratingStar">
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <div className="money">
                                                    <span className="current">$65.00</span>
                                                    <span className="compare">$99.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="topFeaturedContent overlay">
                                            <div className="topFeaturedRightImg">
                                                <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/products/13_66bcfd47-5d78-469f-882f-741fdd7af3e5_360x.jpg?v=1636000981" alt="" />
                                                <div className="badgeSale">new</div>
                                            </div>

                                            <div className="topFeaturedRightContent">
                                                <div className="contentTitle">
                                                    <a href="_">LG Unlocked Smartphone Platinum</a>
                                                </div>
                                                <div className="ratingStar">
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <div className="money">
                                                    <span className="current">$65.00</span>
                                                    <span className="compare">$99.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="topFeaturedContent overlay">
                                            <div className="topFeaturedRightImg">
                                                <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/products/33_360x.jpg?v=1636001692" alt="" />
                                                <div className="badgeSale">new</div>
                                            </div>

                                            <div className="topFeaturedRightContent">
                                                <div className="contentTitle">
                                                    <a href="_">LG Unlocked Smartphone Platinum</a>
                                                </div>
                                                <div className="ratingStar">
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                </div>
                                                <div className="money">
                                                    <span className="current">$65.00</span>
                                                    <span className="compare">$99.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col> */}

                                </Row>
                            </Col>
                        </Row>

                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default TopFeatured;