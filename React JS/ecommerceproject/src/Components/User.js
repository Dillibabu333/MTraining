import React from 'react'
import style from "./User.module.css"

const User = () => {
  var username=JSON.parse(localStorage.getItem("formData"))
  username=username.name;
  var mail=JSON.parse(localStorage.getItem("formData"))
  mail=mail.email;
  return (
    <div id={style.uparent}>
   
        <h3  className={style.username}>{username}</h3>
        <h3 className={style.mail}>{mail}</h3><br />
        <hr />
        <br />
        <a className={style.logout} href="/">Logout</a>
      </div>
  
  )
}

export default User