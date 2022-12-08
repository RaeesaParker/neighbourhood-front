import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import "./NavigationBarStyles.css";
import logo from "../../imgs/logo.svg";

// Navigation Bar => Logo => Links => Logout Button

function NavigationBar(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  function onLogOut() {
    props.setIsLoggedIn(false);
    navigate("/");
  }

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
            <p>Home</p>
          </button>
        </Link>
        <Link to="/user">
          <button className="button-style">
            <i className="fa-solid fa-user"></i>
            <p>My Account</p>
          </button>
        </Link>
        <button
          id="button-new-post"
          className="button-style"
        >
          <i className="fa-solid fa-plus icon-newpost"></i>
          <p>New Post</p>
        </button>
      </div>
      <div className="navbar-links-div">
        <Link to="/schools">
          <button className="button-style">
            <i className="fa-solid fa-school"></i>
            <p>Schools</p>
          </button>
        </Link>
        <Link to="/hospitals">
          <button className="button-style">
            <i className="fa-solid fa-hospital"></i>
            <p>Medical</p>
          </button>
        </Link>
      </div>
      <div className="navbar-links-div">
        <button
          onClick={onLogOut}
          className="button-style"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
