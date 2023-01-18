import React from "react";
import "./Hourly.css";

function Hourly({ data }) {
  const dataList = data.list.slice(0, 8);
  console.log(dataList);
  return (
    <div className="hourly flex flex-row items-center text">
      {dataList.map((data, idx) => {
        return (
          <div key={idx}>
            <div className="hourly-item">
              <img
                alt="weather"
                className="icon-small"
                src={`icons/${data.weather[0].icon}.png`}
              ></img>

              <label className="hour">{data.dt_txt.slice(10, 16)}</label>
              {/* <div className="description"> */}
              <label className="description">
                {data.weather[0].description}
              </label>
              <label className="min-max">
                {Math.round(data.main.temp_min)}°C /
                {Math.round(data.main.temp_max)}
                °C
              </label>
              {/* </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hourly;
