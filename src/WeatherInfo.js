import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">

        <h1>{props.data.name}</h1>
          <h4>
            <p className="text-capitalize">{props.data.description}</p>
          </h4>
          <div className="weatherSymbol">
            {" "}
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className=""
              />
          </div>
          <div className="mainTemperature">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            
          </div>
          <ul className="high">
            <li> High of {props.data.highOf}°</li>
            <li>Low of {props.data.lowOf}°</li>
          </ul>
          <ul className="variables">
            <li>Feels like {props.data.feelsLike}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
</div>


    );
}