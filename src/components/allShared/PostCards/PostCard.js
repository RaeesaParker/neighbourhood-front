// Design + images
import "./PostCard.css";
import fakeuser from "../../../imgs/fakeuser.png";

// Components
import { useState } from "react";

const PostCard = ({ post, user }) => {
  const [liked, setLiked] = useState(false);
  const [shareBtn, setShareBtn] = useState(true);

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handleShared = () => {
    setShareBtn(!shareBtn);
  };

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
          <div className="postcard-head-left">
            <img
              src={fakeuser}
              alt="userpicture"
            />
            <div>
              <h3>{user.name}</h3>
              <p>@{user.user_name}</p>
            </div>
          </div>
          <div className="postcard-head-right">
            <i className="fa-solid fa-file-pen"></i>
            <i className="fa-solid fa-trash"></i>
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
              className={`fa-solid fa-heart ${
                liked ? "liked-post" : ""
              }`}
              onClick={handleLiked}
            />
            <p>
              <span>0</span> Like
              <span>s</span>
            </p>
            <i className="fa-solid fa-bookmark" />
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
