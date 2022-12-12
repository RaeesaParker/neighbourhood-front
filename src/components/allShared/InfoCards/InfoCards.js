// Design + images
import "./InfoCards.css";
// import school from "../../../imgs/schools.jpg";

// Components

const InfoCards = (props) => {
  return (
    <div className="infocards-box">
      <img
        src={props.image}
        alt="Image for organisation"
        className="infocards-img"
      />
      <div className="infocards-head">
        <h3>{props.organisation.Name}</h3>
        <p>{props.organisation.Type}</p>
      </div>
      <hr />
      <div className="infocards-info">
        <div className="ic-info">
          <i className="fa-solid fa-location-dot ic-adress"></i>
          <p>
            {props.organisation.Street},{" "}
            {props.organisation.Postcode}
          </p>
        </div>
        <div className="ic-info">
          <i className="fa-solid fa-phone ic-phone"></i>
          <p>{props.organisation.Telephone}</p>
        </div>
        {props.organisation.Website && (
          <div className="ic-info">
            <i className="fa-solid fa-earth-americas ic-earth"></i>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${props.organisation.Website}`}
            >
              {props.organisation.Website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCards;
