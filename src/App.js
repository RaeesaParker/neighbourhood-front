import React from "react";
import {
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import "./App.css";

// Import Components => Homepage , Login Page  , Main Page
import Homepage from "./pages/homePage/Homepage";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import SchoolPage from "./pages/schoolPage/SchoolPage";
import HospitalPage from "./pages/hospitalPage/HospitalPage";

// Import utils for login
// import { getCookie } from "./common/index";
// import { findUser } from "./utils/users";

function App() {
  // // Navigation for redirect
  // const navigate = useNavigate();

  // // State to set the user details
  // const [userDetails, setUserDetails] = useState({
  //   username: "",
  //   user_id: "",
  //   user_areaCode: "",
  // });

  // // Function to take in the user details submited on homepage
  // function onSetUserDetails(userDetails) {
  //   setUserDetails({
  //     username: userDetails.username,
  //     user_id: userDetails.user_id,
  //     user_areaCode: userDetails.user_areaCode,
  //   });
  // }

  // // Function to be used for cookie search => Check for cookie when the page loads => Find user if the token is found
  // useEffect(() => {
  //   let cookie = getCookie("jwt_token");
  //   if (cookie !== false) {
  //     loginWithToken(cookie, setUserDetails);
  //   }
  // }, []);

  // // Login with token if the cookie is true
  // const loginWithToken = async (cookie) => {
  //   const userDetails = await findUser(
  //     cookie,
  //     setUserDetails
  //   );
  //   if (userDetails) {
  //     navigate("/main");
  //   }
  // };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        ></Route>
        <Route
          path="/main"
          element={<MainPage />}
        ></Route>
        <Route
          path="/user"
          element={<UserPage />}
        ></Route>
        <Route
          path="/schools"
          element={<SchoolPage />}
        ></Route>
        <Route
          path="/hospitals"
          element={<HospitalPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
