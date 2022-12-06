import React from "react";
import "./MainPageStyles.css";
import SidePanel from "../../components/sidePanel/SidePanel";

// Main Page => Navigation bar on Left => Posts Section in Center => User Panel on Right

function MainPage() {
  return (
    <div id="section-mainpage-div">
      <div
        id="subsection-mainpage-navbar"
        className="section-mainpage-border"
      >
        <h1>NavBar</h1>
      </div>

      <div
        id="subsection-mainpage-posts"
        className="section-mainpage-border"
      >
        <h1>Main Section</h1>
      </div>

      <div className="section-mainpage-border">
        <SidePanel />
      </div>
    </div>
  );
}

export default MainPage;
