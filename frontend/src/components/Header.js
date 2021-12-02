import React from "react";
import logo from "../images/logo.svg";
import burger from "../images/burger.svg";
import cart from "../images/cart.svg";
import wb from "../images/wb-icon.png";
import { Link, useHistory, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
    <div className="header__container">
      <div className="header__top">
        <div className="header__top-left">
          <p className="header__telephone">8 (800) 500-57-96</p>
          <p className="header__text">Магазин корейской косметики</p>
        </div>
        <NavLink  to="/promo"><img className="header__logo" src={logo} alt=""/></NavLink>
          <ul className="header__top-right-links">
            <li><NavLink  to="/promo" activeClassName="" className="header__top-right-link">Розыгрыш</NavLink></li>
            <li><a href="https://www.wildberries.ru/seller/8936" target="_blank" rel="noreferrer" activeClassName="" className="header__top-right-link">Мы на WB</a></li>
            <li><NavLink  to="/cards" activeClassName="" className="header__top-right-link">Лучшие предложения на WB</NavLink></li>
          </ul>
      </div>
{/*       <ul className="header__bottom">
        <li className="header__bottom-link">Бренды</li>
        <li className="header__bottom-link">Очищение</li>
        <li className="header__bottom-link">Уход за лицом</li>
        <li className="header__bottom-link">Тело и Волосы</li>
        <li className="header__bottom-link">Макияж</li>
        <li className="header__bottom-link">Другое</li>
        <li className="header__bottom-link">Подарки</li>
        <li className="header__bottom-link">Скидки</li>
        <li className="header__bottom-link">Новинки</li>
      </ul> */}
    </div>

    <div className="header__mobile-container">
      <img className="header__mobile-burger" src={burger} alt="" onClick={props.burger}></img>
      <img className="header__mobile-logo" src={logo} alt=""/>
      <img className="header__mobile-cart" src={cart} alt=""></img>
    </div>
  </header>
  );
}

export default Header;
