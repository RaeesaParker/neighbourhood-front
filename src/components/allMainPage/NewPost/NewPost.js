// Design + images
import "./NewPost.css";
import speechbubble from "../../../imgs/speechbubble.png";

// Components
import { useState } from "react";
import MsgModal from "../../allShared/MsgModal/MsgModal";

// ////////////////

const NewPost = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="newpost">
      {modal && <MsgModal />}
      <form className="newpost-bg">
        <img
          src={speechbubble}
          alt="speech bubble"
        />
        <input
          className="newpost-input"
          placeholder="What is on your mind, neighbour?"
          onClick={toggleModal}
        ></input>
      </form>
    </div>
  );
};

export default NewPost;
