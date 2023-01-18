import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search";
import { WEATHER_API_URL, KEY } from "./api";
import { useState } from "react";
import Forecast from "./tabs/forecast/forecast";
import BasicTabs from "./tabs/tabs";
import LeftButtons from "./components/left-buttons";
// import { useEffect } from "react";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [img, setImg] = useState(
    "https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80"
  );
  const handleOnSearchChange = (searchData) => {
    // to do
    console.log(searchData);
    const [city] = searchData.label.split(", ");
    // console.log(`${city.toLowerCase()}`);
    const [lat, lng] = searchData.value.split(" ");
    const currrentImgFetch = fetch(
      `https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase()}/images/`
    );
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}&units=metric`
    );
    const currentForecastFetch =
      fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lng}&appid=${KEY}&units=metric
    `);
    Promise.all([currentWeatherFetch, currentForecastFetch, currrentImgFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const imgResponse = await response[2].json();
        setCurrentWeather({ city: city, ...weatherResponse });
        setForecast({ city: city, ...forecastResponse });
        // setImg(imgResponse.photos[0].attribution.source);
        setImg(imgResponse.photos[0].image.web);

        console.log(imgResponse);
      })
      .catch((err) => console.log(err));
  };
  // console.log(img);
  console.log("running!");
  // console.log(currentWeather);
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
      <LeftButtons />
      <div className="container-1">
        {forecast && <BasicTabs data={forecast} />}
      </div>
    </div>
  );
}

export default App;
