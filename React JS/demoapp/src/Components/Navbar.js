import React from 'react';
import style from "./Navbar.module.css";
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id={style.parent} >
    <div><img src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg" alt="" width="70px" height="70px"/></div>
    
    {/* <Link  to={"Register"} >hi</Link> */}
    {/* <div><Link to={"/"} >ABOUT</Link></div>
    <div><Link to={"/"} >CAREERS</Link></div>
    <div><Link to={"/"} >SERVICES</Link></div>
    <div><Link to={"/"} >CONTACT</Link></div>
    <div><Link to={"/"}>LOGIN</Link></div> */}
  </div>
  )
}

export default Navbar