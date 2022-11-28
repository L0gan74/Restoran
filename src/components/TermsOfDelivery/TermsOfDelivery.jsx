import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import map from "../../assets/mapcontact.png";

const dataCollection = [
  {
    question: "У наших курьеров всегда должна быть сдача!",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
  {
    question: "Вам что-то не довезли?",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
  {
    question: "Если появились замечания",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
  {
    question: "Если появились замечания",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
  {
    question: "Если появились замечания",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
  {
    question: "Если появились замечания",
    answer: `Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам`,
  },
];

function TermsOfDelivery() {
  const [accordion, setActiveAccordion] = React.useState(1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <main>
      <section className="contact">
        <div className="container">
          <div class="snacks-name">
            <span class="snacks-name_rectangle"></span>
            <h2>Холодные закуски</h2>
          </div>
          <div className="contact-block">
            <div className="contact-block_map-adp">
              <img src={map} alt="" />
            </div>
            <div className="contact-block_accordion">
              {dataCollection.map((item, index) => (
                <div
                  className="contact-block_accordion-rectangle"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="contact-block_accordion-rectangle_top">
                    <h3 className={accordion === index ? "activepopup" : ""}>
                      {item.question}
                    </h3>
                    <div>
                      {accordion === index ? (
                        <span className="notactively">-</span>
                      ) : (
                        <span className="actively">+</span>
                      )}
                    </div>
                  </div>
                  <div className="contact-block_accordion-rectangle_bottom">
                    <p
                      className={
                        accordion === index ? "activepopup" : "inactive"
                      }
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-block_map">
              <img src={map} alt="" />
            </div>
          </div>
          <div className="contact-description">
            <div className="contact-description_time">
              <div className="contact-description_time-delivery">
                <p>График работы доставки:</p>
                <span>с 10:00-21:00</span>
              </div>
              <div className="contact-description_time-work">
                <p>График работы доставки:</p>
                <span>с 10:00-21:00</span>
              </div>
            </div>
            <div className="contact-description_order">
              <p className="contact-description_order-minimal">
                Минимальный заказ:
              </p>
              <p className="contact-description_order-description">
                Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                Доставка оператором такси от любой суммы заказа - по тарифам
                перевозчика.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsOfDelivery;
