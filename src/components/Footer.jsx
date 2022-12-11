import { Link } from "react-router-dom";

import logo from "../assets/LOGOS.svg";
import climb from "../assets/climb.svg";

function Footer() {
  return (
    <footer>
      <div className="climb">
        <img src={climb} alt="climb" />
      </div>
      <div className="container">
        <div className="footer-block">
          <div className="footer-left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p className="termsofuse">
              © L0gan74
            </p>
            <ul>
              <li>Пользовательское соглашение</li>
              <li>Карта сайта</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div className="footer-navigation">
            <ul>
              <Link to="/">
                <li>О ресторане</li>
              </Link>
              <Link to="/TermsOfDelivery">
                <li>Условия доставки</li>
              </Link>
              <Link to="/TermsOfDelivery">
                <li>Возврат товара</li>
              </Link>
              <Link to="/Stock">
                <li>Акции</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
