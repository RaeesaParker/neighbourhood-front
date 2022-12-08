// Utils for the user connection
import { writeCookie } from "../../common/index";

// Register a user => Used to create user
export const registerUser = async (
  username,
  email,
  password,
  postcode,
  setUserDetails
) => {
  try {
    console.log(
      "Values are",
      username,
      email,
      password,
      postcode
    );
    const response = await fetch(
      `https://web-production-2000.up.railway.app/user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          email: email,
          password: password,
          pcd: postcode,
        }),
      }
    );
    const data = await response.json();
    setUserDetails({
      username: data.user_name,
      user_id: data.id,
      user_regionId: data.region_id,
    });
    writeCookie("jwt_token", data.token, 7);
    return data.id;
  } catch (error) {
    console.log(error);
  }
};

// Find a user based on a cookie
export const findUser = async (
  cookieValue,
  setUserDetails
) => {
  try {
    const response = await fetch(
      `https://web-production-2000.up.railway.app/checkToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: cookieValue,
        }),
      }
    );
    const data = await response.json();
    setUserDetails({
      username: data.user_name,
      user_id: data.id,
      user_regionId: data.region_id,
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

// // Login a user without a cookie
// export const loginUser = async (
//   username,
//   password,
//   setUserDetails
// ) => {
//   try {
//     const response = await fetch(
//       "https://web-production-2000.up.railway.app/auth",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_name: username,
//           password: password,
//         }),
//       }
//     );
//     const data = await response.json();
//     if (data.username) {
//       setUserDetails({
//         username: data.user_name,
//         user_id: data.id,
//         user_regionId: data.region_id,
//       });
//       writeCookie("jwt_token", data.token, 7);
//       return true;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Update a user's details
// export const updateUser = async (
//   user_id,
//   username,
//   email,
//   password,
//   postcode,
//   setUserDetails
// ) => {
//   try {
//     const response = await fetch(
//       `https://web-production-2000.up.railway.app/user/${user_id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//            "Authorization: Bearer + getCookie("jwt_token"),
//         },
//         body: JSON.stringify({
//          user_name: username,
//          email: email,
//          password: password,
//          pcd: postcode,
//         }),
//       }
//     );
//     const data = await response.json();
//     setUserDetails({
//       username: data.user_name,
//       user_id: data.id,
//       user_regionId: data.region_id,
//       })
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Delete a user
// export const deleteUser = async (user_id) => {
//   try {
//     const response = await fetch(
//       `https://web-production-2000.up.railway.app/user/${user_id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//            "Authorization: Bearer + getCookie("jwt_token"),
//         },
//       }
//     );
//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
