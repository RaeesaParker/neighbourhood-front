// Design + images
import "./SideAccount.css";
import userProfile from "../../../imgs/profiles/profile1.jpg";
import { useState } from "react";

// Components

const SideAccount = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [postcode, setPostcode] = useState();
  const [editAcc, setEditAcc] = useState(true);

  // Functions to interact with the backend, maybe need to change naming
  const updateUsername = async (e) => {
    e.preventDefault();
    await updateUser(user, "username", username);
  };

  const updateEmail = async (e) => {
    e.preventDefault();
    await updateUser(user, "email", email);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    await updateUser(user, "password", password);
  };

  const updatePoscode = async (e) => {
    e.preventDefault();
    await updateUser(user, "postcode", postcode);
  };

  const handleClick = () => {
    setEditAcc(!editAcc);
  };

  return (
    <div className="sideaccount">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <h4>Username</h4>
        </div>
        <div id="subsection-panel-image-div">
          <img
            src={userProfile}
            alt="Logo"
            id="fig-user"
          />
        </div>
      </div>
      <div className="sideacc-edit">
        <button
          onClick={handleClick}
          className="btn-editacc"
        >
          Edit my Account
        </button>
        {editAcc && (
          <div className="group-editacc">
            <form
              className="form-editacc"
              onSubmit={
                (updateUsername,
                updateEmail,
                updatePassword,
                updatePoscode)
              }
            >
              <div>
                <label>
                  <p>Username</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <input
                  placeholder="username"
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                ></input>
                <hr />
              </div>
              <div>
                <label>
                  <p>Email adress</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <input
                  placeholder="useremail@email.com"
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                ></input>
                <hr />
              </div>
              <div>
                <label>
                  <p>Password</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <input
                  placeholder="passsword"
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                ></input>
                <hr />
              </div>
              <div>
                <label>
                  <p>Post Code</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <input
                  placeholder="postcode"
                  onChange={(e) =>
                    setPostcode(e.target.value)
                  }
                ></input>
                <hr />
              </div>

              <button
                type="submit"
                className="btn-changeacc"
              >
                Change informations
              </button>
            </form>
            <div className="form-editacc-btns">
              <button
                onClick={handleClick}
                className="btn-backacc"
              >
                Back
              </button>
              <button className="btn-deleteacc">
                Delete account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideAccount;
