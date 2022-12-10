// Design + images
import "./NewPost.css";
import speechbubble from "../../../imgs/speechbubble.png";

// Components
import { useState } from "react";
import MsgModal from "../../allShared/MsgModal/MsgModal";

// ////////////////

const NewPost = () => {
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
        <div
          className="newpost-input"
          onClick={toggleModal}
        >
          What is on your mind, neighbour?
        </div>
      </form>
    </div>
  );
};

export default NewPost;
