import React from "react";
import { Link } from "react-router-dom";
import TEXTS from "../../constants/texts";
import './header.scss';
const Header = () => (
    <nav>
      <div className="header">
          <div className="header__title-container">
              <h1 className="header__title-text">{TEXTS.APP_TITLE}</h1>
          </div>
          <div className="header__bar-container">
              <ul>
                  <li><Link to="/">{TEXTS.HOME}</Link></li>
                  <li><Link to="/maps">{TEXTS.MAPS}</Link></li>
              </ul>
          </div>
      </div>
    </nav>
);
export default Header;