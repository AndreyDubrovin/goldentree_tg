import { Link, useHistory, NavLink } from "react-router-dom";

function Success(props) {


  return (
            <div className={`success ${props.success ? "success_active": ""}`}>
              <h1 className='success__title'>Спасибо!</h1>
              <p className='success__subtitle'>Вы успешно зарегистрировались!</p>
              <p className='success__text'>Ниже вы можете ознакомиться с интересными предложениями</p>
              <a href="https://www.wildberries.ru/seller/8936" target="_blank" rel="noreferrer" activeClassName="" className="header__top-right-link"><button className='success__button'>Мы на ВБ</button></a>
              </div>
  );
}

export default Success;
