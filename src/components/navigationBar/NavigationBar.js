import React from "react";
import "./NavigationBarStyles.css";
import logo from "../../imgs/logo.svg";

// Navigation Bar => Logo => Links => Logout Button

function NavigationBar() {
  return (
    <div id="section-navbar">
      <div id="navbar-logo-div">
        <img
          src={logo}
          alt="Logo"
          id="navbar-logo"
        />
      </div>
      <div id="navbar-links-div">
        <button>Home</button>
        <button>My Account</button>
        <button>New Post</button>
      </div>
      <div id="navbar-pages-div">
        <button>Schools</button>
      </div>
      <div id="navbar-logout-div">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default NavigationBar;
