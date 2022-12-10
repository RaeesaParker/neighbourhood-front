// Design + images
import "./HospitalBody.css";
import medicalImage from "../../../imgs/medical.jpg";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanHospital from "../../allHospital/SpanHospital/SpanHospital";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const HospitalBody = (props) => {
  const hospitalsArray = [
    {
      Name: "Smith Medical",
      Type: "Pharmacy",
      Street: "2 Main Drive",
      Postcode: "PR7 8GH",
      Telephone: "01772 640128",
      Website: "https://google.com",
    },
  ];
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanHospital
        userDetails={props.userDetails}
      />
      <div className="hospitalbody-posts">
        {hospitalsArray.map((hospital, i) => {
          return (
            <InfoCards
              key={i}
              organisation={hospital}
              image={medicalImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HospitalBody;
