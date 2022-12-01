import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

import logo from "../assets/LOGOS.svg";
import location from "../assets/Location.svg";
import search from "../assets/Search.svg";
import calling from "../assets/Calling.svg";
import burgerBasket from "../assets/burger-basket.svg";

function Header() {
  const { items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const [modal, setModal] = React.useState(true);
  
  return (
    <header>
      <div className="container">
        {modal && <Modal setModal={setModal} />}
        <div className="header-block">
          <nav>
            <div className="burger-menu">
              <BurgerMenu right  isOpen={ true } pageWrapId={"page-wrap"}/>
            </div>
            <div id="page-wrap" className="nav-navigation">
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
                <span className="nav-basket_amount">{totalCount} </span>
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
