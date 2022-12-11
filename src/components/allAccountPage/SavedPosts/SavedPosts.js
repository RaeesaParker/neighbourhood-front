// Design + images
import "./SavedPosts.css";
import { useState, useEffect } from "react";
// import SavedPostsCard from "../SavedPostsCard/SavedPostsCard";
import { getPostsLikedByUser } from "../../../utils/posts";
import SavedPostsCard from "../SavedPostsCard/SavedPostsCard";
// import SavedPostsCard from "../SavedPostsCard/SavedPostsCard";

const SavedPosts = (props) => {
  // Create a state to hold the array of liked posts
  const [likedPosts, setLikedPosts] = useState(
    []
  );

  // const likedPosts = [{ user_name: "zed" }];

  // // Get all the posts liked by a user
  useEffect(() => {
    getSavedFunction();
  }, []);

  const getSavedFunction = async () => {
    const likedPostsArray =
      await getPostsLikedByUser(
        props.userDetails.user_id
      );
    setLikedPosts(likedPostsArray);
  };

  return (
    <div>
      <div className="allsaved-header">
        <h3>Saved posts:</h3>
        <i className="fa-solid fa-bookmark"></i>
      </div>
      <div className="allsaved-feed">
        {likedPosts.length > 0 ? (
          <div>
            {likedPosts.map((post) => {
              return (
                <div key={post.id}>
                  <SavedPostsCard
                    userDetails={
                      props.userDetails
                    }
                    post={post}
                    getSavedFunction={
                      getSavedFunction
                    }
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-posts">
            <h2>No saved posts.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPosts;
