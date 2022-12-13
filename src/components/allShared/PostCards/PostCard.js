// Design + images
import "./PostCard.css";
import fakeuser from "../../../imgs/fakeuser.png";
import {
  likePost,
  favoritePost,
  getPostById,
  deletePost,
} from "../../../utils/posts";

// Components
import { useState } from "react";

const PostCard = ({
  post,
  userDetails,
  getPostFunction,
  toggleModal,
}) => {
  // localPost in state is used to allow the post to be updated
  // without the need to pull all the post data.
  const [localPost, setLocalPost] =
    useState(post);

  const [bookmarked, setBookmarked] = useState(
    post.fav
  );
  const [commentSpan, setCommentSpan] =
    useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [liked, setLiked] = useState(false);
  // post.userLike

  const [shareBtn, setShareBtn] = useState(true);

  const handleDelete = async () => {
    // would be nice to have a popup confirmation
    await deletePost(post.id);
    await getPostFunction();
    toggleModal();
  };

  const handleLiked = async () => {
    setLiked(!liked);
    post.userLike;
    // need to fetch endpoint
    await likePost({
      user_id: userDetails.user_id,
      post_id: post.id,
    });

    const updatedPost = await getPostById(
      post.id
    );
    setLocalPost(updatedPost);
  };

  const handleComments = () => {
    setCommentSpan(!commentSpan);
  };

  const handleNewComment = () => {
    setViewAll(!viewAll);
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
    const updatedPost = await getPostById(
      post.id
    );
    setLocalPost(updatedPost);
  };

  const likesString = () => {
    switch (localPost.likes) {
      case 0:
        return <></>;
      case 1:
        return <> {localPost.likes} like</>;
      default:
        return <> {localPost.likes} likes</>;
    }
  };

  const postDate = new Date(localPost.created_at);

  return (
    <div>
      <div
        data-aos="fade-up"
        className={`postcard ${
          localPost.post_type === 1
            ? "postcard-bg1"
            : localPost.post_type === 2
            ? "postcard-bg2"
            : localPost.post_type === 3
            ? "postcard-bg3"
            : localPost.post_type === 4
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
              <h3>@{localPost.user_name}</h3>
              <p>
                {postDate.toLocaleDateString()} at{" "}
                {postDate.toLocaleTimeString(
                  "en-UK",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </p>
            </div>
          </div>
          <div className="postcard-head-right">
            {userDetails.user_id ==
            post.user_id ? (
              <i className="fa-solid fa-file-pen"></i>
            ) : (
              <></>
            )}
            {userDetails.user_id ==
            post.user_id ? (
              <i
                id="postcard-trash"
                className="fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            ) : (
              <></>
            )}
          </div>
        </div>

        <hr />
        <div className="postcard-text">
          <p>{localPost.post_content}</p>
        </div>

        <div className="postcard-icons">
          <div
            onClick={handleComments}
            className="comments-box"
          >
            <i className="fa-solid fa-comment"></i>
            <p>1 Comment</p>
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
            <p>{likesString()}</p>
            <i
              className={`fa-solid fa-bookmark ${
                bookmarked
                  ? "bookmarked-post"
                  : ""
              }`}
              onClick={handleBookmarked}
            />
            <i
              className="fa-solid fa-share btn-forshare"
              onClick={handleShared}
            />
          </div>
        </div>
        {commentSpan && (
          <div className="comment-span">
            <p
              className="comment-span-viewall"
              onClick={() => setViewAll(!viewAll)}
            >
              {`${
                !viewAll
                  ? "View all 34345 comments..."
                  : "Hide all 34345 comments..."
              }`}
            </p>
            {viewAll && (
              <div>
                <div className="comment-span-all">
                  <p>
                    @<strong>Username</strong>:
                    this is my comment, and is
                    very big big big big big big
                    big big big big big big big
                    big big big big big big big
                    big big big big big big big!
                  </p>
                  <p>
                    @<strong>Username</strong>:
                    this is my comment, and is
                    very big big big big big big
                    big big big big big big big
                    big big big big big big big
                    big big big big big big big!
                  </p>
                </div>
              </div>
            )}
            <form
              className="comment-span-user"
              onSubmit={handleNewComment}
            >
              <input
                className="comment-span-input"
                placeholder="Add your comment..."
              />
              <button className="comment-span-btn">
                Post
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
