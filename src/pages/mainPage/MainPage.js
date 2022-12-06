import React from "react";
import "./MainPageStyles.css";

// Import Components
import NavigationBar from "../../components/navigationBar/NavigationBar";

// Main Page => Navigation bar on Left => Posts Section in Center => User Panel on Right

function MainPage() {
  return (
    <div id="section-mainpage-div">
      <div className="section-mainpage-border">
        <NavigationBar />
      </div>

      <div
        id="subsection-mainpage-posts"
        className="section-mainpage-border"
      >
        <h1>Main Section</h1>
      </div>

      <div
        id="subsection-mainpage-panel"
        className="section-mainpage-border"
      >
        <h1>Right Panel</h1>
      </div>
    </div>
  );
}

export default MainPage;
