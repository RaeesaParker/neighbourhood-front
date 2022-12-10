// Design + images
import "./PostCard.css";
import fakeuser from "../../../imgs/fakeuser.png";
import {
  likePost,
  favoritePost,
} from "../../../utils/posts";

// Components
import { useState } from "react";

const PostCard = ({ post, userDetails }) => {
  const [bookmarked, setBookmarked] = useState(
    post.fav
  );
  const [liked, setLiked] = useState(
    post.userLike
  );
  const [shareBtn, setShareBtn] = useState(true);

  const handleLiked = async () => {
    setLiked(!liked);
    // need to fetch endpoint
    await likePost({
      user_id: userDetails.user_id,
      post_id: post.id,
    });
  };

  const handleShared = () => {
    setShareBtn(!shareBtn);
    // need to fetch endpoint
  };

  const handleBookmarked = async () => {
    setBookmarked(!bookmarked);
    // need to fetch endpoint
    await favoritePost({
      user_id: userDetails.user_id,
      post_id: post.id,
    });
  };

  const postDate = new Date(post.created_at);

  return (
    <div>
      <div
        className={`postcard ${
          post.post_type === 1
            ? "postcard-bg1"
            : post.post_type === 2
            ? "postcard-bg2"
            : post.post_type === 3
            ? "postcard-bg3"
            : post.post_type === 4
            ? "postcard-bg4"
            : "postcard-bg"
        }`}
      >
        <div className="postcard-head">
          <img src={fakeuser} alt="userpicture" />
          <div>
            <h3>{post.user_name}</h3>
            <p>
              @{postDate.toDateString()} :{" "}
              {postDate.toLocaleTimeString(
                "en-UK"
              )}
            </p>
          </div>
        </div>
        <hr />
        <div className="postcard-text">
          <p>{post.post_content}</p>
        </div>

        <div className="postcard-icons">
          <div>
            <i className="fa-solid fa-comment"></i>
            <p>50 Comments</p>
          </div>
          <div className="postcard-right">
            <div className="share-links">
              <div
                className={`sharebubble ${
                  shareBtn ? "shared-btn" : ""
                }`}
              >
                <i className="fa-brands fa-square-facebook" />
                <i className="fa-brands fa-square-instagram" />
                <i className="fa-brands fa-square-twitter" />
              </div>
            </div>

            <i
              className={`fa-solid fa-bookmark ${
                bookmarked
                  ? "bookmarked-post"
                  : ""
              }`}
              onClick={handleBookmarked}
            />

            <i
              className={`fa-solid fa-heart ${
                liked ? "liked-post" : ""
              }`}
              onClick={handleLiked}
            />
            <i
              className="fa-solid fa-share"
              onClick={handleShared}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
