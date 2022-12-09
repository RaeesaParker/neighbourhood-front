// Design + images
import "./NavigationBarStyles.css";
import logo from "../../imgs/logo.svg";

// Components
import { useState } from "react";
import { Link } from "react-router-dom";
import MsgModal from "../allShared/MsgModal/MsgModal";

// Navigation Bar => Logo => Links => Logout Button

function NavigationBar() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

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
        <Link to="/">
          <button className="button-style">
            <i className="fa-solid fa-arrow-right-from-bracket nb-icon"></i>
            <p>Logout</p>
          </button>
        </Link>
      </div>
      {modal && <MsgModal />}
    </div>
  );
}

export default NavigationBar;
