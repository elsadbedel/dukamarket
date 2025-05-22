import React from "react";
import { useParams } from "react-router-dom";
import { Col, Image, Row } from "antd";
import { showAddToCart, showWishList } from "../../features/ModalSlice";
import {
  addCart,
  addWish,
  deleteWish,
  Product
} from "../../features/UserSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import TopBar from "../Header/TopBar";
import HeaderTop from "../Header/HeaderTop";
import HeaderBottom from "../Header/HeaderBottom";
import Footer from "../Footer/Footer";

const ViewProduct: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const singleProduct = useAppSelector(state =>
    state.users.products.find(item => item.id === id)
  );

  const addToCartHandle = () => {
    dispatch(showAddToCart(true));
    dispatch(addCart(singleProduct as Product));
  };
  const addWishHandle = () => {
    !singleProduct?.wish
      ? dispatch(addWish(singleProduct as Product))
      : dispatch(deleteWish(singleProduct as Product));
    dispatch(showWishList(true));
  };
  return (
    <section>
      <section id="header">
        <TopBar />
        <HeaderTop />
        <HeaderBottom />
      </section>
      <div className="container">
        <div id="viewProduct">
          <Row gutter={30}>
            <Col lg={12}>
              <Image className="viewProductImg" src={singleProduct?.image} />
            </Col>
            <Col lg={12}>
              <div className="singleItemTitle">
                <h1>
                  <span>{singleProduct?.title}</span>
                </h1>
              </div>
              <div className="ratingStar">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="prices">
                <span className="newPrice">${singleProduct?.price}</span>
                &nbsp;&nbsp;
                <span className="oldPrice">
                  ${singleProduct?.discountedPrice}
                </span>
              </div>
              <div className="singleItemDescription">
                <p>{singleProduct?.description}</p>
              </div>
              <div className="btnGroup">
                <div
                  className="loveProduct"
                  style={
                    singleProduct?.wish
                      ? { backgroundColor: "#fdc801" }
                      : { backgroundColor: "#f5f5f5" }
                  }
                  onClick={addWishHandle}
                >
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="singleItemCart" onClick={addToCartHandle}>
                  Add to cart
                </div>
              </div>
              <br />
              <div className="singleItemBuy">Buy it Now</div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ViewProduct;
