// Design + images
import "./SchoolPageStyles.css";

// Components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SchoolBody from "../../components/allSchool/SchoolBody/SchoolBody";
import SidePanel from "../../components/sidePanel/SidePanel";

// Import utils
import { getCookie } from "../../common/index";
import { findUser } from "../../utils/users/index";
import { nearSchools } from "../../utils/schools/index";

function SchoolPage(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // State to store the schools
  const [
    allSchoolsByRegion,
    setAllSchoolByRegion,
  ] = useState([]);

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
      getSchools(userDetails);
    }
  };

  // Function to find all the schools
  const getSchools = async (userDetails) => {
    const response = await nearSchools(
      userDetails.region[0].region_id
    );
    setAllSchoolByRegion(response);
  };

  return (
    <div className="section-school">
      <div id="subsection-mainpage-navbar">
        <NavigationBar
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
      <div className="schoolpage-body">
        <SchoolBody
          userDetails={props.userDetails}
          allSchoolsByRegion={allSchoolsByRegion}
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

export default SchoolPage;
