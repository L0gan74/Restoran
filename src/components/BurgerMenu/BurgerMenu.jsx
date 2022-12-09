import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const showSettings = (event) => {
    event.preventDefault();
  };
  return (
    <Menu>
      <div className="burger-menu__comp"></div>
      <Link to="/" className="menu-item" href="/">
        О ресторане
      </Link>
      <div className="header__actions-lang">
                  <div className="dropdown dropdown-lang active">
                    <img src="./img/img_news/lang.svg" alt="lang" />
                    <button className="dropbtn__lang">EN</button>
                    <div className="dropdown-content__lang">
                      <span>EN</span>
                      <span>RU</span>
                      <span>DE</span>
                    </div>
                  </div>
                </div>
      <Link to="/TermsOfDelivery" className="menu-item" href="/about">
        Условия доставки
      </Link>
      <Link to="/TermsOfDelivery" className="menu-item" href="/contact">
        Возврат товара
      </Link>
      <Link onClick={showSettings} className="menu-item--small" href="">
        Акции
      </Link>
      <Link className="menu-item" href="/contact">
        +7 (917) 51-57-59
      </Link>
    </Menu>
  );
}

export default BurgerMenu;
