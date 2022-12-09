// Design + images
import "./HospitalPageStyles.css";

// Components
import SidePanel from "../../components/sidePanel/SidePanel";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import HospitalBody from "../../components/allHospital/HospitalBody/HospitalBody";

function HospitalPage(props) {
  return (
    <div className="section-hospital">
      <div id="subsection-mainpage-navbar">
        <NavigationBar
          setIsLoggedIn={props.setIsLoggedIn}
        />
      </div>
      <div className="hospitalpage-body">
        <HospitalBody
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

export default HospitalPage;
