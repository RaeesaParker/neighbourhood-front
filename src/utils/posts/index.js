/* eslint-disable camelcase */
import { getCookie } from "../../common/index";
const API_URL = process.env.REACT_APP_API_URL;

// Create a post
export const createPost = async (postObject) => {
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
          post_type: postObject.post_type,
          user_id: postObject.user_id,
          post_content: postObject.post_content,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Updated to use the type endpoint that takes an array of types
export const getAllPost = async (postFilter) => {
  try {
    if (!postFilter.includes(true)) {
      return [];
    }
    // build filter array
    let filter = "[";
    for (let i = 0; i < postFilter.length; i++) {
      if (postFilter[i]) {
        filter += `${i + 1},`;
      }
    }
    filter = filter.slice(0, filter.length - 1);
    filter = filter + "]";

    const response = await fetch(
      `${API_URL}/posts/type/${filter}`,
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

// Updated to use the type endpoint that takes an array of types
export const searchPost = async (searchTerm) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/search/${searchTerm}`,
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

// Get all the posts from a user => Apply the filter for various post types
export const getAllPostUser = async (
  postFilter,
  userId
) => {
  try {
    if (!postFilter.includes(true)) {
      return [];
    }
    // build filter array
    let filter = "[";
    for (let i = 0; i < postFilter.length; i++) {
      if (postFilter[i]) {
        filter += `${i + 1},`;
      }
    }
    filter = filter.slice(0, filter.length - 1);
    filter = filter + "]";

    const response = await fetch(
      `${API_URL}/posts/user/${userId}/type/${filter}`,
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

// Get a specific post
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

// Get a post from a specfic user
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

// Update a specific post
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

// Delete a specific post
export const deletePost = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/post/${id}`,
      {
        method: "DELETE",
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

// set a post as liked or unliked
export const likePost = async (likeObject) => {
  try {
    const response = await fetch(
      `${API_URL}/post/like`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify({
          user_id: likeObject.user_id,
          post_id: likeObject.post_id,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// set a post as favourite or unfavourite
export const favoritePost = async (
  favoriteObject
) => {
  try {
    const response = await fetch(
      `${API_URL}/post/favorite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + getCookie("jwt_token"),
        },
        body: JSON.stringify({
          user_id: favoriteObject.user_id,
          post_id: favoriteObject.post_id,
        }),
      }
    );
    const data = await response.json();
    console.log("Post has been favourited", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get all posts liked by a user
export const getPostsLikedByUser = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/user/favourite/${id}`,
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
    console.log("Data returned is ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
