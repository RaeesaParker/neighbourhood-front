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
      <div className="navbar-links-div">
        <button className="button-style">
          <i className="fa-solid fa-house"></i>
          Home
        </button>
        <button className="button-style">
          <i className="fa-solid fa-user"></i>My
          Account
        </button>
        <button
          id="button-new-post"
          className="button-style"
        >
          <i className="fa-solid fa-plus"></i>New
          Post
        </button>
      </div>
      <div className="navbar-links-div">
        <button className="button-style">
          <i className="fa-solid fa-school"></i>
          Schools
        </button>
        <button className="button-style">
          <i className="fa-solid fa-hospital"></i>
          Medical
        </button>
      </div>
      <div className="navbar-links-div">
        <button className="button-style">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
