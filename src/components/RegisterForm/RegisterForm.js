import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerForm.css";
import { registerUser } from "../../utils/users";

function RegisterForm(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Set states for username, email, password, postcode
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [postcode, setPostcode] = useState();

  // Set state for login error
  const [error, setError] = useState("");
  // temp use of setError
  if (1 == 2) {
    setError("");
  }

  // Async Function to handle onSubmit of register form
  const onSubmitRegisterForm = async (event) => {
    event.preventDefault();

    if (!username) {
      setError("A username is required");
      return;
    }

    if (!password) {
      setError("A password is required");
      return;
    }

    if (!email) {
      setError("An email address is required");
      return;
    }

    if (!postcode) {
      setError("A postcode is required");
      return;
    }

    const newUser = await registerUser(
      username,
      email,
      password,
      postcode,
      props.setUserDetails
    );

    if (newUser === true) {
      props.setIsLoggedIn(true);
      navigate("/main");
    } else {
      setError(newUser);
    }
  };

  const handleOverlayClick = (e) => {
    // closes the form if the user clicks outside of the form
    if (e.target.localName == "login-overlay") {
      props.login(null);
    }
  };

  return (
    <login-overlay
      onClick={(e) => handleOverlayClick(e)}
    >
      <div className="registerform">
        <div className="registerform-cover">
          <h1 id="registerform-header">
            Welcome,
            <br /> neighbour!
          </h1>
          <form
            onSubmit={onSubmitRegisterForm}
            className="register-form"
          >
            <div>
              <i className="fa-solid fa-user-large login-icon" />
              <input
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                className="register-text-btn"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div>
              <i className="fa-solid fa-envelope login-icon" />
              <input
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="register-email-btn"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div>
              <i className="fa-solid fa-lock login-icon" />
              <input
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                className="register-password-btn"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <i className="fa-solid fa-location-dot login-icon" />
              <input
                onChange={(event) =>
                  setPostcode(event.target.value)
                }
                className="register-postcode-btn"
                type="text"
                placeholder="Postcode"
              ></input>
            </div>
            <form-message className="error">
              {error ? error : <></>}
            </form-message>
            <button
              type="submit"
              id="register-btn"
            >
              Create my account
            </button>
          </form>
          <p
            id="registerform-para"
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props.login("login");
            }}
          >
            Already have an account?
          </p>
        </div>
      </div>
    </login-overlay>
  );
}

export default RegisterForm;
