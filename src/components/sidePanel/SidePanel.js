import React from "react";
// import { useState } from "react";
import "./SidePanelStyles.css";
// import logo from "../../imgs/logo.svg";
import userProfile from "../../imgs/profiles/profile5.jpg";

// Side Panel => Username Bar => Users List => Weather Bar

function SidePanel() {
  // State to hold all the users
  // const [allUsers, setAllUsers] = useState([]);

  return (
    <div id="subsection-mainpage-panel">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <h4>Raeesa Parker</h4>
        </div>
        <div id="subsection-panel-image-div">
          <img
            src={userProfile}
            alt="Logo"
            id="fig-user"
          />
        </div>
      </div>
      <div id="subsection-panel-users-list">
        <h3>Preston</h3>
        <p>All your connected neighbours...</p>
      </div>
      <div>
        <h1>Weather</h1>
      </div>
    </div>
  );
}

export default SidePanel;
