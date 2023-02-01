// Utils for the hospitals information
// const API_KEY = process.env.REACT_APP_BASE_HOSPITAL;
const API_KEY = process.env.REACT_APP_HOSPITAL_KEY;

export const nearHospitals = async (pcd) => {
  try {
    const response = await fetch(
      `https://api.nhs.uk/service-search?api-version=2&search=${pcd}&$top=1000`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "subscription-key":
            API_KEY,
          // subscription-key
        },
      }
    );
    const data = await response.json();
    // console.log("data from api", data);

    if (!data.error) {
      return data;
    } else {
      return false;
    }
  } catch (error) {}
};
