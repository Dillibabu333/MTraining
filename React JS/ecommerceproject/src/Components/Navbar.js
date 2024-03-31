import React, { useRef, useState } from "react";
import style from "./Navbar.module.css";
// import { Link } from "react-router-dom";
import User from "./User";

const Navbar = () => {
  const [openprofile,setOpenprofile]=useState(false);

  const menuRef=useRef();
  const userRef=useRef();

  window.addEventListener("click",(e)=>{
    if(e.target !== menuRef.current && e.target !== userRef.current){
      setOpenprofile(false);
    }
  })

  return (
    <div id={style.parent}>
      <div className={style.logo}>
        <img
          src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
          alt="logo"
          style={{ width: "70px", height: "70px" }}
        />
      </div>

      <div className={style.menu}>
        <ul>
          <li>
            <a  className={style.link} href="/home">HOME</a>
          </li>
          <li>
            <a className={style.link}  href="/products">PRODUCTS</a>
          </li>
          <li>
            <a  className={style.link} href="/cart">CART</a>
          </li>
         
        </ul>
      </div>
     
      <div className={style.user}>
        <i  ref={userRef} class="fa-regular fa-circle-user fa-2x" onClick={()=>setOpenprofile((pr)=>!pr)}></i>
      </div>
      {openprofile && <User ref={menuRef}/>}
    </div>
  );
};

export default Navbar;
