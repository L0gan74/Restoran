import React from "react";

import { useDispatch } from "react-redux";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import delet from "../../assets/delete.svg";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

const DeliveryItem = ({ id, name, title, price, urlImg, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(
      minusItem({
        id,
      })
    );
  };

  const onClickRemove = () => {
    dispatch(
      removeItem({
        id,
      })
    );
  };

  return (
    <div className="delievery-basket_card">
      <div className="delievery-basket_card-left">
        <img src={urlImg} alt="" />
        <div className="delievery-basket_card-txt">
          <p className="delievery-basket_card-txt_name">{name}</p>
          <p className="delievery-basket_card-txt_description">{title}</p>
        </div>
      </div>
      <div className="delievery-basket_card-right">
        <p className="delievery-basket_card-txt_name-adp">{name}</p>
        <div className="delievery-basket_card-amount">
          <button
            onClick={onClickPlus}
            className="delievery-basket_card-amount_add"
            type="button"
          >
            <img src={plus} />
          </button>
          <p>{count}</p>
          <button
            onClick={onClickMinus}
            className="delievery-basket_card-amount_down"
            type="button"
          >
            <img src={minus} />
          </button>
        </div>
        <div className="delievery-basket_card-price">
          <p>{price * count} ₽</p>
        </div>
        <button
          onClick={onClickRemove}
          className="delievery-basket_card-delete"
        >
          <img src={delet} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DeliveryItem;
