// Design + images
import "./SchoolBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanSchool from "../../allSchool/SpanSchool/SpanSchool";
import InfoCards from "../../allShared/InfoCards/InfoCards";
// import { useState } from "react";

const SchoolBody = () => {
  // const [schoolList, setSchoolList] = useState(
  //   []
  // );

  // setSchoolList();

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanSchool />
      <div className="school-posts">
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />
        <InfoCards />

        {/* If there are schools in the area:
        map all, if there is no school in the area: error
        message on the screen*/}
        {/* {schoolList.length > 0 ? (
          <div className="school-posts">
            {schoolList.map((data) => {
              return (
                <InfoCards
                  key={data.Name}
                  data={data}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-school">
            <h2>
              No schools found in this area.
            </h2>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SchoolBody;
