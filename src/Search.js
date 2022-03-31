import React from "react";
import "./Search.css";
export default function Search() {
  let weatherData = {
    city: "San Diego",
    temperature: 66,
    date: "Tuesday 16:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    highOf: 66,
    lowOf: 55,
    feelsLike: 66,
    humidity: 20,
    wind: 2,
  };
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
      <h5> Last updated: {weatherData.date}</h5>
      <div className="centerElement">
        <h1>{weatherData.city}</h1>
        <h4>{weatherData.description}</h4>
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
            <h7>Sat</h7>
            <div className="img">☁</div>
            <div className="temp">
              67°
              <br />
              <small> 54°</small>
            </div>
          </div>
          <div className="col">
            <h7>Sun</h7>
            <div className="img">🌤</div>
            <div className="temp">
              70°
              <br />
              <small>52°</small>
            </div>
          </div>
          <div className="col">
            <h7>Mon</h7>
            <div className="img">🌤</div>
            <div className="temp">
              66°
              <br />
              <small> 52°</small>
            </div>
          </div>
          <div className="col">
            <h7>Tue</h7>
            <div className="img">🌤</div>
            <div className="temp">
              65°
              <br />
              <small> 49°</small>
            </div>
          </div>
          <div className="col">
            <h7>Wed</h7>
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
}
