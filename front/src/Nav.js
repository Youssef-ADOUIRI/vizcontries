import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <a className="app-title" href="#">VIS-COUNTRIES</a>
      <ul className="navbar_ul">
        <li className="about">
          <a href="#" className="about_btn">about</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
