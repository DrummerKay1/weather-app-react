import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
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
    </div>
  );
}
