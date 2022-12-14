import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import "./NavigationBarStyles.css";
import logo from "../../imgs/logo.svg";

// Components
import MsgModal from "../allShared/MsgModal/MsgModal";

function NavigationBar(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Modal for new post
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  function onLogOut() {
    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    props.setIsLoggedIn(false);
    navigate("/");
  }

  // Page indicator

  const location = useLocation();

  return (
    <div id="section-navbar">
      <div id="navbar-logo-div">
        <img
          src={logo}
          alt="Logo"
          id="navbar-logo"
        />
      </div>
      <div className="navbar-links-div">
        <Link to="/main" className="Link">
          <button className="button-style">
            <i className="fa-solid fa-house nb-icon"></i>
            <p>Home</p>
          </button>
          <i
            className={`fa-solid fa-caret-left pageindicator indi-main ${
              location.pathname === "/main"
                ? "visibility-visible"
                : ""
            }`}
          />
        </Link>
        <Link to="/user" className="Link">
          <button className="button-style">
            <i className="fa-solid fa-user nb-icon"></i>
            <p>My Account</p>
          </button>
          <i
            className={`fa-solid fa-caret-left pageindicator indi-main ${
              location.pathname === "/user"
                ? "visibility-visible"
                : ""
            }`}
          />
        </Link>
        <button
          id="button-new-post"
          className="button-style"
          onClick={toggleModal}
        >
          <i className="fa-solid fa-plus icon-newpost nb-icon"></i>
          <p>New Post</p>
        </button>
      </div>
      <div className="navbar-links-div">
        <Link to="/schools" className="Link">
          <button className="button-style">
            <i className="fa-solid fa-school nb-icon"></i>
            <p>Schools</p>
          </button>
          <i
            className={`fa-solid fa-caret-left pageindicator indi-main ${
              location.pathname === "/schools"
                ? "visibility-visible"
                : ""
            }`}
          />
        </Link>
        <Link to="/hospitals" className="Link">
          <button className="button-style">
            <i className="fa-solid fa-hospital nb-icon"></i>
            <p>Medical</p>
          </button>
          <i
            className={`fa-solid fa-caret-left pageindicator indi-main ${
              location.pathname === "/hospitals"
                ? "visibility-visible"
                : ""
            }`}
          />
        </Link>
      </div>
      <div className="navbar-links-div">
        <button
          onClick={onLogOut}
          className="button-style"
        >
          <i className="fa-solid fa-arrow-right-from-bracket nb-icon"></i>
          <p>Logout</p>
        </button>
      </div>
      {modal && (
        <MsgModal
          setModal={setModal}
          userDetails={props.userDetails}
          setHaveNewPost={props.setHaveNewPost}
        />
      )}
    </div>
  );
}

export default NavigationBar;
