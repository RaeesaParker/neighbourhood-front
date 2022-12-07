import React from "react";
// import { Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";

// Import Components => Homepage , Login Page Modal?  , Main Page
import "./pages/homePage/Homepage";
import Homepage from "./pages/homePage/Homepage";
import MainPage from "./pages/mainPage/MainPage";

// Need a state to holder the user details

// Set up the routing

function App() {
  return (
    <div>
      <h1>Neighbourhood app</h1>
      <Homepage />
      <MainPage />
    </div>
  );
}

export default App;
