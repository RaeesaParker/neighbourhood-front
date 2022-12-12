import React from "react";
import { useState, useEffect } from "react";
import "./SidePanelStyles.css";
// Import profile pictures
import userProfile from "../../imgs/fakeuser.png";

function SidePanel(props) {
  // State to store the weather
  const [weather, setWeather] = useState({});
  const [weatherImage, setWeatherImage] =
    useState("sunny");

  // Function to set the weather
  function setWeatherFunc() {
    setWeather({
      minTemp: 5,
      maxTemp: 15,
      weatherCode: 20,
    });
  }

  // Set the weather when the component loads
  useEffect(() => {
    setWeatherFunc();
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

  // Function to set all the users
  const allUsers = [
    "profile1",
    "profile2",
    "profile3",
    "profile4",
    "profile5",
    "profile6",
    "profile7",
    "profile8",
    "profile9",
    "profile10",
    "profile11",
    "profile12",
    "profile13",
    "profile14",
    "profile15",
  ];

  // Render all the user images
  const userImages = allUsers.map((user) => {
    return (
      <img
        key={user}
        src={require(`../../imgs/profiles/${user}.jpg`)}
        alt="Logo"
        className="fig-user-all"
      />
    );
  });

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
  const todayDate = date.toLocaleDateString();

  return (
    <div id="subsection-mainpage-panel">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <h4>@{props.userDetails.username}</h4>
        </div>
        <div id="subsection-panel-image-div">
          <img
            src={userProfile}
            alt="Logo"
            id="fig-user"
          />
        </div>
      </div>
      <div className="subsection-panel">
        <h3>Who&apos;s in Preston?</h3>
        <p>All your connected neighbors:</p>
        <div>{userImages}</div>
        <p>And many others!</p>
      </div>

      <div className="subsection-panel-weather">
        <h3>Today&apos;s weather</h3>
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
