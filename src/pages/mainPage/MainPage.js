import React from "react";
import "./MainPageStyles.css";

// Import Components
import SidePanel from "../../components/sidePanel/SidePanel";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import MainBody from "../../components/allMainPage/MainBody/MainBody";

// Main Page => Navigation bar on Left => Posts Section in Center => User Panel on Right

function MainPage() {
  return (
    <div id="section-mainpage-div">
      <div id="subsection-mainpage-navbar">
        <NavigationBar />
      </div>
      <div id="subsection-mainpage-posts">
        <MainBody />
      </div>
      <div id="subsection-mainpage-sidepanel">
        <SidePanel />
      </div>
    </div>
  );
}

export default MainPage;
