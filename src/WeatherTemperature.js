import React, { useState } from "react";
import "./WeatherTemperature.css";


export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("fahrenheit");
    
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "fahrenheit"){
        return(
            <div className="WeatherTemperature">
            {props.fahrenheit}
            <span className="unit">°F
             | <a href="/" onClick={showCelcius}>°C</a>
            </span>
            </div>
        );

    }else {
        let celcius = (props.fahrenheit - 32) * 5/9; 
        return (
          <div className="WeatherTemperature">
            {Math.round(celcius)}
            <span className="unit">
              <a href="/" onClick={showFahrenheit}>
              °F</a>{" "}|°C
            </span>
          </div>
        );
    }
}