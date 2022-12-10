import React from "react";
import {
  Link,
  useNavigate,
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
    props.setIsLoggedIn(false);
    navigate("/");
  }

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
        <Link to="/main">
          <button className="button-style">
            <i className="fa-solid fa-house nb-icon"></i>
            <p>Home</p>
          </button>
        </Link>
        <Link to="/user">
          <button className="button-style">
            <i className="fa-solid fa-user nb-icon"></i>
            <p>My Account</p>
          </button>
        </Link>
        <button
          id="button-new-post"
          className="button-style"
          onClick={toggleModal}
        >
          <i className="fa-solid fa-plus icon-newpost"></i>
          <p>New Post</p>
        </button>
      </div>
      <div className="navbar-links-div">
        <Link to="/schools">
          <button className="button-style">
            <i className="fa-solid fa-school nb-icon"></i>
            <p>Schools</p>
          </button>
        </Link>
        <Link to="/hospitals">
          <button className="button-style">
            <i className="fa-solid fa-hospital nb-icon"></i>
            <p>Medical</p>
          </button>
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
