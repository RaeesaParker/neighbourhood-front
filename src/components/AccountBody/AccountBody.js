// Design + images
import "./AccountBody.css";

// Components
import SearchBox from "../SearchBox/SearchBox";
import SpanAccount from "../SpanAccount/SpanAccount";
import Feed from "../Feed/Feed";
import PostCard from "../PostCards/PostCard";

const AccountBody = (props) => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanAccount
        userDetails={props.userDetails}
      />
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
