// Design + images
import "./SpanSchool.css";
import schoolpic from "../../../imgs/manschool.png";

// Components
import { useState } from "react";

const SpanSchool = (props) => {
  const [span, setSpan] = useState(false);
  const handleClick = () => {
    setSpan(true);
  };

  return (
    <div
      className={`span-school ${
        span ? "display-none" : ""
      }`}
    >
      <div className="span-header">
        <h2>
          Hello, {props.userDetails.username}!
        </h2>
        <button onClick={handleClick}>
          <i className="fa-solid fa-x icon-spanclose"></i>
        </button>
      </div>
      <div className="span-body">
        <p>
          Find contact details for all the local
          schools in your region. Please note,
          this information is received directly
          from the Get information about Schools
          portal and NeighbourWho is not
          responsible for its accuracy. If you
          need to request any changes to these
          details, please contact the school
          directly.
        </p>

        <img
          src={schoolpic}
          alt="schoolpic"
          className="span-man"
        />
      </div>
    </div>
  );
};

export default SpanSchool;
