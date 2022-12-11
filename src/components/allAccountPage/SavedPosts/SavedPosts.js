// Design + images
import "./SavedPosts.css";
import SavedPostsCard from "../SavedPostsCard/SavedPostsCard";

const SavedPosts = (props) => {
  return (
    <div>
      <div className="allsaved-header">
        <h3>Saved posts:</h3>
        <i className="fa-solid fa-bookmark"></i>{" "}
      </div>
      <div className="allsaved-feed">
        <SavedPostsCard />
        <SavedPostsCard />
        <SavedPostsCard />
        <SavedPostsCard />
      </div>
    </div>
  );
};

export default SavedPosts;
