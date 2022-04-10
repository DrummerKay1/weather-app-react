import axios from "axios";
import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
      setForecast(response.data.list);
      setLoaded(true);
    };
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
              <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
      const apiKey = "989bcbe68d0cc1b00b25e60364c50c46";
      let units = "Imperial";
      let latitude = props.coord.lat;
      let longitude = props.coord.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
      console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return "Loading Forecast...";
  }
}
