// Utils for the weather API Call

// Inside the Main Page .js, there is a useEffect that checks the cookie
// This returns a variable called userDetails. This will contain the postcode
// Send this postcode to the getWeather function that you will write INSIDE mainPage.js
// Inside this function , call the getWeather get request - which you will write here in index.js
// Get the weather from the following api by providing the post code -
// https://open-meteo.com/en/docs
// Return an object that contains the following
// {
//   minTemp:
//   maxTemp:
//   weatherCode
// }
// Send this to the sidepanel.js component
// We have hardcoded a weather object in there containing some sample data
// You will need to get the data you fetched from the API from the props
// And update this object created there

// The componenet has been set up so that the image changes dynamically depending on the weather code

export const getWeather = async () => {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=53.78&longitude=-2.71&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon"
    );
    const data = await res.json();
    if (data.error) {
      return;
      //  console.log(data.reason);
    } else {
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
