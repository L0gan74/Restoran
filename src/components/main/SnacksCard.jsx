import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { SearchContext } from "../Main";

import cardBtn from "../../assets/card-btn.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

function SnacksCard({ id, name, title, price, urlImg, weight }) {
  const { count, setCount } = React.useContext(SearchContext);

  return (
    <div className="container">
      <div className="snacks-card">
        <Link to={`/card/${id}`}>
          <img className="snacks-card_img" src={urlImg} alt="card" />
        </Link>
        <span className="amount">{count}</span>
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
              onClick={() => setCount(count - 1)}
            >
              <img src={minus} alt="" />
            </button>
            <p className="snacks-card_description-bottom_price">{price} ₽</p>
            <button
              type="button"
              className="snacks-card_description-bottom_btn"
            >
              В корзину
              <img src={cardBtn} alt="" />
            </button>
            <button
              type="button"
              className="snacks-card_description-bottom_plus"
              onClick={() => setCount(count + 1)}
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
