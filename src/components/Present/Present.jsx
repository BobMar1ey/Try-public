import React from "react";
import "./Present.css";

export default function Present() {
  return (
    <section className="present ">
      <div className="present__container">
        <div className="present__row">
          <div className="present__text-box">
            <h1 className="present__title">
              Крупнейшая коллекция природных артефактов
            </h1>
            <p className="present__text">
              Являясь всего лишь частью общей картины, интерактивные прототипы,
              которые представляют собой яркий пример европейского типа
              политической и социальной культуры.
            </p>
            <a href="/#" className="present__button">
              Исследовать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
