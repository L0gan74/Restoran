import { Link } from "react-router-dom";
import React from "react";
import { SearchContext } from "./Main";

import Modal from "./Modal";

import logo from "../assets/LOGOS.svg";
import burgerMenu from "../assets/burger-menu.svg";
import location from "../assets/Location.svg";
import search from "../assets/Search.svg";
import calling from "../assets/Calling.svg";
import burgerBasket from "../assets/burger-basket.svg";

function Header() {
  const [modal, setModal] = React.useState(true);
  //const { count, setCount } = React.useContext(SearchContext);

  return (
    <header>
      <div className="container">
        {modal && <Modal setModal={setModal} />}
        <div className="header-block">
          <nav>
            <div className="burger-menu">
              <img className="burger-menu" src={burgerMenu} alt="burger-menu" />
            </div>
            <div className="nav-navigation">
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <span className="nav-navigation_inp">
                <img className="location" src={location} alt="location" />
                <input type="text" placeholder="Введите адрес доставки" />
                <img className="search" src={search} alt="search" />
              </span>
              <div className="nav-navigation_tel">
                <span className="nav-navigation_tel-calling">
                  <img src={calling} alt="calling" />
                </span>
                <div className="nav-navigation_tel-text">
                  <p className="contact-tel">Контакты:</p>
                  <p className="tel">+7 (917) 51-57-59</p>
                </div>
              </div>
            </div>
            <Link to="/Delievery">
              <button className="nav-basket" onClick={() => setModal(true)}>
                <p>Корзина</p>
                <span className="nav-basket_otd"></span>
                <span className="nav-basket_amount">{/* {count}*/} </span>
              </button>
            </Link>
            <div className="nav-basket_adp">
              <img src={burgerBasket} alt="burger-basket" />
            </div>
          </nav>
          <div className="qefqef">
            <span className="nav-navigation_inp-adp">
              <img className="location" src={location} alt="location" />
              <input type="text" placeholder="Введите адрес доставки" />
              <img className="search" src={search} alt="search" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;