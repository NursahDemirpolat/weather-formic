import React from "react";
import "../App.css";

function WeatherComponent({ weatherData, weatherNameData, resetweather }) {
  return resetweather === 0 ? (
    <p className="information">
      {weatherNameData}
      <br />
      {weatherData}
    </p>
  ) : null;
}

export default WeatherComponent;
