import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../components/loginPage/LoginPage";
import "./HomepageStyles.css";
// Import utils for login
import { getCookie } from "../../common/index";
import { findUser } from "../../utils/users/index";

function Homepage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Function to be used for cookie search => Check for cookie when the page loads => Find user if the token is found
  useEffect(() => {
    if (props.isLoggedIn) {
      const cookie = getCookie("jwt_token");
      if (cookie !== false) {
        loginWithToken(
          cookie,
          props.setUserDetails
        );
      }
    }
  }, []);

  // Login with token if the cookie is true
  const loginWithToken = async (cookie) => {
    const userDetails = await findUser(
      cookie,
      props.setUserDetails
    );
    if (userDetails) {
      navigate("/main");
    }
  };

  return (
    <LoginPage
      setUserDetails={props.setUserDetails}
      isLoggedIn={props.isLoggedIn}
      setIsLoggedIn={props.setIsLoggedIn}
    />
  );
}

export default Homepage;
