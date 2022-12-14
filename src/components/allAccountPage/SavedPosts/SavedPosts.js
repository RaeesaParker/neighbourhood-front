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
    if (props.userObtained == true) {
      getSavedFunction();
    }
  }, [props.userObtained]);

  const getSavedFunction = async () => {
    const likedPostsArray =
      await getPostsLikedByUser(
        props.userDetails.user_id
      );
    setLikedPosts(likedPostsArray);
  };

  const [bookmarkedPosts, setBookmarkedPosts] =
    useState(true);

  return (
    <div>
      <div
        onClick={() =>
          setBookmarkedPosts(!bookmarkedPosts)
        }
        className="allsaved-header"
      >
        <div className="allsaved-header-right">
          <i className="fa-solid fa-bookmark"></i>
          <h3>Bookmarked posts:</h3>
        </div>
        <i
          className={`${
            !bookmarkedPosts
              ? "fa-solid fa-angle-down"
              : "fa-solid fa-angle-up"
          }`}
        ></i>
      </div>
      {bookmarkedPosts && (
        <div className="allsaved-feed">
          {likedPosts.length > 0 ? (
            <div className="allsaved-feed-post">
              {likedPosts.map((post) => {
                return (
                  <SavedPostsCard
                    key={post.id}
                    userDetails={
                      props.userDetails
                    }
                    post={post}
                    getSavedFunction={
                      getSavedFunction
                    }
                  />
                );
              })}
            </div>
          ) : (
            <div className="no-posts">
              <h2>No saved posts.</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedPosts;
