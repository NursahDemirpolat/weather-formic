import React from "react";
import "../App.css";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Header() {
  return (
    <div className="header">
      <div className="icon">
        <TiWeatherPartlySunny className="icon" />
      </div>
      <h2 className="header-title">Hava Durumu Formu</h2>
    </div>
  );
}

export default Header;
