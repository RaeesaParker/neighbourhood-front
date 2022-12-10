// Design + images
import "./SchoolBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanSchool from "../../allSchool/SpanSchool/SpanSchool";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const SchoolBody = (props) => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanSchool />
      <div className="school-posts">
        {props.allSchoolsByRegion.map(
          (school, i) => {
            return (
              <InfoCards
                key={i}
                school={school}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default SchoolBody;
