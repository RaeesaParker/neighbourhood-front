import React from "react";

function RegisterForm(props) {
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
          className="text-btn"
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="password-btn"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="text-btn"
          type="text"
          placeholder="Postcode"
        ></input>
        <button>Create my account</button>
        <p
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
