// Design + images
import "./InfoCards.css";
import examplepicture from "../../../imgs/Background.png";

// Components

const InfoCards = () => {
  return (
    <div className="infocards-box">
      <img
        src={examplepicture}
        alt="hospital"
        className="infocards-img"
      />
      <div className="infocards-head">
        <h3>Hospital/school name</h3>
        <p>Information</p>
      </div>
      <hr />
      <div className="infocards-info">
        <div className="ic-info">
          <i className="fa-solid fa-location-dot ic-adress"></i>
          <p>Adress</p>
        </div>
        <div className="ic-info">
          <i className="fa-solid fa-phone ic-phone"></i>
          <p>123 456 789</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
