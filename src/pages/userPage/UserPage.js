import React from "react";
import AccountBody from "../../components/allAccountPage/AccountBody/AccountBody";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SideAccount from "../../components/allAccountPage/SideAccount/SideAccount";

import "./UserPageStyles.css";

// User Page => Navigation bar on Left => User Posts Section in Center => User Editing Panel on Right

function UserPage() {
  return (
    <div className="userpage-page">
      <div
        id="subsection-mainpage-navbar"
        className="userpage-navbar"
      >
        <NavigationBar />
      </div>
      <div className="userpage-body">
        <AccountBody />
      </div>
      <div className="userpage-sidebar">
        <SideAccount />
      </div>
    </div>
  );
}

export default UserPage;
