// Design + images
import "./SavedPostsCard.css";

// Components

const SavedPostsCard = (props) => {
  return (
    <div
      className={`saved-postcard ${
        props.post.post_type === 1
          ? "saved-postcard-bg1"
          : props.post.post_type === 2
          ? "saved-postcard-bg2"
          : props.post.post_type === 3
          ? "saved-postcard-bg3"
          : props.post.post_type === 4
          ? "saved-postcard-bg4"
          : "postcard-bg"
      }`}
    >
      <div className="saved-postcard-head">
        <div className="saved-postcard-user">
          <i className="fa-solid fa-user-large"></i>
          <p>@{props.post.user_name}</p>
        </div>
        <i
          id="saved-trashcan"
          className="fa-solid fa-trash"
        ></i>
      </div>
      <hr />
      <div className="saved-postcard-text">
        <p>{props.post.post_content}</p>
      </div>
    </div>
  );
};

export default SavedPostsCard;
