import React, { useState, useEffect } from "react";

import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

import { useAppDispatch, useAppSelector } from "../../store";
import { showWishList } from "../../features/ModalSlice";
import { deleteWish } from "../../features/UserSlice";

const WishList: React.FC = () => {
  const wishList = useAppSelector(state => state.users.wishlist);

  const showWish = useAppSelector(state => state.modals.showWishList); // Aside section
  const [openn, setOpenn] = useState(showWish);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showWish) {
      setOpenn(true);
    } else {
      setOpenn(false);
    }
  }, [showWish]);

  const onClosee = () => {
    dispatch(showWishList(!showWish));
    setOpenn(false);
  };
  return (
    <>
      <Drawer
        className="wishListDrawer"
        closeIcon={<CloseOutlined style={{ float: "right" }} />}
        title="Add Wish List"
        placement="right"
        onClose={onClosee}
        open={openn}
      >
        <ul className="wishList">
          {wishList.map((item, index) => (
            <li key={index} className="wishListProductItem">
              <span className="wishListImg">
                {" "}
                <img src={item.image} alt="img" />
              </span>
              <span className="wishListTitle">
                <h3>{item.title}</h3>
                <div className="wishListPrice">
                  <p>${item.price}</p>
                </div>
                <span
                  className="deleteWishList"
                  onClick={() => dispatch(deleteWish(item))}
                >
                  X
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="totalGroup">
          <div className="viewWishList">
            {" "}
            <a href="_">View wishlist</a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default WishList;
