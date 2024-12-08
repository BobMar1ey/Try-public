import React, { useState } from "react";
import logo from "../../img/Header/logo.png";
import LogIn from "../../img/Header/logIn.png";
import Search from "../../img/Header/search.png";
import "./Header.css";
export default function Header() {
  const [burger, setBurger] = useState("");
  return (
    <header className="header ">
      <div className="header__container">
        <div className="header__row">
          <div className="header__left">
            <a href="/#" className="header__logo-box">
              <img className="header__logo" alt="logo" src={logo} />
            </a>

            <nav className={`header__nav-bar ${burger ? "active" : ""}`}>
              <ul className="header__list">
                <li className="header__item">
                  <a className="header__link" href="/#">
                    Каталог
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="/#Slider">
                    Галерея
                  </a>
                </li>
                <li className="header__item">
                  <a className="header__link" href="/#">
                    О лаборатории
                  </a>
                </li>
                <li className="header__item">
                  <a href="/#Form" className="header__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`header__burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__right">
            <a href="/#">
              <img className="header__img" alt="search" src={Search} />
            </a>
            <a href="/#">
              <img className="header__img" alt="LogIn" src={LogIn} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
