// Design + images
import "./PostCard.css";
import fakeuser from "../../../imgs/fakeuser.png";

// Components
import { useState } from "react";

const PostCard = () => {
  const [liked, setLiked] = useState(false);
  const [shareBtn, setShareBtn] = useState(true);

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handleShared = () => {
    setShareBtn(!shareBtn);
  };

  // fake user
  const user = {
    user_name: "ijwilliamson",
    email: "ian@mail.com",
    password: "password",
    pcd: "SW1A 1AA",
    name: "Ian Williamson",
    address: "1 Downing Street",
  };

  const post = {
    id: 1,
    post_type: 1,
    user_id: 1,
    post_content:
      "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
          <img src={fakeuser} alt="userpicture" />
          <div>
            <h3>{user.name}</h3>
            <p>@{user.user_name}</p>
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

            <i className="fa-solid fa-bookmark" />
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
