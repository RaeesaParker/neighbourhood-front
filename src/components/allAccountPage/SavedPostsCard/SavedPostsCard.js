// Design + images
import "./SavedPostsCard.css";

// Components

const SavedPostsCard = (props) => {
  return (
    <div className="saved-postcard saved-postcard-bg2">
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
