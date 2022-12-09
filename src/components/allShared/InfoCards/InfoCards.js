// Design + images
import "./InfoCards.css";
import school from "../../../imgs/schools.jpg";

// Components

const InfoCards = (props) => {
  return (
    <div className="infocards-box">
      <img
        src={school}
        alt="hospital"
        className="infocards-img"
      />
      <div className="infocards-head">
        <h3>{props.school.Name}</h3>
        <p>{props.school.Type}</p>
      </div>
      <hr />
      <div className="infocards-info">
        <div className="ic-info">
          <i className="fa-solid fa-location-dot ic-adress"></i>
          <p>
            {props.school.Street},{" "}
            {props.school.Postcode}
          </p>
        </div>
        <div className="ic-info">
          <i className="fa-solid fa-phone ic-phone"></i>
          <p>{props.school.Telephone}</p>
        </div>
        {props.school.Website && (
          <div className="ic-info">
            <i className="fa-solid fa-earth-americas ic-earth"></i>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${props.school.Website}`}
            >
              {props.school.Website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCards;
