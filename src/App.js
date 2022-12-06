import React from "react";
// import { Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";

// Import Components => Homepage , Login Page Modal?  , Main Page
import "./pages/homePage/Homepage";
import Homepage from "./pages/homePage/Homepage";

// Need a state to holder the user details

function App() {
  return (
    <div>
      <h1>Neighbourhood app</h1>
      <Homepage />
    </div>
  );
}

export default App;
