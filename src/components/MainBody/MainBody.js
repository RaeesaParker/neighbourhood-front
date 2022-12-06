// Design + images
import "./MainBody.css";

// Components
import SearchBox from "../SearchBox/SearchBox";
import SpanMainPage from "../SpanMainPage/SpanMainPage";
import NewPost from "../NewPost/NewPost";
import Feed from "../Feed/Feed";

// ////////////////

const MainBody = () => {
  return (
    <div className="mainbody-box">
      <SearchBox />
      <SpanMainPage />
      <NewPost />
      <Feed />
    </div>
  );
};

export default MainBody;
