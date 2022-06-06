import React, { useDebugValue } from "react";
import { useFormWithValidation } from "./Validation";
import arrow from '../images/arrow2.svg';
function Form(props) {
  const [text, setText] = React.useState("Загрузить фото/скриншот с отзывом на купленный товар");
  const [conditions, setconditions] = React.useState(false);
  const form = React.useRef(null);
  const validation = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(form.current);
    props.form(data);
  }

  function handleChange(e) {
    validation.handleChangeFile(e);
    if (e.target.files.length > 0) {
      setText(e.target.files[0].name);
    } else {
      setText("Выберите фото c отзывом");
    }
  }

  function handleClick() {
    setconditions(!conditions);
  }


  return (
    <>
      {/*       <div className="info-form">
        <div className="info-form__text">
          <h2 className="info-form__title">Условия участия</h2>
        </div>
        <img className="info-form__img"></img>
      </div> */}
      {/*       <div className="form-block"> */}
      <div className="info-form">
        <h2 className="info-form__title" onClick={handleClick}>Условия конкурса<img className={`info-form__arrow ${conditions === true ? 'info-form__arrow_transform' :''}`} src={arrow} alt="стрелка"></img></h2>
        <div className={`info-form__text-block ${conditions === true ? 'info-form__text-block_active' :''}`}>
{/*           <p className="info-form__text">
             <b>В связи с нестабильной экономической ситуацией проведение розыгрыша переносится на неопределённый срок (ориентировочно на 01.06.2022). Мы продолжаем регистрировать и принимать ваши  заявки на участие в конкурсе. Благодарим за доверие, понимание и активность в наших соц сетях.</b>.
          </p> */}
          <p className="info-form__text">
            ПРИВЕТ, БЛАГОДАРИМ ТЕБЯ ЗА ПОКУПКУ И ХОТИМ НЕМНОГО РАССКАЗАТЬ ОБ
            УСЛОВИЯХ КОНКУРСА ОТ ООО «ГОЛДЕН ТРИ». ПРОСИМ ТЕБЯ ВНИМАТЕЛЬНО
            ОЗНАКОМИТЬСЯ С УСЛОВИЯМИ КОНКУРСА И ВЫПОЛНИТЬ ВСЕ-ВСЕ ШАГИ, ЧТОБЫ
            ПОЛУЧИТЬ ВОЗМОЖНОСТЬ ВЫИГРАТЬ <b>ПОДАРОК</b>.
          </p>
          <p className="info-form__text">
            <b>ШАГ 1. </b><br/>В ТОВАРАХ ОТ ПОСТАВЩИКА ООО "ГОЛДЕН ТРИ" НАЙДИ ВЛОЖЕНИЕ С
            УНИКАЛЬНЫМ КОДОМ *НА ДАННЫЙ МОМЕНТ НЕ ВСЕ ТОВАРЫ ОТ ПОСТАВЩИКА ООО
            «ГОЛДЕН ТРИ» СОДЕРЖАТ ВЛОЖЕНИЕ С УНИКАЛЬНЫМ КОДОМ.
          </p>
          <p className="info-form__text">
          <b>ШАГ2. </b><br/>ОСТАВЬ ОТЗЫВ НА ПРИОБРЕТЕННЫЙ ТОВАР НА САЙТЕ WILDBERRIES И
            СДЕЛАЙ СКРИНШОТ ОТЗЫВА *ЕСЛИ ВЫ КУПИЛИ ТОВАР ПОВТОРНО И УЖЕ
            ОСТАВЛЯЛИ ОТЗЫВ, ТО НЕОБХОДИМО ПРЕДОСТАВИТЬ СКРИНШОТ ПРОШЛОГО
            ОТЗЫВА. ВНИМАНИЕ: НАШ МЕНЕДЖЕР МОЖЕТ ЗАПРОСИТЬ ПОДТВЕРЖДЕНИЕ ВАШЕЙ
            ЛИЧНОСТИ В ПРОФИЛЕ ВБ.
          </p>
          <p className="info-form__text">
          <b>ШАГ 3. </b><br/>ПОДПИШИСЬ НА НАШ АККАУНТ В<a className="info-form__link" href="https://t.me/goldentree_russia" target='_blank' rel="noreferrer">Telegram</a>
          </p>
          <p className="info-form__text">
          <b>ШАГ 4. </b><br/>ОТСКАНИРУЙ QR-КОД ВНУТРИ БРОШЮРЫ И ЗАПОЛНИ ВСЕ НЕОБХОДИМЫЕ
            ДАННЫЕ ДЛЯ УЧАСТИЯ В КОНКУРСЕ: ФАМИЛИЯ, ИМЯ, ОТЧЕСТВО, АККАУНТ В
            ИНСТАГРАМЕ, ТЕЛЕФОН, УНИКАЛЬНЫЙ КОД, СКРИНШОТ ОТЗЫВА НА ТОВАР.
          </p>
          <p className="info-form__text">
          <b>ШАГ 5. </b><br/>РОЗЫГРЫШ ПРОЙДЕТ В ПРЯМОМ ЭФИРЕ В
            ТЕЛЕГРАМ-АККАУНТЕ <a className="info-form__link" href="https://t.me/goldentree_russia" target='_blank' rel="noreferrer">Telegram</a>. <br/>• КАЖДЫЙ ПОКУПАТЕЛЬ МОЖЕТ
            ЗАРЕГИСТРИРОВАТЬ НЕОГРАНИЧЕННОЕ КОЛИЧЕСТВО УНИКАЛЬНЫХ КОДОВ, ПОЭТОМУ
            ЧЕМ БОЛЬШЕ ПОКУПОК ВЫ СОВЕРШАЕТЕ, ТЕМ БОЛЬШЕ ВЕРОЯТНОСТЬ ВЫИГРАТЬ
            ПОДАРОК. <br/>• КАЖДЫЙ ЗАРЕГИСТРИРОВАННЫЙ УНИКАЛЬНЫЙ КОД НЕ ТЕРЯЕТ
            СВОЮ АКТУАЛЬНОСТЬ В ДАЛЬНЕЙШИХ РОЗЫГРЫШАХ ОТ ПОСТАВЩИКА ООО «ГОЛДЕН
            ТРИ». ИЗ УЧАСТИЯ В ДРУГИХ РОЗЫГРЫШАХ ОТ ПОСТАВЩИКА ООО «ГОЛДЕН ТРИ»
            ВЫБЫВАЕТ ТОЛЬКО УНИКАЛЬНЫЙ КОД ВЫИГРАВШЕГО УЧАСТНИКА. <br/>• ООО «ГОЛДЕН
            ТРИ» ИМЕЕТ ПРАВО ЗАПРАШИВАТЬ ДОПОЛНИТЕЛЬНЫЕ ДАННЫЕ ДЛЯ ПОДТВЕРЖДЕНИЯ
            ЛИЧНОСТИ ВЫИГРАВШИХ УЧАСТНИКОВ. СРОК ПРОВЕДЕНИЯ КОНКУРСА УТОЧНЯЕТСЯ.
          </p>
        </div>
      </div>
      <form className="form" ref={form} onSubmit={handleSubmit} noValidate>
        <h1 className="form__title">Регистрация в розыгрыше</h1>
        <p className="form__info">Внеси свою Фамилию (А-я)</p>
        <input
          className="form__text"
          type="text"
          name="surname"
          placeholder="Фамилия*"
          value={validation.values.surname}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.surname}</span>
        <p className="form__info">Внеси своё Имя (А-я)</p>
        <input
          className="form__text"
          type="text"
          name="name"
          placeholder="Имя*"
          value={validation.values.name}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.name}</span>
        <p className="form__info">Внеси своё Отчество (А-я)</p>
        <input
          className="form__text"
          type="text"
          name="patronymic"
          placeholder="Отчество*"
          value={validation.values.patronymic}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.patronymic}</span>
        <p className="form__info">Подпишись на наш <a className="info-form__link" href="https://t.me/goldentree_russia" target='_blank' rel="noreferrer">Telegram</a> и внеси свой аккаунт (@xxx)</p>
        <input
          className="form__text"
          type="text"
          name="telegram"
          placeholder="Telegram*"
          pattern="@[a-zA-Z0-9._]{1,}"
          value={validation.values.telegram}
          onClick={validation.handleInstagram}
          onFocus={validation.handleClickInsta}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.telegram}</span>
        <p className="form__info">Внеси номер телефона (0-9) пример: 89xxxxxxxxx</p>
        <input
          className="form__text"
          type="tel"
          name="telephone"
          placeholder="Телефон*"
          pattern="[0-9]{5,}"
          value={validation.values.telephone}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.telephone}</span>
        <p className="form__info">Внеси уникальный код с брошюры (0-9)</p>
        <input
          className="form__text"
          type="number"
          name="code"
          placeholder="Уникальный код*"
          value={validation.values.code}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.code}</span>
        <label className="form__label">
          <input
            className="form__input-file"
            name="feedbackWb"
            type="file"
            onChange={handleChange}
            required
          />
          <span className="form__input-file-visible"></span>
          <span className="form__text-file">{text}</span>
        </label>
        <button
          className="form__button"
          type="submit"
          disabled={!validation.isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className={`form-err ${props.err ? "form-err_active" : ""}`}>Произошла ошибка, попробуйте зарегистрироваться позже</p>
    </>
  );
}

export default Form;
