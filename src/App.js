import "./App.css";
import React, { useState, useRef } from "react";
import FormComponent from "./components/FormComponent";
import WeatherComponent from "./components/WeatherComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

import axios from "axios";
import { BsEmojiSunglasses } from "react-icons/bs";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherNameData, setWeatherNameData] = useState(null);
  const [countryData, setCountryData] = useState("");
  const [nameData, setNameData] = useState("");
  const [surnameData, setSurnameData] = useState("");
  const [agreeData, setAgreeData] = useState("");
  const [coordData, setCoordData] = useState("");
  const [resetweather, setResetWeather] = useState(1);

  const fetchWeather = async (name, surname, country, coord) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&lang=tr&units=metric&appid=(your api key)`
      );

      const weatherDescription = response.data.weather[0].description;
      const temperature = response.data.main.temp;
      const coordlat = response.data.coord.lat;
      const coordlon = response.data.coord.lon;
      const weatherInfo = `Merhaba ${name} ${surname}!`;
      const weatherInfo2 = `${country} hava durumu: ${weatherDescription}, sıcaklık: ${temperature}°C`;
      const weatherInfo3 = `${country} hava durumu: ${weatherDescription}, sıcaklık: ${temperature}°C enlem: ${coordlat} boylam: ${coordlon}`;

      if (coord === "Hayır") {
        setWeatherData(weatherInfo2);
        setWeatherNameData(weatherInfo);
      } else {
        setWeatherData(weatherInfo3);
        setWeatherNameData(weatherInfo);
      }
    } catch (error) {
      setWeatherData("Hava durumu verisi alınamadı.");
      setWeatherNameData("Şehiri kontrol ediniz.");
      console.error("Hava durumu verisi alınamadı: ", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <BsEmojiSunglasses className="sunglasses-icon" />
        <div className="weather-info">
          <p>Adınızı ve soyadınızı öğrenmem için lütfen formu doldurun.</p>
          <WeatherComponent
            weatherNameData={weatherNameData}
            weatherData={weatherData}
            resetweather={resetweather}
          />
        </div>
        <div className="magic-form">
          <FormComponent
            handleSubmit={async (values) => {
              setNameData(values.name);
              setSurnameData(values.surname);
              setCountryData(values.country);
              setCoordData(values.coord);
              await fetchWeather(
                values.name,
                values.surname,
                values.country,
                values.coord
              );
              setResetWeather(0);
            }}
            handleReset={async () => {
              setNameData("");
              setSurnameData("");
              setCountryData("");
              setCoordData("");
              setAgreeData(false);
              setResetWeather(1);
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
