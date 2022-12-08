// Design + images
import "./MainBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanMainPage from "../../allMainPage/SpanMainPage/SpanMainPage";
import NewPost from "../../allMainPage/NewPost/NewPost";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";

// ////////////////

const MainBody = () => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanMainPage />
      <NewPost />
      <Feed />
      <div className="mainbody-posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        {/* {posts.length > 0 ? (
          <div className="mainbody-posts">
            {posts.map((post, i) => {
              return (
                <PostCard
                  key={i}
                  post={post}
                  user={user}
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
        )} */}
      </div>
    </div>
  );
};

export default MainBody;
