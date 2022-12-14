// Design + images
import "./AccountBody.css";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanAccount from "../../allAccountPage/SpanAccount/SpanAccount";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";
import DelModal from "../../allShared/DelModal/DelModal";
import {
  getAllPostUser,
  searchUserPosts,
} from "../../../utils/posts";

const AccountBody = (props) => {
  // Set the post details to be blank on the first
  // render so that it doesn't crash when you reload a page

  const [postFilter, setPostFilter] = useState([
    true,
    true,
    true,
    true,
  ]);

  const [searchTerm, setSearchTerm] =
    useState("");

  // Modal handling when deleting a post
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (props.userObtained == true) {
      getPostFunction();
      props.setHaveNewPost(false);
    }
  }, [
    props.userObtained,
    postFilter,
    props.haveNewPost,
  ]);

  const getPostFunction = async () => {
    let getPost = [];
    if (searchTerm) {
      getPost = await searchUserPosts(
        searchTerm,
        props.userDetails.user_id
      );
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
    1500: 2,
    1050: 1,
  };

  return (
    <div className="mainbody-box">
      {modal && <DelModal setModal={setModal} />}
      <div className="mobile-hide">
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setHaveNewPost={props.setHaveNewPost}
        />
      </div>
      <div className="mobile-span">
        <SpanAccount
          userDetails={props.userDetails}
        />
      </div>
      <div className="mobile-feed">
        <Feed setPostFilter={setPostFilter} />
      </div>
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
                  getPostFunction={
                    getPostFunction
                  }
                  toggleModal={toggleModal}
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
