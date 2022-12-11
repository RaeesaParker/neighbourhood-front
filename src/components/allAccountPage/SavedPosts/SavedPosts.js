// Design + images
import "./SavedPosts.css";
// import { useState } from "react";
import { useEffect } from "react";
import SavedPostsCard from "../SavedPostsCard/SavedPostsCard";
import { getPostsLikedByUser } from "../../../utils/posts";

const SavedPosts = (props) => {
  // // Create a state to hold the array of liked posts
  // const [likedPosts, setLikedPosts] = useState(
  //   []
  // );

  // Get all the posts liked by a user
  useEffect(() => {
    getSavedFunction();
  }, []);

  const getSavedFunction = async () => {
    const likedPosts = await getPostsLikedByUser(
      props.userDetails.user_id
    );
    console.log(likedPosts);
  };

  return (
    <div>
      <div className="allsaved-header">
        <h3>Saved posts:</h3>
        <i className="fa-solid fa-bookmark"></i>{" "}
      </div>
      <div className="allsaved-feed">
        <SavedPostsCard
          userDetails={props.userDetails}
        />
      </div>
    </div>
  );
};

export default SavedPosts;
