// Design + images
import "./AccountBody.css";

// Components
import SearchBox from "../../allShared/SearchBox/SearchBox";
import SpanAccount from "../../allAccountPage/SpanAccount/SpanAccount";
import Feed from "../../allShared/Feed/Feed";
import PostCard from "../../allShared/PostCards/PostCard";

const AccountBody = () => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanAccount />
      <Feed />
      <div className="mainbody-posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default AccountBody;
