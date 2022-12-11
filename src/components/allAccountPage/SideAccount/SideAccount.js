// Design + images
import "./SideAccount.css";
import userProfile from "../../../imgs/profiles/profile1.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUser,
  updateUser,
  deleteUser,
} from "../../../utils/users";

const SideAccount = (props) => {
  // Navigation for redirect
  const navigate = useNavigate();

  // States to hold the updated details
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [editAcc, setEditAcc] = useState(true);

  // State to store the current user details => will remain empty for firt render
  const [currentDetails, setCurrentDetails] =
    useState({
      user_name: null,
      password: null,
      email: null,
      postcode: null,
    });

  // Handle open and close of edit pane
  const handleClick = () => {
    setEditAcc(!editAcc);
  };

  // Function to get the user data (username, email and postcode)
  useEffect(() => {
    getUserDetailsFunc();
  }, []);

  const getUserDetailsFunc = async () => {
    const userData = await getUser(
      props.userDetails.user_id
    );
    setCurrentDetails(userData);
  };

  //  Function to update the user parameters
  const updateValues = async (event) => {
    event.preventDefault();
    // Make an object containing the updated values
    const updatedObj = {
      user_name: username,
      email: email,
      password: password,
      pcd: postcode,
    };
    // Reduce the object down to just the updated fields
    const reducedData = await reduceObject(
      updatedObj
    );
    // Send the reduced data to the update request
    const updatedUserDetails = await updateUser(
      props.userDetails.user_id,
      reducedData,
      props.setUserDetails
    );
    setEditAcc(!editAcc);
    getUserDetailsFunc();
  };

  // Reduce the object to only the updated fields
  const reduceObject = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let modifiedObj = obj;

    // loop through the values and remove the key if the value is falsy
    for (let i = keys.length; i >= 0; i--) {
      if (!values[i]) {
        const { [keys[i]]: unused, ...tempObj } =
          modifiedObj;
        modifiedObj = tempObj;
      }
    }
    return modifiedObj;
  };

  // Async Function to delete account
  const onDeleteAccount = async (event) => {
    event.preventDefault();
    const userId = props.userDetails.user_id;
    const deletedUser = await deleteUser(userId);

    if (deletedUser == true) {
      navigate("/");
    } else {
      console.log("Deleting user unsuccessful");
    }
  };

  return (
    <div className="sideaccount">
      <div id="subsection-panel-user">
        <div id="subsection-panel-user-div">
          <h4>{props.userDetails.username}</h4>
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
              onSubmit={updateValues}
            >
              <div>
                <label>
                  <p>Username</p>
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <input
                  placeholder={
                    currentDetails.user_name
                  }
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
                  placeholder={
                    currentDetails.email
                  }
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
                  placeholder="**********"
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
                  placeholder={currentDetails.pcd}
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
              <button
                onClick={onDeleteAccount}
                className="btn-deleteacc"
              >
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
