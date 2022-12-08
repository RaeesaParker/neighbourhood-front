// Design + images
import "./MainBody.css";

// Components
import SearchBox from "../SearchBox/SearchBox";
import SpanMainPage from "../SpanMainPage/SpanMainPage";
import NewPost from "../NewPost/NewPost";
import Feed from "../Feed/Feed";
import PostCard from "../PostCards/PostCard";

// ////////////////

const MainBody = (props) => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanMainPage
        userDetails={props.userDetails}
      />
      <NewPost />
      <Feed />
      <div className="mainbody-posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default MainBody;
