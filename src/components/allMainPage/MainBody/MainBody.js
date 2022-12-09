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
  useEffect(() => {
    getPostFunction();
  }, []);

  // post filter is used to filter the posts.
  // postFilter is an array of catagories to filter by
  // setPostFilter should be passed to the feed to set
  // postFilter should be sent to the getPostFunction
  // once it can handle it.
  const [postFilter, setPostFilter] = useState([
    1, 2, 3, 4,
  ]);

  const getPostFunction = async () => {
    const getPost = await getAllPost();
    console.log(getPost);
    props.setPostDetails(getPost);
  };

  //     id: 1,
  //     post_type: 1,
  //     user_id: 1,
  //     post_content:
  //       "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanMainPage
        userDetails={props.userDetails}
      />
      <NewPost userDetails={props.userDetails} />
      <Feed setPostFilter={setPostFilter} />
      <div className="mainbody-posts">
        {props.postDetails.length > 0 ? (
          <div className="mainbody-posts">
            {props.postDetails.map((post) => {
              return (
                <PostCard
                  key={post.id}
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
