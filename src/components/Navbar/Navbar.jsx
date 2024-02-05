import React from "react";
import "./Navbar.scss";
import { SlArrowDown, SlSizeActual } from "react-icons/sl";
import { FcCollect } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/*<img src="../../public/logo512.png" alt="Logo" />*/}
        <FcCollect size={50}/>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="#">Traffic Rules</a>
          <SlArrowDown style={{color:"black"}}/>
        </li>
        <li className="navbar__menu-item">
          <a href="#">About</a>
          <SlArrowDown style={{color:"black"}}/>
        </li>
        <li className="navbar__menu-item">
          <a href="#">Contact Us</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


