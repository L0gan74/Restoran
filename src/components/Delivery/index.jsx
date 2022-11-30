import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import back from "../../assets/back.svg";
import snacks from "../../assets/snacks.png";
import add from "../../assets/add.svg";

import DeliveryItem from "./DeliveryItem";

function Delievery() {
  const { totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <section className="delievery">
      <div className="container">
        <div className="delievery-back">
          <Link to="/">
            <span>
              <img src={back} alt="" />к выбору блюда
            </span>
          </Link>
        </div>
        <div className="delievery-name">
          <span className="delievery-name_rectangle"></span>
          <h2>Холодные закуски</h2>
          <p>(в корзине 3 товара)</p>
        </div>
        <div className="delievery-basket">
          <div className="separation-delievery">
            {items.map((item) => (
              <DeliveryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="suggestions">
          <div className="container">
            <h3 className="suggestions-txt">ДОБАВИТЬ К ЗАКАЗУ</h3>
            <div className="suggestions-block">
              <div className="suggestions-block_card">
                <img
                  className="suggestions-block_card-img"
                  src={snacks}
                  alt=""
                />
                <p className="suggestions-block_card-name">КВАС АНАНАСОВЫЙ</p>
                <span className="suggestions-block_card-add">
                  Добавить
                  <img src={add} alt="" />
                </span>
                <p className="suggestions-block_card-price">1640 ₽</p>
              </div>
              <div className="suggestions-block_card">
                <img
                  className="suggestions-block_card-img"
                  src={snacks}
                  alt=""
                />
                <p className="suggestions-block_card-name">КВАС АНАНАСОВЫЙ</p>
                <span className="suggestions-block_card-add">
                  Добавить
                  <img src={add} alt="" />
                </span>
                <p className="suggestions-block_card-price">1640 ₽</p>
              </div>
              <div className="suggestions-block_card">
                <img
                  className="suggestions-block_card-img"
                  src={snacks}
                  alt=""
                />
                <p className="suggestions-block_card-name">КВАС АНАНАСОВЫЙ</p>
                <span className="suggestions-block_card-add">
                  Добавить
                  <img src={add} alt="" />
                </span>
                <p className="suggestions-block_card-price">1640 ₽</p>
              </div>
              <div className="suggestions-block_card">
                <img
                  className="suggestions-block_card-img"
                  src={snacks}
                  alt=""
                />
                <p className="suggestions-block_card-name">КВАС АНАНАСОВЫЙ</p>
                <span className="suggestions-block_card-add">
                  Добавить
                  <img src={add} alt="" />
                </span>
                <p className="suggestions-block_card-price">1640 ₽</p>
              </div>
            </div>
          </div>
        </div>
        <div className="separation-bottom"></div>
        <div className="decor">
          <div className="decor-total">
            <p className="decor-total_price">
              Итого: <span>{totalPrice} ₽</span>
            </p>
            <p className="decor-total_delivery">
              До бесплатной доставки не хватет:<span> 100 ₽</span>
            </p>
            <p className="decor-total_minimal">
              Минимальная сума заказа 1500 ₽
            </p>
          </div>
          <div className="decor-btn">
            <button type="button">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delievery;
