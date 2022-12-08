// Design + images
import "./NewPost.css";
import speechbubble from "../../../imgs/speechbubble.png";

// ////////////////

const NewPost = () => {
  return (
    <div className="newpost">
      <form className="newpost-bg">
        <img
          src={speechbubble}
          alt="speech bubble"
        />
        <input
          className="newpost-input"
          placeholder="What is on your mind, neighbour?"
        ></input>
      </form>
    </div>
  );
};

export default NewPost;
