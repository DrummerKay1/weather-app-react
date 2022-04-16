import React from "react";
import "./ForecastDay.css";
export default function ForecastDay(props) {
  let imgUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <h6>{day()}</h6>
      <div className="forecastImg">
        <img src={imgUrl} alt={props.data.weather.description} className="" />
      </div>
      <div className="temp">
        {Math.round(props.data.temp.max)}
        °
        <br />
        <small>{Math.round(props.data.temp.min)}°</small>
      </div>
    </div>
  );
}
