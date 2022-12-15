// Design + images
import "./SideAccount.css";
import { useNavigate } from "react-router-dom";
import userProfile from "../../../imgs/fakeuser.png";
import { useState } from "react";
import {
  updateUser,
  deleteUser,
} from "../../../utils/users";
import SavedPosts from "../SavedPosts/SavedPosts";
import InfoModal from "../../allShared/InfoModal/InfoModal";
import { Link } from "react-router-dom";

const SideAccount = (props) => {
  // States to hold the updated details
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [editAcc, setEditAcc] = useState(false);

  // Handle open and close of edit pane
  const handleClick = () => {
    setEditAcc(!editAcc);
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
    // Get the updated data and rest the current details
    if (updatedUserDetails) {
      const newObj = {
        user_id: updatedUserDetails.id,
        user_name: updatedUserDetails.user_name,
        password: updatedUserDetails.password,
        email: updatedUserDetails.email,
        postcode: updatedUserDetails.pcd,
      };
      props.setCurrentDetails(newObj);
    }
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
        console.log(
          "Can ignore this unused object ",
          unused
        );
      }
    }
    return modifiedObj;
  };
  // useNavigate to go to login page after delete
  const navigate = useNavigate();
  // Async Function to delete account
  const onDeleteAccount = async (event) => {
    const userId = props.userDetails.user_id;
    const deletedUser = await deleteUser(userId);

    if (deletedUser == true) {
      document.cookie =
        "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      navigate("/");
    } else {
      // console.log("Deleting user unsuccessful");
    }
  };

  // InfoModal to confirm delete
  const [imVis, setImVis] = useState(false);

  return (
    <>
      {imVis && (
        <InfoModal
          title={"Delete Account"}
          message={
            "Deleting your account will remove all of your account data and all of your posts. This action cannot be undone.  Are you sure you wish to delete your account?"
          }
          buttons={["No", "Yes"]}
          actionOn={"Yes"}
          action={onDeleteAccount}
          setVis={setImVis}
        />
      )}
      <div className="sideaccount">
        <div id="subsection-panel-user">
          <div id="subsection-panel-user-div">
            <Link to="/user" className="Link">
              <h4>
                @
                {props.userDetails.username.toLowerCase()}
              </h4>
            </Link>
          </div>

          <div id="subsection-panel-image-div">
            <Link to="/user">
              <img
                src={userProfile}
                alt="Logo"
                id="fig-user"
              />
            </Link>
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
                  </label>
                  <input
                    placeholder={
                      props.currentDetails
                        .user_name
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
                  </label>
                  <input
                    type="email"
                    placeholder={
                      props.currentDetails.email
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
                  </label>
                  <input
                    placeholder={
                      props.currentDetails
                        .postcode
                    }
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
                  Change information
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
                  onClick={() => setImVis(true)}
                  className="btn-deleteacc"
                >
                  Delete account
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="allsaved-posts">
          <SavedPosts
            userDetails={props.userDetails}
            userObtained={props.userObtained}
          />
        </div>
      </div>
    </>
  );
};

export default SideAccount;
