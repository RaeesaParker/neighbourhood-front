// Design + images
import "./HospitalBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanHospital from "../../allHospital/SpanHospital/SpanHospital";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const HospitalBody = () => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanHospital />
      <div className="hospitalbody-posts">
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
      </div>
    </div>
  );
};

export default HospitalBody;
