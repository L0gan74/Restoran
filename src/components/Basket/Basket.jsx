import React from "react";
import { Link } from "react-router-dom";

import back from "../../assets/back.svg";

import DeliveryInput from "./DeliveryInput";

export const Basket = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [isActiveNal, setIsActiveNal] = React.useState(false);
  const [isActiveDost, setIsActiveDost] = React.useState(false);

  return (
    <section className="basket">
      <div className="container">
        <div className="delievery-back_del">
          <Link to="/delievery">
            <span>
              <img src={back} alt="" />к выбору блюда
            </span>
          </Link>
        </div>
        <div className="delievery-name_del">
          <span className="delievery-name_rectangle_del"></span>
          <h2>Оформление заказа</h2>
        </div>
        <form>
          <div className="contact-inforamtion form-back">
            <p>1. Контактная информация</p>
            <input className="name" type="text" placeholder="Имя*" required />
            <input
              className="telefon"
              type="tel"
              placeholder="Телефон*"
              required
            />
          </div>
          <div className="delivery-form form-back">
            <p>2. Доставка</p>
            <div className="delivery-form__buttons">
              <span className="activeBtn" onClick={() => setIsActive(true)}>
                Доставка
              </span>
              <span onClick={() => setIsActive(false)}>Самовывоз</span>
              {isActive ? <p>Доставим через 1 час 30 минут</p> : null}
            </div>
            {isActive ? <DeliveryInput /> : null}
          </div>
          <div className="payment form-back">
            <p>3. Оплатить</p>
            <div className="delivery-form__buttons">
              <span onClick={() => setIsActiveNal(false)}>Оплата онлайн</span>
              <span onClick={() => setIsActiveNal(false)}>Курьеру картой</span>
              <span onClick={() => setIsActiveNal(true)}>Наличными</span>
            </div>
            {isActiveNal ? <input tupe="text" placeholder="Сдача с" required /> : null}
          </div>
          <div className="when form-back">
            <p>4. Когда доставить</p>
            <div className="when-btn">
              <div className="when-btn__top">
                <span onClick={() => setIsActiveDost(false)}>
                  В ближайшее время
                </span>
                <span onClick={() => setIsActiveDost(true)}>Ко времени</span>
                {isActiveDost ? (
                  <input tupe="text" placeholder="Укажите время"  required/>
                ) : null}
              </div>
              <div className="persons">
                <p>Кол-во персон</p>
                <div className="persons-counter">
                  <b>-</b>
                  <p>1</p>
                  <b>+</b>
                </div>
              </div>
              <p className="callback">Хотите мы позвоним?</p>
              <div className="perezvon">
                <div class="checkbox-wrapper">
                  <label for="modern-checkbox"></label>
                  <input type="checkbox" id="modern-checkbox" />
                  <span></span>
                </div>
                <p>Не перезванивать</p>
              </div>
              <div className="perezvon">
                <div class="checkbox-wrapper">
                  <label for="modern-checkbox2"></label>
                  <input type="checkbox" id="modern-checkbox2" />
                  <span></span>
                </div>
                <p>Потребуется звонок оператора</p>
              </div>
            </div>
          </div>
          <div className="formalization form-back">
            <div className="agreement">
              <input type="checkbox" id="agreement" required/>
              <label for="agreement"></label>
              <p>
                Я согласен на обработку моих перс. данных в соответствии с{" "}
                <Link to="/TermsOfDelivery">Условиями</Link>
              </p>
            </div>
              <button>Оформить заказ</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Basket;
