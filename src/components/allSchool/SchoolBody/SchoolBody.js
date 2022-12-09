// Design + images
import "./SchoolBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanSchool from "../../allSchool/SpanSchool/SpanSchool";
import InfoCards from "../../allShared/InfoCards/InfoCards";
import { nearSchools } from "../../../utils/schools";
import { useState, useEffect } from "react";

const SchoolBody = (props) => {
  const [
    allSchoolsByRegion,
    setAllSchoolByRegion,
  ] = useState([]);

  const getSchools = async () => {
    const response = await nearSchools(
      props.userDetails.user_regionId
    );
    setAllSchoolByRegion(response);
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanSchool />
      <div className="school-posts">
        {allSchoolsByRegion.map((school, i) => {
          return (
            <InfoCards key={i} school={school} />
          );
        })}
      </div>
    </div>
  );
};

export default SchoolBody;
