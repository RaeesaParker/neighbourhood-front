// Design + images
import "./SchoolPageStyles.css";

// Components
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SchoolBody from "../../components/allSchool/SchoolBody/SchoolBody";
import SidePanel from "../../components/sidePanel/SidePanel";

function SchoolPage(props) {
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
