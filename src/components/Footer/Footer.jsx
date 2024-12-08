import React from "react";
import "./Footer.css";

import f from "../../img/Footer/f.png";
import i from "../../img/Footer/i.png";
import y from "../../img/Footer/y.png";
import x from "../../img/Footer/x.png";
export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__container">
        <div className="footer__top-row">
          <a href="/#">
            <img src={f} alt="facebook" />
          </a>
          <a href="/#">
            <img src={i} alt="instagram" />
          </a>
          <a href="/#">
            <img src={y} alt="youtube" />
          </a>
          <a href="/#">
            <img src={x} alt="x" />
          </a>
        </div>
        <div className="footer__bottom">
          <span>f&b ® 2020</span>
        </div>
      </div>
    </footer>
  );
}
