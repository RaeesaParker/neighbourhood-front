// Utils for the hospitals information

// Inside the Hospital Page .js, there is a useEffect that checks the cookie
// This returns a variable called userDetails. This will contain the postcode
// Send this postcode the the getHospitals function
// Inside this function , call the nearHospitals get request - which you will write here in index.js
// The API requires you to send a postcode.
// The API Key below should be stored in the .env file
// You need to bring back an array of objects that contain the following info about a hospital -
// {
//   Name: "Smith Medical",
//   Type: "Pharmacy",
//   Street: "2 Main Drive",
//   Postcode: "PR7 8GH",
//   Telephone: "01772 640128",
//   Website: "https://google.com",
// }

// This is sent to the Hospital Body to JS as a prop
// Send this prop to the InfoCards Componant in a prop called organsiation
// This organisation prop is hard coded so you just need to swap out the arrays

// NHS Digitial develeoper account -
// https://developer.api.nhs.uk/login
// API Doc -
// https://developer.api.nhs.uk/nhs-api/documentation/service-search-organisations-2
// user name = codenation.m42@gmail.com
// Password - codenation.m42
// API Key -  8ba74e49f6d74538a07607d9d66fee46

export const nearHospitals = async (pcd) => {
  try {
    const response = await fetch(
      `https://api.nhs.uk/service-search?api-version=2&search=${pcd}&$top=50`,
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
    console.log("data from api", data);

    if (!data.error) {
      return data;
    } else {
      return false;
    }
  } catch (error) {}
};
