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
    <form className={`msgmodal-box `}>
      <div className="msgmodal-title">
        <div className="msgmodal-t-right">
          <p>Post Deleted</p>
        </div>
        <i
          className="fa-solid fa-x msgmodal-x"
          onClick={handleCancelBtn}
        />
      </div>
    </form>
  );
};

export default DelModal;
