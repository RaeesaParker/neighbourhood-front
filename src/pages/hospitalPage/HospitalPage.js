// Design + images
import "./HospitalPageStyles.css";

// Components
import SidePanel from "../../components/sidePanel/SidePanel";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import HospitalBody from "../../components/allHospital/HospitalBody/HospitalBody";

function HospitalPage() {
  return (
    <div className="section-hospital">
      <div id="subsection-mainpage-navbar">
        <NavigationBar />
      </div>
      <div className="hospitalpage-body">
        <HospitalBody />
      </div>
      <div id="subsection-mainpage-sidepanel">
        <SidePanel />
      </div>
    </div>
  );
}

export default HospitalPage;
