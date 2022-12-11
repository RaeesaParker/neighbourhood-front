// Design + images
import "./AccountBody.css";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanAccount from "../../allAccountPage/SpanAccount/SpanAccount";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";
import { getAllPostUser } from "../../../utils/posts";

const AccountBody = (props) => {
  const [postFilter, setPostFilter] = useState([
    true,
    true,
    true,
    true,
  ]);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
    getPostFunction();
    props.setHaveNewPost(false);
  }, [postFilter, props.haveNewPost]);

  const getPostFunction = async () => {
    let getPost = [];
    if (searchTerm) {
      getPost = await searchPost(searchTerm);
      setSearchTerm("");
    } else {
      getPost = await getAllPostUser(
        postFilter,
        props.userDetails.user_id
      );
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
      <SpanAccount
        userDetails={props.userDetails}
      />
      <Feed setPostFilter={setPostFilter} />
      <div className="mainbody-posts">
        {props.postDetails.length > 0 ? (
          <Masonry
            breakpointCols={breakpointPostCards}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.postDetails.map((post, i) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  userDetails={props.userDetails}
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

export default AccountBody;
