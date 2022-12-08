// // Utils for the user connection
// import { writeCookie } from "../../common/index";

// // Register a user => Used to create user
// export const registerUser = async (
//   username,
//   email,
//   password,
//   postcode,
//   setUserDetails
// ) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5001/addUser`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//           email: email,
//           password: password,
//           postcode:
//           postcode,
//         }),
//       }
//     );
//     const data = await response.json();
//     setUserDetails({
//       username: data.username,
//       user_id: data.id,
//       user_areaCode: data.areaCode,
//     });
//     writeCookie("jwt_token", data.token, 7);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Login a user without a cookie
// export const loginUser = async (
//   username,
//   password,
//   setUserDetails
// ) => {
//   try {
//     const response = await fetch(
//       "http://localhost:5001/auth",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       }
//     );
//     const data = await response.json();
//     if (data.username) {
//       setUserDetails({
//         username: data.username,
//         user_id: data.id,
//         user_areaCode: data.areaCode,
//       });
//       writeCookie("jwt_token", data.token, 7);
//       return true;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Find a user based on a cookie
// export const findUser = async (
//   cookieValue,
//   setUserDetails
// ) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5001/auth`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${cookieValue}`,
//         },
//       }
//     );
//     const data = await response.json();
//     setUserDetails({
//       username: data.username,
//       user_id: data.id,
//       user_areaCode: data.areaCode,
//     });
//     return true;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Update a user's details
// export const updateUser = async (
//   user_id,
//   keyField,
//   value
// ) => {
//   try {
//     console.log(
//       "The parameters being passed are, ",
//       user_id,
//       keyField,
//       value
//     );
//     const response = await fetch(
//       `http://localhost:5001/users/${user_id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           [keyField]: value,
//         }),
//       }
//     );
//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Delete a user
// export const deleteUser = async (user_id) => {
//   try {
//     const response = await fetch(
//       `http://localhost:5001/users/${user_id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
