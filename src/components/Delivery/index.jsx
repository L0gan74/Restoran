import React from "react";
import { Link, useParams } from "react-router-dom";

import back from "../../assets/back.svg";
import snacks from "../../assets/snacks.png";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import delet from "../../assets/delete.svg";
import add from "../../assets/add.svg";

function Delievery() {
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
          <div className="delievery-basket_card">
            <div className="delievery-basket_card-left">
              <img src={snacks} alt="" />
              <div className="delievery-basket_card-txt">
                <p className="delievery-basket_card-txt_name">
                  ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
                </p>
                <p className="delievery-basket_card-txt_description">
                  Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                  оливок, базилик, соус песто
                </p>
              </div>
            </div>
            <div className="delievery-basket_card-right">
              <p className="delievery-basket_card-txt_name-adp">
                {" "}
                ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
              </p>
              <div className="delievery-basket_card-amount">
                <button
                  className="delievery-basket_card-amount_add"
                  type="button"
                >
                  <img src={plus} />
                </button>
                <p>1</p>
                <button
                  className="delievery-basket_card-amount_down"
                  type="button"
                >
                  <img src={minus} />
                </button>
              </div>
              <div className="delievery-basket_card-price">
                <p>1640 ₽</p>
              </div>
              <button className="delievery-basket_card-delete">
                <img src={delet} alt="" />
              </button>
            </div>
          </div>
          <div className="separation-delievery"></div>
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
              Итого: <span>500 ₽</span>
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
