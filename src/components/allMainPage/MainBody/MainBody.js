// Design + images
import "./MainBody.css";
import { useEffect } from "react";

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
      <Feed />
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
