import logo from "../images/logo.svg"
import vk from "../images/vk-social-logotype.svg"
import instagram from "../images/instagram_social.svg"
import { Link, useHistory, NavLink } from "react-router-dom";

function Footer() {
  return (
<footer className="footer">
    <div className="footer__container">
      <div className="footer__top">
        <div className="footer__soc">
        <NavLink to="/promo"><img className="footer__logo" src={logo} alt="Лого"/></NavLink>
          <p className="footer__text">Мы в соцсетях</p>
          <ul className="footer__soc-links">
            <ul className="footer__ul"><a className="footer__soc-link" href="https://vk.com/goldentreeru" target="_blank" rel="noreferrer"><img className="footer__soc-img" src={vk} alt="vk"/></a></ul>
            <ul className="footer__ul"><a className="footer__soc-link" href="https://www.instagram.com/goldentree_ru/" target="_blank" rel="noreferrer"><img className="footer__soc-img" src={instagram} alt="instagram"/></a></ul>
          </ul>
        </div>
        <ul className="footer__menu-links">
          <h3 className="footer__title">Компания</h3>
          <li className="footer__menu-link">О нас</li>
          <li className="footer__menu-link">Контакты</li>
        </ul>
        <div className="footer__contact">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__text-contact">Россия, г. Москва, ул. Кантемировская, д.58, 115477</p>
          <p className="footer__text-contact">Режим работы: 9:00-20:00</p>
          <a className="footer__text-contact footer__text-contact_bold" href="#">info@goldentree.ru</a>
          <p className="footer__text-contact footer__text-contact_bold">8 (800) 500-57-96</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© ООО «Голден Три»</p>
        <a className="footer__link" href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;

