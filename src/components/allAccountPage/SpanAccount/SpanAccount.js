// Design + images
import "./SpanAccount.css";
import lamp from "../../../imgs/lamp.png";

// Components
import { useState } from "react";

const SpanAccount = () => {
  const [span, setSpan] = useState(false);
  const handleClick = () => {
    setSpan(true);
  };

  return (
    <div
      className={`span-account ${
        span ? "display-none" : ""
      }`}
    >
      <div className="span-header">
        <h2>Hello, name!</h2>
        <button onClick={handleClick}>
          <i className="fa-solid fa-x icon-spanclose"></i>
        </button>
      </div>
      <div className="span-body">
        <p>
          This is your user page. Here you can
          edit your account information and see
          all your posts already made on our
          platform!
        </p>

        <img
          src={lamp}
          alt="lamp"
          className="span-lamp"
        />
      </div>
    </div>
  );
};

export default SpanAccount;
