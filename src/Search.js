import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import "./Search.css";
export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      highOf: Math.round(response.data.main.temp_max),
      lowOf: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "989bcbe68d0cc1b00b25e60364c50c46";
    let units = "Imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="search">
          <div className="row">
            <div className="col-md-4">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Current Location"
                className="form-control btn btn-primary locationButton"
              />
            </div>
          </div>
        </form>
        <h5>
          {" "}
          Last Updated: <FormattedDate date={weatherData.date} />
        </h5>
        <div className="centerElement">
          <WeatherInfo data={weatherData} />
        </div>
        <Forecast /> 
          <br />
          <a
            href="https://github.com/DrummerKay1/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >Open-Sourced by Kayla Neuss
          </a>
        </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
