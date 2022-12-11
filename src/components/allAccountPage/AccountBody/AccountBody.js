// Design + images
import "./AccountBody.css";
import Masonry from "react-masonry-css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanAccount from "../../allAccountPage/SpanAccount/SpanAccount";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";

const AccountBody = (props) => {
  // fake user
  const user = {
    user_name: "ijwilliamson",
    email: "ian@mail.com",
    password: "password",
    pcd: "SW1A 1AA",
    name: "Ian Williamson",
    address: "1 Downing Street",
  };
  // fake post
  const posts = [
    {
      id: 1,
      post_type: 1,
      user_id: 1,
      post_content:
        "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 1,
      post_type: 2,
      user_id: 1,
      post_content:
        "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 1,
      post_type: 3,
      user_id: 1,
      post_content:
        "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 1,
      post_type: 4,
      user_id: 1,
      post_content:
        "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 1,
      post_type: 1,
      user_id: 1,
      post_content:
        "This is a post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const breakpointPostCards = {
    default: 4,
    1920: 3,
    1450: 2,
    1050: 1,
  };

  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanAccount
        userDetails={props.userDetails}
      />
      <Feed />
      <div className="mainbody-posts">
        {posts.length > 0 ? (
          <Masonry
            breakpointCols={breakpointPostCards}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, i) => {
              return (
                <PostCard
                  key={i}
                  post={post}
                  user={user}
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
