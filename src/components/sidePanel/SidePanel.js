import React from "react";
import "./SidePanelStyles.css";
// Import profile pictures
import userProfile from "../../imgs/profiles/profile1.jpg";
// import userProfile2 from "../../imgs/profiles/profile2.jpg";
// import userProfile3 from "../../imgs/profiles/profile3.jpg";
// import userProfile4 from "../../imgs/profiles/profile4.jpg";
// import userProfile5 from "../../imgs/profiles/profile5.jpg";

// Side Panel => Username Bar => Users List => Weather Bar

function SidePanel() {
  // Function to set all the users
  const allUsers = [
    "profile2",
    "profile3",
    "profile4",
    "profile5",
  ];

  // Render all the user images
  const userImages = allUsers.map((user) => {
    return (
      <img
        key={user}
        src={require(`../../imgs/profiles/${user}.jpg`)}
        alt="Logo"
        className="fig-user-all"
      />
    );
  });

  return (
    <div id="subsection-mainpage-panel">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <h4>Raeesa Parker</h4>
        </div>
        <div id="subsection-panel-image-div">
          <img
            src={userProfile}
            alt="Logo"
            id="fig-user"
          />
        </div>
      </div>
      <div id="subsection-panel-all-users">
        <h3>Preston</h3>
        <p>All your connected neighbours...</p>
        <div>{userImages}</div>
      </div>
      <div>
        <h1>Weather</h1>
      </div>
    </div>
  );
}

export default SidePanel;
