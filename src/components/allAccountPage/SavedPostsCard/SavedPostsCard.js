// Design + images
import "./SavedPostsCard.css";

// Components

const SavedPostsCard = () => {
  return (
    <div className="saved-postcard saved-postcard-bg2">
      <div className="saved-postcard-head">
        <div className="saved-postcard-user">
          <i className="fa-solid fa-user-large"></i>
          <p>@username</p>
        </div>
        <i className="fa-solid fa-bookmark sv-bm"></i>
      </div>
      <hr />
      <div className="saved-postcard-text">
        <p>
          This is a post. Lorem Ipsum is simply
          dummy text of the printing and
          typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text
          ever since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default SavedPostsCard;
