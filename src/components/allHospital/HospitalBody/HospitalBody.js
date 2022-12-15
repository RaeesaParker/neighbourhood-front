// Design + images
import "./HospitalBody.css";
import medicalImage from "../../../imgs/medical.jpg";

// Components
import SpanHospital from "../../allHospital/SpanHospital/SpanHospital";
import InfoCards from "../../allShared/InfoCards/InfoCards";

const HospitalBody = (props) => {
  const hospitalArray =
    props.allHospitalsByRegion.value &&
    props.allHospitalsByRegion.value.filter(
      (element) =>
        (element.OrganisationTypeId == "HOS" ||
          element.OrganisationTypeId == "PHA" ||
          element.OrganisationTypeId == "GPB" ||
          element.OrganisationTypeId == "CLI" ||
          element.OrganisationTypeId == "DEN") &&
        element.Postcode.includes("PR7")
    );

  const data = [[], [], [], [], []];
  hospitalArray &&
    hospitalArray.forEach((element) => {
      const objToAdd = {
        Name: element.OrganisationName,
        Type: element.OrganisationType,
        Street: element.Address1,
        Postcode: element.Postcode,
        // Telephone:
        //   element.Contacts[0].ContactType,
        Website: element.URL,
      };
      switch (element.OrganisationTypeId) {
        case "HOS":
          data[0].push(objToAdd);
          break;
        case "PHA":
          data[1].push(objToAdd);
          break;
        case "GPB":
          data[2].push(objToAdd);
          break;
        case "CLI":
          data[3].push(objToAdd);
          break;
        case "DEN":
          data[4].push(objToAdd);
          break;
        default:
          break;
      }
    });

  const headerArray = [
    "Hospital",
    "Pharmacy",
    "GP",
    "Clinic",
    "Dental",
  ];

  return (
    <div className="mainbody-box">
      <SpanHospital
        userDetails={props.userDetails}
      />
      <ul className="hospitalHeader-List">
        <li>
          <a href={"#" + headerArray[0]}>
            Hospital
          </a>
        </li>
        <li>
          <a href={"#" + headerArray[1]}>
            Pharmacy
          </a>
        </li>
        <li>
          <a href={"#" + headerArray[2]}>GP</a>
        </li>
        <li>
          <a href={"#" + headerArray[3]}>
            Clinic
          </a>
        </li>
        <li>
          <a href={"#" + headerArray[4]}>
            Dental
          </a>
        </li>
      </ul>
      {headerArray.map((header, j) => (
        <>
          <h1 id={headerArray[j]}>
            {headerArray[j]}
          </h1>
          <div className="hospitalbody-posts">
            {data[j] &&
              data[j]
                .slice(0, 10)
                .map((hospital, i) => {
                  return (
                    <>
                      <InfoCards
                        key={i}
                        organisation={hospital}
                        image={medicalImage}
                      />
                    </>
                  );
                })}
          </div>
        </>
      ))}
    </div>
  );
};

export default HospitalBody;
