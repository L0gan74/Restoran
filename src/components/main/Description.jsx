import { Link } from "react-router-dom";
import products1 from "../../assets/description_1.svg";
import products2 from "../../assets/descripton_2.svg";
import products3 from "../../assets/descripton_3.svg";
import products4 from "../../assets/descripton_4.svg";
import fon from "../../assets/description-img.png";

function Description() {
  return (
    <section className="description">
      <div className="container">
        <div className="description-block">
          <div className="description-block_text">
            <h3 className="description-block_text-name">НАШЕ КАФЕ</h3>
            <p className="description-block_text-description">
              Мы расположены в одном из самых живописных мест города — на берегу
              реки, это ваш оазис в черте города, куда можно сбежать от шумного
              и пыльного мегаполиса. Мы, действительно уникальные, ведь все
              продумано до мелочей: проект построен из дикого закарпатского
              сруба, камин в основном зале ресторана и панорамные окна с видом
              на реку, уютные беседки на берегу реки и лучшая видовая террасса,
              шатер с посадкой на 200 человек, сказочный детский домик и
              бассейн.
            </p>
            <Link to="*">
            <button type="button">посмотреть меню</button>
            </Link>
          </div>
          <div className="description-block_img">
            <div className="description-block_img-rectangle">
              <img src={products1} alt="" />
              <p>Свежайшие продукты</p>
            </div>
            <div className="description-block_img-rectangle">
              <img src={products2} alt="" />
              <p>Лучшие повора</p>
            </div>
            <div className="description-block_img-rectangle">
              <img src={products3} alt="" />
              <p>Быстрая доставка</p>
            </div>
            <div className="description-block_img-rectangle">
              <img src={products4} alt="" />
              <p>Свежайшие продукты</p>
            </div>
          </div>
          <img className="fon" src={fon} alt="fon"/>
        </div>
      </div>
    </section>
  );
}

export default Description;
