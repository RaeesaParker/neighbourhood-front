// Design + images
import "./SavedPostsCard.css";
import { useState } from "react";
// Components
import {
  favoritePost,
  getPostById,
} from "../../../utils/posts";

const SavedPostsCard = (props) => {
  // localPost in state is used to allow the post to be updated
  // without the need to pull all the post data.
  const [localPost, setLocalPost] = useState(
    props.post
  );

  const [bookmarked, setBookmarked] = useState(
    props.post.fav
  );

  // Remove a post from the book marks
  const handleDelete = async () => {
    setBookmarked(!bookmarked);
    // need to fetch endpoint
    await favoritePost({
      user_id: props.userDetails.user_id,
      post_id: props.post.id,
    });
    const updatedPost = await getPostById(
      props.post.id
    );
    setLocalPost(updatedPost);
    // Refresh the saved posts once one has been deleted
    props.getSavedFunction();
  };

  return (
    <>
      {localPost.user_id && (
        <div
          className={`saved-postcard ${
            localPost.post_type === 1
              ? "saved-postcard-bg1"
              : localPost.post_type === 2
              ? "saved-postcard-bg2"
              : localPost.post_type === 3
              ? "saved-postcard-bg3"
              : localPost.post_type === 4
              ? "saved-postcard-bg4"
              : "postcard-bg"
          }`}
        >
          <div className="saved-postcard-head">
            <div className="saved-postcard-user">
              <i className="fa-solid fa-user-large"></i>
              <p>@{localPost.user_name}</p>
            </div>
            <i
              id="saved-trashcan"
              className="fa-solid fa-bookmark"
              onClick={handleDelete}
            ></i>
          </div>
          <hr />
          <div className="saved-postcard-text">
            <p>{localPost.post_content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedPostsCard;
