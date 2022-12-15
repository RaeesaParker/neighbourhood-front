// Design + images
import "./SchoolBody.css";
import schoolImage from "../../../imgs/schools.jpg";

// Components
import SpanSchool from "../../allSchool/SpanSchool/SpanSchool";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const SchoolBody = (props) => {
  return (
    <div className="mainbody-box">
      <SpanSchool
        userDetails={props.userDetails}
      />
      <div className="school-posts">
        {props.allSchoolsByRegion.map(
          (school, i) => {
            return (
              <InfoCards
                key={i}
                organisation={school}
                image={schoolImage}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default SchoolBody;
