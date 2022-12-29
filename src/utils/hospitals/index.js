// Utils for the hospitals information


export const nearHospitals = async (pcd) => {
  try {
    const response = await fetch(
      `https://api.nhs.uk/service-search?api-version=2&search=${pcd}&$top=1000`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "subscription-key":
            "8ba74e49f6d74538a07607d9d66fee46",
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
