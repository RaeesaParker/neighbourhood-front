/* eslint-disable camelcase */
// Utils for the post connections
// Write CRUD Functionality
const API_URL = process.env.REACT_APP_API_URL;
// // Create a post => Used to create post
export const createPost = async (
  user_id,
  post_type,
  post_content
) => {
  try {
    const response = await fetch(
      `${API_URL}/post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify({
          post_type: post_type,
          user_id: user_id,
          post_content: post_content,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async () => {
  try {
    const response = await fetch(
      `${API_URL}/posts`,
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

export const getPostById = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/post/${id}`,
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

export const getPostByUserId = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/user/${id}`,
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

export const getPostByPostType = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/type/${id}`,
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

export const updatePost = async (
  id,
  user_id,
  post_type,
  post_content
) => {
  try {
    const response = await fetch(
      `${API_URL}/post/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify({
          post_type: post_type,
          user_id: user_id,
          post_content: post_content,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/${id}`,
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
