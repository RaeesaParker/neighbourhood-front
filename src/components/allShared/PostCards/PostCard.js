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

  return (
    <div>
      <div className="postcard">
        <div className="postcard-head">
          <img src={fakeuser} alt="userpicture" />
          <div>
            <h3>Username</h3>
            <p>Neighbourhood, City</p>
          </div>
        </div>
        <hr />
        <div className="postcard-text">
          <p>
            Hey guys! I found a lost Pug dog here
            on my street and he has a collar with
            the name Teddy... he is here with me
            at my house. Someone lost a dog?!
          </p>
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
