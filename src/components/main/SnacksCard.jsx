import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

import cardBtn from "../../assets/card-btn.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

function SnacksCard({ id, name, title, price, urlImg, weight }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id == id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      name,
      title,
      price,
      urlImg
    };
    dispatch(addItem(item));
  };

  return (
    <div className="container">
      <div className="snacks-card">
        <Link to={`/card/${id}`}>
          <img className="snacks-card_img" src={urlImg} alt="card" />
        </Link>
        <span className="amount">{addedCount > 0 && <i>{addedCount}</i>}</span>
        <div className="snacks-card_description">
          <div className="snacks-card_description-top">
            <p className="snacks-card_description-top_name">{name}</p>
            <p className="snacks-card_description-top_weight">
              Вес: {weight} г
            </p>
          </div>
          <p className="snacks-card_description-txt">{title}</p>
          <div className="snacks-card_description-bottom">
            <button
              type="button"
              className="snacks-card_description-bottom_add"
            >
              <img src={minus} alt="" />
            </button>
            <p className="snacks-card_description-bottom_price">{price} ₽</p>
            <button
              type="button"
              className="snacks-card_description-bottom_btn"
              onClick={onClickAdd}
            >
              В корзину
              <img src={cardBtn} alt="" />
            </button>
            <button
              type="button"
              className="snacks-card_description-bottom_plus"
            >
              <img src={plus} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnacksCard;
