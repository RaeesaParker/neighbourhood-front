import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../imgs/logo.svg";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { loginUser } from "../../utils/users";
import "./LoginPageStyles.css";

// Login Page => Form to sign in => Form to register

function LoginPage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(null);
  const [error, setError] = useState("");


  // Login user with test details when demo button is clicked
  const onSubmitDemo = async () => {
    const loggedUser = await loginUser("testuser", "testuser", props.setUserDetails);

    if (loggedUser === true) { 
      props.setIsLoggedIn(true);
      navigate("/main");
    } else {setError(loggedUser)}
  };


  return (
    <div className="LoginPageHomeScreen">
      <div className="NavBarHomeScreen">
        <div className="navbar-left">
          <p>
            Neighbour<strong>Who?</strong>
          </p>
        </div>
        <div className="navbar-right">
          <div className="navbar-buttons">

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

            <button
              onClick={() => {
                onSubmitDemo()
              }}
            >
              Demo
            </button>

            <form-message className="error">
              {error ? error : <></>}
            </form-message>
          </div>

          {showForm === "login" ? (
            <LoginForm
              register={setShowForm}
              setUserDetails={
                props.setUserDetails
              }
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
            />
          ) : showForm === "register" ? (
            <RegisterForm
              login={setShowForm}
              setUserDetails={
                props.setUserDetails
              }
              isLoggedIn={props.isLoggedIn}
              setIsLoggedIn={props.setIsLoggedIn}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="MainLogoHomeScreen">
        <img alt="logo" src={Logo}></img>
      </div>
    </div>
  );
}

export default LoginPage;
