import React from "react";
import Logo from "../../imgs/logo.svg";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./LoginPageStyles.css";

// Login Page => Form to sign in => Form to register

function LoginPage(props) {
  const [showForm, setShowForm] = useState(null);

  return (
    <div className="LoginPageHomeScreen">
      <div className="NavBarHomeScreen">
        {showForm === "login" ? (
          <LoginForm register={setShowForm} />
        ) : showForm === "register" ? (
          <RegisterForm login={setShowForm} />
        ) : (
          <div className="btn">
            <button
              className="loginHome-btn"
              onClick={() => {
                setShowForm("login");
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowForm("register");
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
      <div className="MainLogoHomeScreen">
        <img alt="logo" src={Logo}></img>
      </div>
    </div>
  );
}

export default LoginPage;
