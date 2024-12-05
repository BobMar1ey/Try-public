import React from "react";
import "./Artifacts.css"
export default function Artifacts() {
  return (
    <section className="artifacts">
      <div className="artifacts__container">
        <div className="artifacts__title-box">
          <h2 className="artifacts__main-title">Новые артефакты</h2>
        </div>
        <div className="artifacts__bottom-row">
          <div className="artifacts__img-box">
            <img src="" alt="" />
          </div>
          <div className="artifacts__text-box">
            <div className="artifacts__text-top">
            <h3 className="artifacts__title">Kurische Nehrung 24</h3>
            <p className="artifacts__text">
              Вот вам яркий пример современных тенденций - начало повседневной
              работы по формированию позиции выявляет срочную потребность
              методов управления процессами.
              <br />
              <br />
              Есть над чем задуматься: представители современных социальных
              резервов своевременно верифицированы.
            </p>
            </div>
           
            <a href="/#" className="artifacts__button">
              Читать далее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
