// Design + images
import "./SchoolPageStyles.css";

// Components
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SchoolBody from "../../components/allSchool/SchoolBody/SchoolBody";
import SidePanel from "../../components/sidePanel/SidePanel";

function SchoolPage() {
  return (
    <div className="section-school">
      <div id="subsection-mainpage-navbar">
        <NavigationBar />
      </div>
      <div className="schoolpage-body">
        <SchoolBody />
      </div>
      <div id="subsection-mainpage-sidepanel">
        <SidePanel />
      </div>
    </div>
  );
}

export default SchoolPage;
