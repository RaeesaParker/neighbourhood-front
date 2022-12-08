import React from "react";
import "./registerForm.css";

function RegisterForm(props) {
  return (
    <div className="registerform">
      <div className="registerform-cover">
        <h1 id="registerform-header">
          Welcome back neighbour!
        </h1>
        <input
          className="register-text-btn"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="register-email-btn"
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="register-password-btn"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="register-postcode-btn"
          type="text"
          placeholder="Postcode"
        ></input>
        <button id="register-btn">
          Create my account
        </button>
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
  );
}

export default RegisterForm;
