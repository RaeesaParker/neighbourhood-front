// Design + images
import "./HospitalBody.css";
import medicalImage from "../../../imgs/medical.jpg";

// Components
import SpanHospital from "../../allHospital/SpanHospital/SpanHospital";
import InfoCardsHospital from "../../allShared/InfoCardsHospital/InfoCardsHospital";

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
        Website: element.URL,
      };
      element.Contacts.forEach((addressBook) => {
        const contacts = addressBook.ContactValue;
        objToAdd.Addressbook = contacts;
      });
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
    "Hospitals",
    "Pharmacies",
    "GP's",
    "Clinics",
    "Dentals",
  ];

  return (
    <div className="mainbody-box">
      <SpanHospital
        userDetails={props.userDetails}
      />
      <div className="hospital-selector">
        <p></p>
        <ul className="hospitalHeader-List">
          <li>
            <a href={"#" + headerArray[0]}>
              Hospitals
            </a>
          </li>
          <li>
            <a href={"#" + headerArray[1]}>
              Pharmacies
            </a>
          </li>
          <li>
            <a href={"#" + headerArray[2]}>
              GP&apos;s
            </a>
          </li>
          <li>
            <a href={"#" + headerArray[3]}>
              Clinics
            </a>
          </li>
          <li>
            <a href={"#" + headerArray[4]}>
              Dentals
            </a>
          </li>
        </ul>
      </div>
      {headerArray.map((header, j) => (
        <>
          <h1 id={headerArray[j]}>
            {headerArray[j]}
          </h1>
          <div className="hospitalbody-posts">
            {data[j] &&
              data[j]
                .slice(0, 4)
                .map((hospital, i) => {
                  return (
                    <>
                      <InfoCardsHospital
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
