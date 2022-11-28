import networks1 from "../../assets/networks1.svg";
import networks2 from "../../assets/networks2.svg";
import networks3 from "../../assets/networks3.svg";
import networks4 from "../../assets/networks4.svg"

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts-block">
          <h3>контакты</h3>
          <hr />
          <div className="contacts-block_adres">
            <img src="./img/Location-map.svg" alt="" />
            <div className="contacts-block_adres-txt">
              <p>
                Наш адрес:
                <span>
                  МО, городской округ Красногорск, село Ильинкое,
                  Экспериментальная улица, 10
                </span>
              </p>
            </div>
          </div>
          <div className="contacts-block_pochta">
            <img src="./img/Message.svg" alt="" />
            <div className="contacts-block_pochta-txt">
              <p>
                Наша почта:
                <span> ggtrfr@bk.ru </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="contacts-block_booking">
            <button className="booking" type="button">
              ЗАБРОНИРОВАТЬ СТОЛ
            </button>
            <button className="route" type="button">
              ПРОЛОЖИТЬ МАРШРУТ
            </button>
            <div className="contacts-block_booking-txt">
              <h4>+7 (917) 510-57-59</h4>
              <p>Звоните или оставляйте заявку</p>
            </div>
          </div>
          <div className="contacts-block_network">
            <p>Мы в соц сетях:</p>
            <ul>
              <li>
                <img src={networks1} alt="" />
              </li>
              <li>
                <img src={networks2} alt="" />
              </li>
              <li>
                <img src={networks3} alt="" />
              </li>
              <li>
                <img src={networks4} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
