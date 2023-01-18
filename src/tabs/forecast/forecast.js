import "./forecast.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const dataDaily = [
    data.list[0],
    data.list[5],
    data.list[11],
    data.list[17],
    data.list[22],
    data.list[28],
    data.list[34],
  ];
  return (
    <>
      <div className="accordion">
        {dataDaily.map((item, idx) => (
          <div key={idx}>
            <div className="daily-item">
              <img
                alt="weather"
                className="icon-small"
                src={`icons/${item.weather[0].icon}.png`}
              ></img>
              <label className="day">{forecastDays[idx]}</label>
              {/* <div className="description"> */}
              <label className="description">
                {item.weather[0].description}
              </label>
              <label className="min-max">
                {Math.round(item.main.temp_min)}°C /
                {Math.round(item.main.temp_max)}°C
              </label>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Forecast;
