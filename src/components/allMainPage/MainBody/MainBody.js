// Design + images
import "./MainBody.css";
import { useEffect, useState } from "react";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanMainPage from "../../allMainPage/SpanMainPage/SpanMainPage";
import NewPost from "../../allMainPage/NewPost/NewPost";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";
import { getAllPost } from "../../../utils/posts";

// ////////////////

const MainBody = (props) => {
  // postFilter is the filter array for the posts.  Propped down the
  // Feed component to allow users to choose post catagories.

  const [postFilter, setPostFilter] = useState([
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    getPostFunction();
    props.setHaveNewPost(false);
  }, [postFilter, props.haveNewPost]);

  // post filter is used to filter the posts.
  // postFilter is an array of catagories to filter by
  // setPostFilter should be passed to the feed to set
  // postFilter should be sent to the getPostFunction
  // once it can handle it.

  const getPostFunction = async () => {
    const getPost = await getAllPost(postFilter);
    props.setPostDetails(getPost);
  };

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanMainPage
        userDetails={props.userDetails}
      />
      <NewPost
        userDetails={props.userDetails}
        setHaveNewPost={props.setHaveNewPost}
      />
      <Feed setPostFilter={setPostFilter} />
      <div className="mainbody-posts">
        {props.postDetails?.length > 0 ? (
          <div className="mainbody-posts">
            {props.postDetails.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  userDetails={props.userDetails}
                  post={post}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-posts">
            <h2>
              No posts at the moment. Sorry.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBody;
