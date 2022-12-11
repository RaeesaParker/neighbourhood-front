import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";
import { loginUser } from "../../utils/users";

function LoginForm(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Set states for username, email, password, postcode
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Set state for login error
  const [error, setError] = useState("");
  // temp use of setError
  if (1 == 2) {
    setError("");
  }
  // Async Function to handle onSubmit of register form
  const onSubmitLoginForm = async (event) => {
    event.preventDefault();

    if (!username) {
      setError("Username is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    const loggedUser = await loginUser(
      username,
      password,
      props.setUserDetails
    );

    if (loggedUser === true) {
      props.setIsLoggedIn(true);
      navigate("/main");
    } else {
      setError(loggedUser);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.localName == "login-overlay") {
      // closes the form if the user clicks outside of the form
      props.register(null);
    }
  };

  return (
    <login-overlay
      onClick={(e) => handleOverlayClick(e)}
    >
      <div className="loginform">
        <div className="loginform-cover">
          <h1 id="loginform-header">
            Welcome back,
            <br /> neighbour!
          </h1>
          <form
            onSubmit={onSubmitLoginForm}
            className="login-form"
          >
            <div>
              <i className="fa-solid fa-user-large login-icon" />
              <input
                className="text-btn"
                type="text"
                placeholder="Username"
                onChange={(event) =>
                  setUsername(event.target.value)
                }
              />
            </div>
            <div>
              <i className="fa-solid fa-lock login-icon" />
              <input
                className="password-btn"
                type="password"
                placeholder="Password"
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              ></input>
            </div>
            <form-message className="error">
              {error ? error : <></>}
            </form-message>
            <button type="submit" id="login-btn">
              Log In
            </button>
          </form>
          <p
            id="loginform-para"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props.register("register");
            }}
          >
            Dont have an account?
          </p>
        </div>
      </div>
    </login-overlay>
  );
}

export default LoginForm;
