import React from "react";
import styled from "styled-components";
import Background from "../../imgs/Background.png";
import Logo from "../../imgs/logo.svg";

// Login Page => Form to sign in => Form to register

function LoginPage(props) {
  return (
    <LoginPageWrapper>
      <div>
        <NavBarWrapper>
          <div className="btn">
            <button className="login-btn">
              Login
            </button>
            <button>Sign Up</button>
          </div>
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
  }
  .login-btn {
    /* opacity: 0.2; */
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
