import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/back.svg";

export const Basket = () => {
  const typeBtn = ["Доставка", "Самовывоз"];
  const paymentBtn = ["Оплата онлайн", "Курьеру картой", "Наличными"];
  const deliveryBtn = ["В ближайшее время", "Ко времени"];
  const [activeBtn, setActiveBtn] = React.useState(0);
  const [payment, setPayment] = React.useState(0);
  const [delivery, setDelivery] = React.useState(0);
  const [show, setShow] = React.useState(true);

  const clickShow = () => {
    setShow(!show);
  };

  let content = null;

  let contentInp = null;

  if (show) {
    content = (
      <>
        <p>Доставим через 1 час 30 минут</p>
      </>
    );

    contentInp = (
      <div className="address">
        <p>Адрес доставки</p>
        <div className="address-inpt">
          <input
            className="outside"
            type="text"
            placeholder="Укажите улицу*"
            required
          />
          <input type="text" placeholder="Номер дома*" required />
          <input
            className="flat"
            type="text"
            placeholder="№ квартиры/офиса"
            required
          />
          <input className="floor" type="text" placeholder="Подъезд" required />
          <input className="floor" type="text" placeholder="Этаж" required />
          <input className="comments" type="text" placeholder="Комментарий" />
        </div>
      </div>
    );
  }

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
              <ul>
                {typeBtn.map((categoryBtn, i) => (
                  <li key={i} onClick={() => setActiveBtn(i)}>
                    <span
                      className={activeBtn === i ? "activeBtn" : ""}
                      onClick={clickShow}
                    >
                      {categoryBtn}
                    </span>
                  </li>
                ))}
              </ul>
              {content}
            </div>
            {contentInp}
          </div>
          <div className="payment form-back">
            <p>3. Оплатить</p>
            <div className="delivery-form__buttons">
              <ul>
                {paymentBtn.map((categoryBtn, i) => (
                  <li key={i} onClick={() => setPayment(i)}>
                    <span className={payment === i ? "activeBtn" : ""}>
                      {categoryBtn}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <input tupe="text" placeholder="Сдача с" />
          </div>
          <div className="when form-back">
            <p>4. Когда доставить</p>
            <div className="when-btn">
              <div className="when-btn__top">
                <ul>
                  {deliveryBtn.map((categoryBtn, i) => (
                    <li key={i} onClick={() => setDelivery(i)}>
                      <span className={delivery === i ? "activeBtn" : ""}>
                        {categoryBtn}
                      </span>
                    </li>
                  ))}
                </ul>
                <input tupe="text" placeholder="Сдача с" />
              </div>
              <div className="persons">
                <p>Кол-во персон</p>
                <div className="persons-counter">
                  <b>-</b>
                  <p>1</p>
                  <b>+</b>
                </div>
              </div>
            </div>
          </div>
          <div className="formalization form-back">
            <input type="checkbox" />
            <button>Оформить заказ</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Basket;
