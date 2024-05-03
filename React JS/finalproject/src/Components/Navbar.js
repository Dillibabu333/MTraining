import React,{useRef,useState} from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

const Navbar = ({scrollHandler, clothing, accessories, searchTerm, setSearchTerm}) => {

  const [openprofile,setOpenprofile]=useState(false);
  // const [searchTerm, setSearchTerm] = useState("");


  const menuRef=useRef();
  const userRef=useRef();

  window.addEventListener("click",(e)=>{
    if(e.target !== menuRef.current && e.target !== userRef.current){
      setOpenprofile(false);
    }
  })


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
          <Link className="Link" onClick={() => scrollHandler(clothing)}>CLOTHING</Link>
        </div>
        <div>
          <Link className="Link"  onClick={() => scrollHandler(accessories)}>ACCESSORIES</Link>
        </div>
      </div>
      <div id="searchbar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
        <input className="input" type="text" placeholder="Search for Clothing and Accessories"  value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}/>
      </div>
      <div id="user">
        <a href="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart" />
        </a>

        <div className="user">
        <i  ref={userRef} class="fa-regular fa-circle-user fa-2x profile"  onClick={()=>setOpenprofile((pr)=>!pr)}></i>
      </div>
        {openprofile && <UserProfile ref={menuRef}/>}
      </div>
    </div>
  );
};

export default Navbar;
