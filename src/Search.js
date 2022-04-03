import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Search.css";
export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
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
  if (weatherData.ready) {
    return (
      <div className="container">
        <form className="Search">
          <div className="row">
            <div className="col-md-4">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
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
          <h1>{weatherData.name}</h1>
          <h4>
            <p className="text-capitalize">{weatherData.description}</p>
          </h4>
          <div className="weatherSymbol">
            {" "}
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className=""
            />
          </div>
          <div className="mainTemperature">
            {weatherData.temperature}°F | <small>°C</small>
          </div>
          <ul className="high">
            <li> High of {weatherData.highOf}°</li>
            <li>Low of {weatherData.lowOf}°</li>
          </ul>
          <ul className="variables">
            <li>Feels like {weatherData.feelsLike}°</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
        <div className="forecast">
          <div className="row">
            <div className="col">
              <h6>Sat</h6>
              <div className="img">☁</div>
              <div className="temp">
                67°
                <br />
                <small> 54°</small>
              </div>
            </div>
            <div className="col">
              <h6>Sun</h6>
              <div className="img">🌤</div>
              <div className="temp">
                70°
                <br />
                <small>52°</small>
              </div>
            </div>
            <div className="col">
              <h6>Mon</h6>
              <div className="img">🌤</div>
              <div className="temp">
                66°
                <br />
                <small> 52°</small>
              </div>
            </div>
            <div className="col">
              <h6>Tue</h6>
              <div className="img">🌤</div>
              <div className="temp">
                65°
                <br />
                <small> 49°</small>
              </div>
            </div>
            <div className="col">
              <h6>Wed</h6>
              <div className="img">🌤</div>
              <div className="temp">
                65°
                <br />
                <small> 49°</small>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://github.com/DrummerKay1/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >
            Open-Sourced by Kayla Neuss
          </a>
        </div>
      </div>
    );
  } else {
    const apiKey = "989bcbe68d0cc1b00b25e60364c50c46";
    let units = "Imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
