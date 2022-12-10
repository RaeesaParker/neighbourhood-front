// Design + images
import "./AccountBody.css";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    getPostFunction();
    props.setHaveNewPost(false);
  }, [postFilter, props.haveNewPost]);

  const getPostFunction = async () => {
    const getPost = await getAllPostUser(
      postFilter,
      props.userDetails.user_id
    );
    props.setPostDetails(getPost);
  };

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanAccount
        userDetails={props.userDetails}
      />
      <Feed setPostFilter={setPostFilter} />
      <div className="mainbody-posts">
        {props.postDetails.length > 0 ? (
          <div className="mainbody-posts">
            {props.postDetails.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  userDetails={props.userDetails}
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

export default AccountBody;
