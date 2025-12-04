import React from "react";

function Navbar({ onMenuClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <i className="material-icons menu-icon" onClick={onMenuClick}>
          menu
        </i>
        <div className="navbar-logo">
          <i className="material-icons">play_circle_filled</i>
          <span className="logo-text">MyTube</span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="navbar-right">
        <i className="material-icons">videocam</i>
        <i className="material-icons">notifications</i>
        <img
          src="https://i.pravatar.cc/32"
          alt="Profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
}

export default Navbar;
