import React from "react";
import "./MainPageStyles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import utils
import { getCookie } from "../../common/index";
import { findUser } from "../../utils/users/index";
// Import Components
import SidePanel from "../../components/sidePanel/SidePanel";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainBody from "../../components/allMainPage/MainBody/MainBody";

function MainPage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Check to see if a user is logged in
  useEffect(() => {
    if (props.isLoggedIn) {
      const cookie = getCookie("jwt_token");
      // Set the user details if a cookie is found ELSE reroute to homepage
      if (cookie !== false) {
        findUserWithToken(
          cookie,
          props.setUserDetails
        );
      } else {
        navigate("/");
      }
    }
  }, []);

  // Find the user with the token OR reroute to the homepage
  const findUserWithToken = async (cookie) => {
    const userDetails = await findUser(
      cookie,
      props.setUserDetails
    );
    if (userDetails) {
      console.log(
        "The user details have been set"
      );
    }
  };

  return (
    <div id="section-mainpage-div">
      <div id="subsection-mainpage-navbar">
        <NavigationBar
          userDetails={props.userDetails}
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
      <div id="subsection-mainpage-posts">
        <MainBody
          postDetails={props.postDetails}
          setPostDetails={props.setPostDetails}
          userDetails={props.userDetails}
        />
      </div>
      <div id="subsection-mainpage-sidepanel">
        <SidePanel
          userDetails={props.userDetails}
        />
      </div>
    </div>
  );
}

export default MainPage;
