/* eslint-disable camelcase */
import { getCookie } from "../../common/index";
const API_URL = process.env.REACT_APP_BASE_URL;

// Create a comment
export const createComment = async (
  commentObject
) => {
  try {
    const response = await fetch(
      `${API_URL}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify(commentObject),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get all comments for a post
export const getComments = async (PostId) => {
  try {
    const response = await fetch(
      `${API_URL}/comment/${PostId}`,
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
    return data;
  } catch (error) {
    console.log(error);
  }
};
