import { Link, useHistory, NavLink } from "react-router-dom";

function BurgerMenu(props) {

  return (
            <div className={`curtain ${props.burger ? "curtain__active": ""}`}>
              <div className="curtain__container">
                <div className="curtain__close" onClick={props.curtainClose}></div>
                <div className="curtain__links">
                <NavLink  to="/promo" activeClassName="" className="curtain__link" onClick={props.curtainClose}>Розыгрыш</NavLink>
            <a href="https://www.wildberries.ru/seller/8936" target="_blank" rel="noreferrer" activeClassName="" className="curtain__link">Мы на WB</a>
            <NavLink  to="/cards" activeClassName="" className="curtain__link" onClick={props.curtainClose}>Лучшение цены на WB</NavLink>
                </div>
                </div>
              </div>
  );
}

export default BurgerMenu;
