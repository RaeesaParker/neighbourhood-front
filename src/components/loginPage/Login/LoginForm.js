import React from "react";
import "./loginForm.css";

function LoginForm(props) {
  return (
    <div className="container">
      <div className="cover">
        <h1>Welcome back neighbour!</h1>
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
        <button>Log In</button>
        <p
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
