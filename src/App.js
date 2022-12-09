import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components => Homepage , Login Page  , Main Page
import Homepage from "./pages/homePage/Homepage";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import SchoolPage from "./pages/schoolPage/SchoolPage";
import HospitalPage from "./pages/hospitalPage/HospitalPage";

function App() {
  // Feature test branch
  // Set state to manage user login
  const [isLoggedIn, setIsLoggedIn] =
    useState(true);

  // State to set the user details
  const [userDetails, setUserDetails] = useState({
    username: "",
    user_id: "",
    user_regionId: "",
  });

  // Function to take in the user details submited on homepage
  function onSetUserDetails(userDetails) {
    setUserDetails({
      username: userDetails.username,
      user_id: userDetails.user_id,
      user_regionId: userDetails.user_regionId,
    });
  }

  // eslint-disable-next-line no-unused-vars
  const [postDetails, setPostDetails] = useState(
    []
  );

  // func to take all post details on homepage

  function onSetPostDetails(postDetails) {
    setPostDetails(postDetails);
  }

  console.log(onSetPostDetails);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              setUserDetails={onSetUserDetails}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/main"
          element={
            <MainPage

              postDetails={postDetails}
              setPostDetails={onSetPostDetails}
              userDetails={userDetails}

              isLoggedIn={isLoggedIn}

              setIsLoggedIn={setIsLoggedIn}
             
              setUserDetails={onSetUserDetails}
            />
          }
        ></Route>
        <Route
          path="/user"
          element={
            <UserPage
              userDetails={userDetails}
              setUserDetails={onSetUserDetails}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/schools"
          element={
            <SchoolPage
              setUserDetails={onSetUserDetails}
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/hospitals"
          element={
            <HospitalPage
              userDetails={userDetails}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
