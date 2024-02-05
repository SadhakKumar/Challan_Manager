import React from "react";
import "./Navbar.scss";
import { SlArrowDown, SlSizeActual } from "react-icons/sl";
import { FcCollect } from "react-icons/fc";
import logo from "../../assets/logo.png";
import Button from "../button/Button";

const Navbar = () => {
  const handleClick = () => {
    console.log("Profile Clicked");
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/*<img src="../../public/logo512.png" alt="Logo" />*/}
        {/* <FcCollect size={50}/> */}
        <img src={logo} alt="logo" />
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
          <Button children='Profile' onClick={handleClick} color="#100775"></Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


