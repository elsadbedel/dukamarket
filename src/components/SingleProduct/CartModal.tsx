import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { showAddToCart } from "../../features/ModalSlice";
import {
  decrementProduct,
  deleteCart,
  incrementProduct
} from "../../features/UserSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const CartModal: React.FC = () => {
  const show = useAppSelector(state => state.modals.showAddToCart); //Showing Modal
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(show);

  const cartProducts = useAppSelector(state => state.users.cart);

  useEffect(() => {
    if (show) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [show]);

  const onClose = () => {
    dispatch(showAddToCart(!show));
    setOpen(false);
  };

  const cart = useAppSelector(state => state.users.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <Drawer
        className="addToCartDrawer"
        closeIcon={<CloseOutlined style={{ float: "right" }} />}
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <span className="addToCartcountItem">{getTotal().totalQuantity}</span>
        <ul className="addToCart">
          {cartProducts.map((item, index) => (
            <li key={index} className="addToCartProductItem">
              <span className="addToCartImg">
                {" "}
                <img src={item.image} alt="img" />
              </span>
              <span className="addToCartTitle">
                <h3>{item.title}</h3>
                <div className="addToCartQuantity">
                  <span className="qty">{item.quantity}x</span>&nbsp;
                  <span className="cartPrice">${item.price}</span>&nbsp; &nbsp;
                  &nbsp;
                  <span className="btnGroupCart">
                    <span
                      className="decrement"
                      onClick={() => dispatch(decrementProduct(item))}
                    >
                      -
                    </span>
                    <span className="quantityInput">{item.quantity}</span>
                    <span
                      className="increment"
                      onClick={() => dispatch(incrementProduct(item))}
                    >
                      +
                    </span>
                  </span>
                </div>
                <span
                  className="deleteCartItem"
                  onClick={() => dispatch(deleteCart(item))}
                >
                  X
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="totalGroup">
          <div className="totalPrice">
            <span className="totalTitle">
              <h6>Total</h6>
            </span>
            <span className="totalNumber">${getTotal().totalPrice}</span>
          </div>

          <div className="viewCart">
            {" "}
            <a href="_">view cart</a>
          </div>
          <div className="checkOut">
            {" "}
            <a href="_">check out</a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartModal;
