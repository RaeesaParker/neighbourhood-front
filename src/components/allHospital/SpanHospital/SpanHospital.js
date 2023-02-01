// Design + images
import "./SpanHospital.css";
import girl from "../../../imgs/girl.png";

// Components
import { useState } from "react";

// ////////////////////

const SpanHospital = (props) => {
  const [span, setSpan] = useState(false);
  const handleClick = () => {
    setSpan(true);
  };

  return (
    <div
      className={`span-hospital ${
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
          medical places in your region. Please
          note, this information is received
          directly from the Get information about
          medical places portal and NeighbourWho
          is not responsible for its accuracy. If
          you need to request any changes to these
          details, please contact the place
          directly.
        </p>

        <img
          src={girl}
          alt="girl"
          className="span-girl"
        />
      </div>
    </div>
  );
};

export default SpanHospital;
