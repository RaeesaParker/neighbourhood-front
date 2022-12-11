// Design + images
import "./MainBody.css";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanMainPage from "../../allMainPage/SpanMainPage/SpanMainPage";
import NewPost from "../../allMainPage/NewPost/NewPost";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";
import {
  getAllPost,
  searchPost,
} from "../../../utils/posts";

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

  const [searchTerm, setSearchTerm] = useState([
    "",
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
    let getPost = [];
    if (searchTerm) {
      getPost = await searchPost(searchTerm);
      setSearchTerm("");
    } else {
      getPost = await getAllPost(postFilter);
    }
    props.setPostDetails(getPost);
  };


  const breakpointPostCards = {
    default: 4,
    1920: 3,
    1450: 2,
    1050: 1,
  };

  return (
    <div className="mainbody-box">
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setHaveNewPost={props.setHaveNewPost}
      />
      <SpanMainPage
        userDetails={props.userDetails}
      />
      <NewPost
        userDetails={props.userDetails}
        setHaveNewPost={props.setHaveNewPost}
      />
      <Feed setPostFilter={setPostFilter} />
      {/* <div className="mainbody-posts"> */}
      <div className="mainbody-posts">
        {props.postDetails?.length > 0 ? (
          <Masonry
            breakpointCols={breakpointPostCards}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.postDetails.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  userDetails={props.userDetails}
                  post={post}
                />
              );
            })}
          </Masonry>
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
