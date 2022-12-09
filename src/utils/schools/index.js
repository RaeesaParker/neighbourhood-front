import { getCookie } from "../../common/index";
// Utils for the schools information

export const nearSchools = async (userRegion) => {
  try {
    const response = await fetch(
      `https://web-production-2000.up.railway.app/schools/${userRegion}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
      }
    );
    const data = await response.json();
    if (!data.error) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
