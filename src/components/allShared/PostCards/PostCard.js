// Design + images
import "./PostCard.css";
import fakeuser from "../../../imgs/fakeuser.png";
import {
  likePost,
  favoritePost,
  getPostById,
  deletePost,
} from "../../../utils/posts";
import {
  createComment,
  getComments,
  // getComments,
} from "../../../utils/comments";

// Components
import { useState } from "react";

// Info Model
import InfoModal from "../InfoModal/InfoModal";

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

  // info modal
  const [imVis, setImVis] = useState(false);

  // comment state management
  const [commentSpan, setCommentSpan] =
    useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [liked, setLiked] = useState(
    post.userLike
  );
  const [newComment, setNewComment] =
    useState("");
  const [comments, setComments] = useState([]);

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
    if (!commentSpan) {
      loadComments();
    }
    setCommentSpan(!commentSpan);
  };

  const loadComments = async () => {
    const results = await getComments(post.id);
    if (results.length > 0) {
      setComments(results);
    }
  };

  const handleNewComment = async (e) => {
    e.preventDefault();
    const result = await createComment({
      PostId: post.id,
      userId: userDetails.user_id,
      content: newComment,
    });
    setViewAll(true);
    if (result) {
      // not sure if the result needs to be handled
      setNewComment("");
      loadComments();
      setCommentSpan(true);
    }
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
    <>
      {imVis && (
        <InfoModal
          title={"Delete Post"}
          message={
            "Are you sure you wish to delete this post?"
          }
          buttons={["No", "Yes"]}
          actionOn={"Yes"}
          action={handleDelete}
          setVis={setImVis}
        />
      )}

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
                <h3>
                  @
                  {localPost.user_name.toLowerCase()}
                </h3>
                <p>
                  {postDate.toLocaleDateString()}{" "}
                  at{" "}
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
                <i className="fa-solid fa-file-pen visibility-hidden"></i>
              ) : (
                <></>
              )}
              {userDetails.user_id ==
              post.user_id ? (
                <i
                  id="postcard-trash"
                  className="fa-solid fa-trash"
                  onClick={() => setImVis(true)}
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
              <p>{post.comments} Comments</p>
            </div>
            <div className="postcard-right">
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
              >
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
              </i>
            </div>
          </div>
          {commentSpan && (
            <div className="comment-span">
              <p
                className="comment-span-viewall"
                onClick={() =>
                  setViewAll(!viewAll)
                }
              >
                {`${
                  !viewAll
                    ? `View all ${comments.length} comments...`
                    : `Hide all ${comments.length} comments...`
                }`}
              </p>
              {viewAll && (
                <div>
                  <div className="comment-span-all">
                    {comments.map((comment) => {
                      return (
                        <p key={comment.id}>
                          @
                          <strong>
                            {comment.user_name.toLowerCase()}
                          </strong>
                          :{comment.content}
                        </p>
                      );
                    })}
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
                  value={newComment}
                  onChange={(e) =>
                    setNewComment(
                      e.currentTarget.value
                    )
                  }
                />
                <button className="comment-span-btn">
                  Post
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;
