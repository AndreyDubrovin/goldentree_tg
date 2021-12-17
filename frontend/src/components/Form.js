import React, { useDebugValue } from "react";
import { useFormWithValidation } from "./Validation";
import arrow from '../images/arrow2.svg';
function Form(props) {
  const [text, setText] = React.useState("Загрузить фото с отзывом");
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
          <p className="info-form__text">
            ПРИВЕТ, БЛАГОДАРИМ ТЕБЯ ЗА ПОКУПКУ И ХОТИМ НЕМНОГО РАССКАЗАТЬ ОБ
            УСЛОВИЯХ КОНКУРСА ОТ ООО «ГОЛДЕН ТРИ». ПРОСИМ ТЕБЯ ВНИМАТЕЛЬНО
            ОЗНАКОМИТЬСЯ С УСЛОВИЯМИ КОНКУРСА И ВЫПОЛНИТЬ ВСЕ-ВСЕ ШАГИ, ЧТОБЫ
            ПОЛУЧИТЬ ВОЗМОЖНОСТЬ ВЫИГРАТЬ <b>IPHONE 13 PRO</b>.
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
          <b>ШАГ 3. </b><br/>ПОДПИШИСЬ НА НАШ АККАУНТ В ИНСТАГРАМ: <a className="info-form__link" href="https://www.instagram.com/goldentree_ru/" target='_blank' rel="noreferrer">@GOLDENTREE_RU</a>
          </p>
          <p className="info-form__text">
          <b>ШАГ 4. </b><br/>ОТСКАНИРУЙ QR-КОД ВНУТРИ БРОШЮРЫ И ЗАПОЛНИ ВСЕ НЕОБХОДИМЫЕ
            ДАННЫЕ ДЛЯ УЧАСТИЯ В КОНКУРСЕ: ФАМИЛИЯ, ИМЯ, ОТЧЕСТВО, АККАУНТ В
            ИНСТАГРАМЕ, ТЕЛЕФОН, УНИКАЛЬНЫЙ КОД, СКРИНШОТ ОТЗЫВА НА ТОВАР.
          </p>
          <p className="info-form__text">
          <b>ШАГ 5. </b><br/>РОЗЫГРЫШ ПРОЙДЕТ <b>08.03.2022</b> В ПРЯМОМ ЭФИРЕ В
            ИНСТАГРАМ-АККАУНТЕ <a className="info-form__link" href="https://www.instagram.com/goldentree_ru/" target='_blank' rel="noreferrer">@GOLDENTREE_RU</a>. <br/>• КАЖДЫЙ ПОКУПАТЕЛЬ МОЖЕТ
            ЗАРЕГИСТРИРОВАТЬ НЕОГРАНИЧЕННОЕ КОЛИЧЕСТВО УНИКАЛЬНЫХ КОДОВ, ПОЭТОМУ
            ЧЕМ БОЛЬШЕ ПОКУПОК ВЫ СОВЕРШАЕТЕ, ТЕМ БОЛЬШЕ ВЕРОЯТНОСТЬ ВЫИГРАТЬ
            IPHONE 13 PRO. <br/>• КАЖДЫЙ ЗАРЕГИСТРИРОВАННЫЙ УНИКАЛЬНЫЙ КОД НЕ ТЕРЯЕТ
            СВОЮ АКТУАЛЬНОСТЬ В ДАЛЬНЕЙШИХ РОЗЫГРЫШАХ ОТ ПОСТАВЩИКА ООО «ГОЛДЕН
            ТРИ». ИЗ УЧАСТИЯ В ДРУГИХ РОЗЫГРЫШАХ ОТ ПОСТАВЩИКА ООО «ГОЛДЕН ТРИ»
            ВЫБЫВАЕТ ТОЛЬКО УНИКАЛЬНЫЙ КОД ВЫИГРАВШЕГО УЧАСТНИКА. <br/>• ООО «ГОЛДЕН
            ТРИ» ИМЕЕТ ПРАВО ЗАПРАШИВАТЬ ДОПОЛНИТЕЛЬНЫЕ ДАННЫЕ ДЛЯ ПОДТВЕРЖДЕНИЯ
            ЛИЧНОСТИ ВЫИГРАВШИХ УЧАСТНИКОВ.
          </p>
        </div>
      </div>
      <form className="form" ref={form} onSubmit={handleSubmit} noValidate>
        <h1 className="form__title">Регистрация в розыгрыше</h1>
        <input
          className="form__text"
          type="text"
          name="surname"
          placeholder="Фамилия*"
          pattern="[А-Яа-яЁё-]{1,}"
          alue={validation.values.surname}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.surname}</span>
        <input
          className="form__text"
          type="text"
          name="name"
          placeholder="Имя*"
          pattern="[А-Яа-яЁё-]{1,}"
          value={validation.values.name}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.name}</span>
        <input
          className="form__text"
          type="text"
          name="patronymic"
          placeholder="Отчество*"
          pattern="[А-Яа-яЁё-]{1,}"
          value={validation.values.patronymic}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.patronymic}</span>
        <input
          className="form__text"
          type="text"
          name="instagram"
          placeholder="Instagram*"
          pattern="@[a-zA-Z0-9._]{1,}"
          value={validation.values.instagram}
          onClick={validation.handleInstagram}
          onFocus={validation.handleClickInsta}
          onChange={validation.handleChange}
          required
        />
        <span className="form-error">{validation.errors.instagram}</span>
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
      {/*       </div> */}
    </>
  );
}

export default Form;
