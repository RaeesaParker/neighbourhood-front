// Utils for the user connection
import {
  writeCookie,
  getCookie,
} from "../../common/index";

// Register a user => Used to create user
export const registerUser = async (
  username,
  email,
  password,
  postcode,
  setUserDetails
) => {
  try {
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
    if (data.user_name) {
      setUserDetails({
        username: data.user_name,
        user_id: data.id,
        user_regionId: data.region_id,
      });
      writeCookie("jwt_token", data.token, 7);
      return true;
    } else {
      return data.error;
    }
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
      `https://web-production-2000.up.railway.app/auth/checkToken`,
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
    if (data.user_name) {
      setUserDetails({
        username: data.user_name,
        user_id: data.id,
        user_regionId: data.region_id,
      });
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Login a user without a cookie
export const loginUser = async (
  username,
  password,
  setUserDetails
) => {
  try {
    const response = await fetch(
      "https://web-production-2000.up.railway.app/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          password: password,
        }),
      }
    );
    const data = await response.json();
    if (data.user_name) {
      setUserDetails({
        username: data.user_name,
        user_id: data.id,
        user_regionId: data.region_id,
      });
      writeCookie("jwt_token", data.token, 7);
      return true;
    } else {
      return data.status;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get a users details
export const getUser = async (userId) => {
  try {
    console.log(userId);
    const response = await fetch(
      `https://web-production-2000.up.railway.app/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
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

// Update a user's details
export const updateUser = async (
  userId,
  updateObject,
  setUserDetails
) => {
  try {
    const response = await fetch(
      `https://web-production-2000.up.railway.app/user/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify(updateObject),
      }
    );
    const data = await response.json();
    console.log("Updated details are ", data);
    setUserDetails({
      username: data.user_name,
      user_id: data.id,
      user_regionId: data.region_id,
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(
      `https://web-production-2000.up.railway.app/user/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (!data.error) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
