import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/main">
          <button className="button-style">
            <i className="fa-solid fa-house"></i>
            Home
          </button>
        </Link>
        <Link to="/user">
          <button className="button-style">
            <i className="fa-solid fa-user"></i>My
            Account
          </button>
        </Link>
        <button
          id="button-new-post"
          className="button-style"
        >
          <i className="fa-solid fa-plus"></i>New
          Post
        </button>
      </div>
      <div className="navbar-links-div">
        <Link to="/schools">
          <button className="button-style">
            <i className="fa-solid fa-school"></i>
            Schools
          </button>
        </Link>
        <Link to="/hospitals">
          <button className="button-style">
            <i className="fa-solid fa-hospital"></i>
            Medical
          </button>
        </Link>
      </div>
      <div className="navbar-links-div">
        <Link to="/">
          <button className="button-style">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
