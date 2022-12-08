import React from "react";
import "./loginForm.css";

function LoginForm(props) {
  return (
    <div className="loginform">
      <div className="loginform-cover">
        <h1 id="loginform-header">
          Welcome back neighbour!
        </h1>
        <input
          className="text-btn"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="password-btn"
          type="password"
          placeholder="Password"
        ></input>
        <button id="login-btn">Log In</button>
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
  );
}

export default LoginForm;
