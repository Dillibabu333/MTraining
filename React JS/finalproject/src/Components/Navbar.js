import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const Navbar = () => {
  return (
    <div id="nav">
      <div className="logo">
        <a href="/home">
          <h1>
            <span>SHOP</span>LANE
          </h1>
        </a>
      </div>
      <div id="nav_cloth">
        <div>
          <a href="">CLOTHING</a>
        </div>
        <div>
          <a href="">ACCESSORIES</a>
        </div>
      </div>
      <div id="searchbar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
        <input className="input" type="text" placeholder="Search for Clothing and Accessories" />
      </div>
      <div id="user">
        <a href="">
          <FontAwesomeIcon icon={faCartShopping} className="cart" />
        </a>

        <a href="">
        <FontAwesomeIcon icon={faCircleUser} className="profile"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
