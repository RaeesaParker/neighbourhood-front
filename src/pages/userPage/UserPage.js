import React from "react";
import "./UserPageStyles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Components
import AccountBody from "../../components/allAccountPage/AccountBody/AccountBody";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SideAccount from "../../components/allAccountPage/SideAccount/SideAccount";
// Utils
import { getCookie } from "../../common/index";
import { findUser } from "../../utils/users/index";

function UserPage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // State to store the current user details => will remain empty for first render
  const [currentDetails, setCurrentDetails] =
    useState({
      user_name: "",
      password: "",
      email: "",
      postcode: "",
    });

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
      const newObj = {
        user_name: userDetails.user_name,
        password: userDetails.password,
        email: userDetails.email,
        postcode: userDetails.pcd,
      };
      setCurrentDetails(newObj);
    }
  };

  return (
    <div className="userpage-page">
      <div
        id="subsection-mainpage-navbar"
        className="userpage-navbar"
      >
        <NavigationBar
          userDetails={props.userDetails}
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
      <div className="userpage-body">
        <AccountBody
          userDetails={props.userDetails}
          postDetails={props.postDetails}
          setPostDetails={props.setPostDetails}
          haveNewPost={props.haveNewPost}
          setHaveNewPost={props.setHaveNewPost}
        />
      </div>
      <div className="userpage-sidebar">
        <SideAccount
          setUserDetails={props.setUserDetails}
          userDetails={props.userDetails}
          currentDetails={currentDetails}
          setCurrentDetails={setCurrentDetails}
        />
      </div>
    </div>
  );
}

export default UserPage;
