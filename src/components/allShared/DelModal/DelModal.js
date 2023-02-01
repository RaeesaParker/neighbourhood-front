// Design + images
// import { useState } from "react";

// Components
import "./DelModal.css";

// ///////////////

const DelModal = (props) => {
  const handleCancelBtn = () => {
    props.setModal(false);
  };

  return (
    <form className={`delmodal-box `}>
      <div className="delmodal-title">
        <div className="delmodal-t-right">
          <p>Post Deleted</p>
        </div>
        <i
          className="fa-solid fa-x delmodal-x"
          onClick={handleCancelBtn}
        />
      </div>
    </form>
  );
};

export default DelModal;
