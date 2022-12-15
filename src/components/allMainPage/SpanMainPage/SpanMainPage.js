// Design + images
import "./SpanMainPage.css";
import cellphone from "../../../imgs/groupchat.png";

// Libraries
import { useState } from "react";

// ////////////////

const SpanMainPage = (props) => {
  const [span, setSpan] = useState(false);
  const handleClick = () => {
    setSpan(true);
  };

  return (
    <div
      className={`span-mainpage ${
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
          This is where communities come together
          to welcome newcomers, exchange
          recommendations and read the latest
          local news. Where neighbours support
          local businesses and receive utility
          updates. Where neighbours lend tools and
          sell sofas. Its like getting the most
          out of everything nearby.
          <br />
          Welcome, neighbour!
        </p>

        <img
          src={cellphone}
          alt="cellphone"
          className="span-cellphone"
        />
      </div>
    </div>
  );
};

export default SpanMainPage;
