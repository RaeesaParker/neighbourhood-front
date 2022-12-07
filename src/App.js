import React from "react";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        ></Route>
        <Route
          path="/main"
          element={<MainPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
