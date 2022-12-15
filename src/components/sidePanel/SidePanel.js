import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SidePanelStyles.css";
// Import profile pictures
import userProfile from "../../imgs/fakeuser.png";
import { getWeather } from "../../utils/weather/index";
import InYourRegion from "../allShared/InYourRegion/InYourRegion";

function SidePanel(props) {
  // State to store the weather
  const [weather, setWeather] = useState({});
  const [weatherImage, setWeatherImage] =
    useState("sunny");

  // Gets todays weather and stores it to weather
  const localWeather = async () => {
    const data = await getWeather();
    setWeather({
      minTemp: data.daily.temperature_2m_min[0],
      maxTemp: data.daily.temperature_2m_max[0],
      weatherCode: data.daily.weathercode[0],
    });
  };

  // Set the weather when the component loads
  useEffect(() => {
    localWeather();
    setWeatherImageFunc();
  }, []);

  // Set the weather image when the weather data is loaded
  useEffect(() => {
    setWeatherImageFunc();
  }, [weather]);

  // Function to set the weather image
  function setWeatherImageFunc() {
    if (weather.weatherCode == 0) {
      setWeatherImage("sunny");
    } else if (
      weather.weatherCode > 0 &&
      weather.weatherCode < 50
    ) {
      setWeatherImage("cloudy");
    } else if (
      weather.weatherCode > 50 &&
      weather.weatherCode < 60
    ) {
      setWeatherImage("cloudy_rain");
    } else if (
      weather.weatherCode > 60 &&
      weather.weatherCode < 70
    ) {
      setWeatherImage("rain");
    } else if (
      weather.weatherCode > 70 &&
      weather.weatherCode < 80
    ) {
      setWeatherImage("snow_cloud");
    } else if (
      weather.weatherCode > 80 &&
      weather.weatherCode < 90
    ) {
      setWeatherImage("snow");
    } else {
      setWeatherImage("thunder");
    }
  }

  // Weather functions
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const today = weekday[date.getDay()];
  const todayDate =
    date.toLocaleDateString("en-GB");

  return (
    <div id="subsection-mainpage-panel">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <Link to="/user" className="Link">
            <h4>@{props.userDetails.username}</h4>
          </Link>
        </div>

        <div id="subsection-panel-image-div">
          <Link to="/user" className="Link">
            <img
              src={userProfile}
              alt="Logo"
              id="fig-user"
            />
          </Link>
        </div>
      </div>
      <InYourRegion />

      <div className="subsection-panel-weather">
        <h3>Today&apos;s average temp.</h3>
        <div className="weather-bg">
          <img
            src={require(`../../imgs/weather/${weatherImage}.png`)}
            alt="Logo"
            id="fig-weather"
          />

          <div className="weather-box">
            <div className="max-temp">
              <p>
                {weather.maxTemp}
                &deg;
              </p>
              <p>Max Temp.</p>
            </div>
            <div className="fake-hr" />
            <div className="min-temp">
              <div>
                <p>{today},</p>
                <p>{todayDate}</p>
              </div>
              <p>
                Min Temp: {weather.minTemp}&deg;C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
