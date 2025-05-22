import React from "react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import { showAddToCart, showWishList } from "../../features/ModalSlice";
import {
  addCart,
  addWish,
  deleteWish,
  Product
} from "../../features/UserSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const SingleProduct: React.FC = () => {
  SwiperCore.use([Autoplay]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.users.products);

  const addWishHandle = (item: Product) => {
    !item.wish ? dispatch(addWish(item)) : dispatch(deleteWish(item));
    dispatch(showWishList(true));
  };

  const addToCart = (item: Product) => {
    dispatch(showAddToCart(true));
    dispatch(addCart(item));
  };

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      autoplay={{ delay: 2000 }}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {products.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="productItem">
            <div className="badge1">HOT</div>
            <div className="badge2">-22%</div>
            <div className="asideActions">
              <div
                className="seeProduct"
                onClick={() => navigate(`/viewproduct/${item.id}`)}
              >
                <i className="fa-regular fa-eye"></i>
              </div>
              <div className="compareProduct">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <div
                className="loveProduct"
                style={
                  item.wish
                    ? { backgroundColor: "#fdc801" }
                    : { backgroundColor: "#f5f5f5" }
                }
                onClick={() => addWishHandle(item)}
              >
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <img src={item.image} alt="img" />
            <div className="productCollections">
              <h5 className="productTitle">{item.title.substring(0, 20)}...</h5>
              <div className="ratingStar">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="prices">
                <span className="newPrice">${item.price}</span>
                <span className="oldPrice">${item.discountedPrice}</span>
              </div>
              <div className="statusBar">
                {" "}
                <div style={{ width: "85%" }} className="soldBar">
                  {" "}
                  &nbsp;
                </div>
              </div>
              <div className="productStock">
                <span className="sold">Sold:{item.sold}</span>
                <span className="available">Available:{item.available}</span>
              </div>
            </div>
            <div className="productOverlay">
              <span className="addToCart" onClick={() => addToCart(item)}>
                Add to cart
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SingleProduct;
