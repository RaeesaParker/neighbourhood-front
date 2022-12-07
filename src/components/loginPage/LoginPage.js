import React from "react";
import styled from "styled-components";
import Background from "../../imgs/Background.png";
import Logo from "../../imgs/logo.svg";
import LoginForm from "./Login/LoginForm";
import { useState } from "react";
import RegisterForm from "./Register/RegisterForm";

// Login Page => Form to sign in => Form to register

function LoginPage(props) {
  const [showForm, setShowForm] = useState(null);

  return (
    <LoginPageWrapper>
      <div>
        <NavBarWrapper>
          {showForm === "login" ? (
            <LoginForm register={setShowForm} />
          ) : showForm === "register" ? (
            <RegisterForm login={setShowForm} />
          ) : (
            <div className="btn">
              <button
                className="login-btn"
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
        </NavBarWrapper>
        <MainLogo>
          <img alt="logo" src={Logo}></img>
        </MainLogo>
      </div>
    </LoginPageWrapper>
  );
}

export default LoginPage;

const LoginPageWrapper = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const NavBarWrapper = styled.div`
  display: flex;
  float: right;
  padding-top: 2%;
  padding-right: 4%;
  button {
    border-radius: 5px;
    margin-right: 20px;
    height: 30px;
    /* border-color: var(--white); */
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  .login-btn {
    background-color: transparent;
  }
`;

const MainLogo = styled.div`
  img {
    position: relative;
    height: 300px;
    width: 300px;
    left: 50%;
    margin-top: 200px;
    transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;
