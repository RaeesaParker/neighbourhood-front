// Design + images
import "./HospitalBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanHospital from "../../allHospital/SpanHospital/SpanHospital";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const HospitalBody = () => {
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
      <SpanHospital />
      <div className="hospitalbody-posts">
        {hospitalsArray.map((school, i) => {
          return (
            <InfoCards key={i} school={school} />
          );
        })}
      </div>
    </div>
  );
};

export default HospitalBody;
