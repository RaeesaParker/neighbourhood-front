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
          Find here important information about
          all the schools close to where you live.
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
