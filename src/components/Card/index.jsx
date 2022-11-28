import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Menu from "../main/Menu";
import { Link } from "react-router-dom";

import back from "../../assets/back.svg";
import snacks from "../../assets/snacks.png";
import cardBtn from "../../assets/card-btn.svg";

import Contacts from "../main/Contacts";

function Card() {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://636a511eb10125b78fd775d2.mockapi.io/restoran`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        const product = arr.find((item) => item.id == id);
        setItem(product);
        console.log(id);
      });
  }, [id]);

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <Menu />
      <div className="container">
        <div className="back">
          <Link to="/">
            <span>
              <img src={back} alt="" />
              Вернуться назад
            </span>
          </Link>
        </div>
        <div className="card-block">
          <div className="card-block_img">
            <img src={item?.urlImg} alt="картинка" />
          </div>
          <div className="card-block_description">
            <p className="card-block_description-name">{item?.name}</p>
            <p className="card-block_description-compound">{item?.title}</p>
            <p className="card-block_description-weight">
              Вес: {item?.weight} г
            </p>
            <div className="card-block_description-bottom">
              <button className="card-block_description-basket">
                <p>Корзина</p>
                <span></span>
                <img src={cardBtn} alt="" />
              </button>
              <p className="card-block_description-bottom_price">
                {item?.price} ₽
              </p>
            </div>
            <div className="card-block_description-values">
              <ul className="card-block_description-values_top">
                <li>Белки</li>
                <li>Жиры</li>
                <li>Углеводы</li>
                <li>Ккал</li>
                <li>Вес</li>
              </ul>
              <hr />
              <ul className="card-block_description-values_bottom">
                <li>{item?.values_1}</li>
                <li>{item?.values_2}</li>
                <li>{item?.values_3}</li>
                <li>{item?.values_4}</li>
                <li>{item?.values_5}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="department" />
      <section className="snacks cold">
        <div className="container">
          <div className="snacks-name">
            <span className="snacks-name_rectangle"></span>
            <h2>С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h2>
          </div>
          <div id="snacks" className="swiper mySwiper block-swiper">
            <Swiper
              slidesPerView={1.25}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                350: {
                  slidesPerView: 1.4,
                },
                500: {
                  slidesPerView: 1.5,
                },
                625: {
                  slidesPerView: 1.9,
                },
                808: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 3.5,
                },
              }}
            >
              <SwiperSlide>
                <div className="snacks-card">
                  <img className="snacks-card_img" src={snacks} alt="card" />
                  <div className="snacks-card_description">
                    <div className="snacks-card_description-top">
                      <p className="snacks-card_description-top_name">
                        Ягненок
                      </p>
                      <p className="snacks-card_description-top_weight">
                        Вес: 225 г
                      </p>
                    </div>
                    <p className="snacks-card_description-txt">
                      Фаршированный гречневой кашей, курагой, апельсином и
                      зеленым яблоком
                    </p>
                    <div className="snacks-card_description-bottom">
                      <p className="snacks-card_description-bottom_price">
                        620 ₽
                      </p>
                      <button
                        type="button"
                        className="snacks-card_description-bottom_btn"
                      >
                        В корзину
                        <img src={cardBtn} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="snacks-card">
                  <img className="snacks-card_img" src={snacks} alt="card" />
                  <div className="snacks-card_description">
                    <div className="snacks-card_description-top">
                      <p className="snacks-card_description-top_name">
                        Ягненок
                      </p>
                      <p className="snacks-card_description-top_weight">
                        Вес: 225 г
                      </p>
                    </div>
                    <p className="snacks-card_description-txt">
                      Фаршированный гречневой кашей, курагой, апельсином и
                      зеленым яблоком
                    </p>
                    <div className="snacks-card_description-bottom">
                      <p className="snacks-card_description-bottom_price">
                        620 ₽
                      </p>
                      <button
                        type="button"
                        className="snacks-card_description-bottom_btn"
                      >
                        В корзину
                        <img src={cardBtn} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="snacks-card">
                  <img className="snacks-card_img" src={snacks} alt="card" />
                  <div className="snacks-card_description">
                    <div className="snacks-card_description-top">
                      <p className="snacks-card_description-top_name">
                        Ягненок
                      </p>
                      <p className="snacks-card_description-top_weight">
                        Вес: 225 г
                      </p>
                    </div>
                    <p className="snacks-card_description-txt">
                      Фаршированный гречневой кашей, курагой, апельсином и
                      зеленым яблоком
                    </p>
                    <div className="snacks-card_description-bottom">
                      <p className="snacks-card_description-bottom_price">
                        620 ₽
                      </p>
                      <button
                        type="button"
                        className="snacks-card_description-bottom_btn"
                      >
                        В корзину
                        <img src={cardBtn} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="snacks-card">
                  <img className="snacks-card_img" src={snacks} alt="card" />
                  <div className="snacks-card_description">
                    <div className="snacks-card_description-top">
                      <p className="snacks-card_description-top_name">
                        Ягненок
                      </p>
                      <p className="snacks-card_description-top_weight">
                        Вес: 225 г
                      </p>
                    </div>
                    <p className="snacks-card_description-txt">
                      Фаршированный гречневой кашей, курагой, апельсином и
                      зеленым яблоком
                    </p>
                    <div className="snacks-card_description-bottom">
                      <p className="snacks-card_description-bottom_price">
                        620 ₽
                      </p>
                      <button
                        type="button"
                        className="snacks-card_description-bottom_btn"
                      >
                        В корзину
                        <img src={cardBtn} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="snacks-card">
                  <img className="snacks-card_img" src={snacks} alt="card" />
                  <div className="snacks-card_description">
                    <div className="snacks-card_description-top">
                      <p className="snacks-card_description-top_name">
                        Ягненок
                      </p>
                      <p className="snacks-card_description-top_weight">
                        Вес: 225 г
                      </p>
                    </div>
                    <p className="snacks-card_description-txt">
                      Фаршированный гречневой кашей, курагой, апельсином и
                      зеленым яблоком
                    </p>
                    <div className="snacks-card_description-bottom">
                      <p className="snacks-card_description-bottom_price">
                        620 ₽
                      </p>
                      <button
                        type="button"
                        className="snacks-card_description-bottom_btn"
                      >
                        В корзину
                        <img src={cardBtn} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <Contacts />
    </main>
  );
}

export default Card;
