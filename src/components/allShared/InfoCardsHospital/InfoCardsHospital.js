// Design + images
import "./InfoCardsHospital.css";
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
        <h3>
          {props.organisation.Name.toLowerCase()
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() +
                word.slice(1)
            )
            .join(" ")}
        </h3>
        <p>{props.organisation.Type}</p>
      </div>
      <hr />
      <div className="infocards-info">
        <div className="ic-info">
          <i className="fa-solid fa-location-dot ic-adress"></i>

          {props.organisation.Street && (
            <p>
              {props.organisation.Street.toLowerCase()
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
                )
                .join(" ")}
              , {props.organisation.Postcode}
            </p>
          )}
          {!props.organisation.Street && (
            <p>{props.organisation.Postcode}</p>
          )}
        </div>
        {props.organisation.Addressbook !==
        undefined ? (
          <div className="ic-info">
            <i className="fa-solid fa-address-book ic-address-book"></i>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${props.organisation.Addressbook}`}
            >
              {props.organisation.Addressbook}
            </a>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default InfoCards;
