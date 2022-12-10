// Design + images
import { useState } from "react";

// Components
import "./MsgModal.css";

// ///////////////

const MsgModal = () => {
  const [cancelBtn, setCancelBtn] =
    useState(false);
  const [newPost, setNewPost] = useState({
    post_type: null,
    user_id: null,
    post_content: null,
  });
  const [errorMessage, setErrorMessage] =
    useState("");

  const maxCharsValidation = (e) => {
    // Basic validation to check the max characters
    if ((e.target.length = 200)) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return setErrorMessage(
        "Ops! Maximum characters allowed per post: 200."
      );
    }

    setNewPost({
      ...newPost,
      post_content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newPost.post_content) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return setErrorMessage(
        "Content field can not be empty."
      );
    }

    if (!newPost.post_type) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return setErrorMessage(
        "You must select a category."
      );

      // Function for posting to backend bellow:
    }

    console.log(newPost);
  };

  const handleCancelBtn = () => {
    setCancelBtn(!cancelBtn);
  };

  return (
    <form
      className={`msgmodal-box ${
        cancelBtn ? "display-none" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <div className="msgmodal">
        <div className="msgmodal-title">
          <div className="msgmodal-t-right">
            <i className="fa-solid fa-ellipsis"></i>
            <p>New post</p>
          </div>
          <i
            className="fa-solid fa-x msgmodal-x"
            onClick={handleCancelBtn}
          />
        </div>
        <div className="msgmodal-header">
          <textarea
            maxLength="200"
            onChange={maxCharsValidation}
            placeholder="What's on your mind, neighbour?"
          />
        </div>
        <div className="msgmodal-category">
          <p>Select your post category:</p>
          <div className="msg-filter">
            <div>
              <input
                type="radio"
                id="general"
                name="category"
                value="1"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post_type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="general"
                className="msg-filter-general"
              >
                General
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="buysell"
                name="category"
                value="2"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post_type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="buysell"
                className="msg-filter-buysell"
              >
                Buy and Sell
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="alerts"
                name="category"
                value="3"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post_type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="alerts"
                className="msg-filter-alerts"
              >
                Alerts
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="traffic"
                name="category"
                value="4"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    post_type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="traffic"
                className="msg-filter-traffic"
              >
                Traffic
              </label>
            </div>
          </div>
        </div>
        <div className="msgmodal-buttons">
          {errorMessage && (
            <span className="msgmodal-error">
              {errorMessage}
            </span>
          )}
          <button onClick={handleCancelBtn}>
            Cancel
          </button>
          <button type="submit">
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default MsgModal;
