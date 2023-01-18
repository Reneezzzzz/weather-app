import TimeAndLocation from "../TimeAndLocation";
import "./current-weather.css";
import {
  UilTemperature,
  UilTear,
  // UilSun,
  UilWind,
  // UilSunset,
} from "@iconscout/react-unicons";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <TimeAndLocation />
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label ">
              <UilTemperature size={14} />
              feels like
            </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">
              <UilWind size={14} />
              wind
            </span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">
              <UilTear size={14} />
              humidity
            </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* <div className="parameter-row">
            <span className="parameter-label">
              <UilTemperature size={14} />
              pressure
            </span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
