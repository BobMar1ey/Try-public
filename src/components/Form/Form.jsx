import React from "react";
import './Form.css'
export default function Form() {
  return (
    <section id="Form" className="form">
      <div className="form__container">
        <div className="form__content-box">
          <h2 className="form__title">Помочь проекту</h2>
          <p className="form__text">
            Равным образом, экономическая повестка сегодняшнего дня не даёт нам
            иного выбора, кроме определения прогресса профессионального
            сообщества. Как принято считать, элементы политического процесса
            рассмотрены исключительно в разрезе маркетинговых и финансовых
            предпосылок.
          </p>
          <form target="_blank" action="https://formsubmit.co/gladium1992@gmail.com" method="POST" className="form__box">
            <input className="form__input" required name="text" type="text" placeholder="Имя" />
            <input className="form__input" required name="email" type="email" placeholder="Email" />
            <button type="submit" className="form__button">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}
