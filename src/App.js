import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components => Homepage , Login Page Modal?  , Main Page
import Homepage from "./pages/homePage/Homepage";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import SchoolPage from "./pages/schoolPage/SchoolPage";
import HospitalPage from "./pages/hospitalPage/HospitalPage";

// Need a state to holder the user details

// Set up login functionality
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
        <Route
          path="/user"
          element={<UserPage />}
        ></Route>
        <Route
          path="/schools"
          element={<SchoolPage />}
        ></Route>
        <Route
          path="/hospitals"
          element={<HospitalPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
